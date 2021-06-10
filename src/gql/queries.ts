import { gql } from '@apollo/client'

// student

export const STAGE_QUERY = gql`
    query StageQuery(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const DOCUMENT_QUERY = gql`
    query DocumentQuery(
        $team_id: uuid!
        $stage_id: Int!
        $includeDevOptions: Boolean!
    ) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                        ]
                    }
                ) {
                    id
                    status
                    feedback
                    doc_data
                }
            }
            team_development_options @include(if: $includeDevOptions) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

// TODO: change state to marked_passed for this!
export const DOCUMENT_COMPLETE_QUERY = gql`
    query DocumentCompleteQuery($team_id: uuid!, $stage_id: Int!) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(
                    where: { _or: [{ status: { _eq: marked_passed } }] }
                ) {
                    id
                    doc_data
                    feedback
                }
            }
        }
        stage_by_pk(id: $stage_id) {
            title
        }
    }
`

export const TEAM_QUERY = gql`
    query TeamQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
        }
    }
`

// tutor

export const TUTOR_CURRENT_QUEST_QUERY = gql`
    query TutorCurrentQuestQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            username
            email
            tutor {
                school {
                    name
                }
                quests(where: { status: { _eq: "active" } }) {
                    teams {
                        id
                        name
                        students {
                            id
                            user {
                                full_name
                            }
                        }
                        stage_progresses {
                            id
                            team_id
                            stage_id
                            status
                            documents {
                                id
                                status
                                feedback
                            }
                        }
                    }
                }
            }
        }
        stage {
            id
            title
        }
    }
`

export const TUTOR_DOCUMENT_QUERY = gql`
    query TutorDocumentQuery(
        $stage_progress_id: uuid!
        $includeDevOptions: Boolean!
    ) {
        stage_progress_by_pk(id: $stage_progress_id) {
            id
            stage_id
            status
            documents(
                where: {
                    _or: [
                        { status: { _eq: submitted } }
                        { status: { _eq: marked_passed } }
                    ]
                }
            ) {
                id
                status
                feedback
                doc_data
            }
            team {
                team_development_options @include(if: $includeDevOptions) {
                    id
                    team_choice_name
                    development_option {
                        id
                        display_name
                        option
                    }
                }
            }
        }
    }
`
