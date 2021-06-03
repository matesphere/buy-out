import { gql } from '@apollo/client'

export const STAGE_QUERY = gql`
    query StageQuery($team_id: uuid!, $stage_id: Int) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
            }
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
                documents(where: { status: { _eq: draft } }) {
                    id
                    doc_data
                }
            }
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
`

export const DOCUMENT_COMPLETE_QUERY = gql`
    query DocumentCompleteQuery($team_id: uuid!, $stage_id: Int) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
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
                    doc_data
                    feedback
                }
            }
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
                user {
                    username
                    full_name
                }
            }
        }
    }
`
