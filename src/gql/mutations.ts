import { gql } from '@apollo/client'

// student

export const SAVE_WORK_INITIAL = gql`
    mutation SaveWorkInitial($stageProgressId: uuid!, $docData: jsonb!) {
        insert_document_one(
            object: {
                stage_progress_id: $stageProgressId
                doc_data: $docData
                status: draft
            }
        ) {
            id
            status
        }
    }
`

export const SAVE_WORK = gql`
    mutation SaveWork($docId: uuid!, $docData: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _set: { doc_data: $docData }
        ) {
            id
            status
        }
    }
`

export const SUBMIT_WORK_INITIAL = gql`
    mutation SubmitWorkInitial($stageProgressId: uuid, $docData: jsonb!) {
        insert_document_one(
            object: {
                stage_progress_id: $stageProgressId
                doc_data: $docData
                status: submitted
            }
        ) {
            id
            status
        }
    }
`

export const SUBMIT_WORK = gql`
    mutation SubmitWork($docId: uuid!, $docData: jsonb!) {
        update_document_by_pk(
            pk_columns: { id: $docId }
            _set: { doc_data: $docData, status: submitted }
        ) {
            id
            status
        }
    }
`

export const SET_TEAM_POSITIONS = gql`
    mutation SetTeamPositions($objects: [student_insert_input!]!) {
        insert_student(
            objects: $objects
            on_conflict: {
                constraint: student_user_id_key
                update_columns: [position]
            }
        ) {
            returning {
                id
            }
        }
    }
`

export const CHOOSE_DEVELOPMENT_OPTIONS = gql`
    mutation ChooseDevelopmentOptions(
        $objects: [team_development_option_insert_input!]!
    ) {
        insert_team_development_option(objects: $objects) {
            returning {
                id
            }
        }
    }
`

// tutor

export const CREATE_QUEST_WITH_TEAMS = gql`
    mutation InsertTeam($objects: [team_insert_input!]!) {
        insert_team(objects: $objects) {
            returning {
                quest_id
            }
        }
    }
`

export const START_QUEST = gql`
    mutation StartQuest($quest_id: uuid!) {
        update_quest_by_pk(
            pk_columns: { id: $quest_id }
            _set: { status: "active" }
        ) {
            id
            status
        }
    }
`

export const UNLOCK_STAGE = gql`
    mutation UnlockStage($teamId: uuid, $stageId: Int) {
        insert_stage_progress_one(
            object: { team_id: $teamId, stage_id: $stageId, status: unlocked }
        ) {
            id
            team_id
            stage_id
            status
        }
    }
`

export const MARK_PASSED = gql`
    mutation MarkPassed($docId: uuid, $stageProgressId: uuid) {
        update_document(
            _set: { status: marked_passed, feedback: "nice job" }
            where: { id: { _eq: $docId } }
        ) {
            returning {
                id
                feedback
                status
            }
        }
        update_stage_progress(
            _set: { status: completed }
            where: { id: { _eq: $stageProgressId } }
        ) {
            returning {
                id
                stage {
                    id
                    title
                }
                status
                team_id
            }
        }
    }
`

// TODO remove this from prod!!!!!
export const RESET_DB = gql`
    mutation ResetDB {
        delete_team(where: {}) {
            returning {
                id
            }
        }
        delete_user(
            where: { id: { _neq: "8163dda8-eac2-4997-86e7-bb8addc37c3b" } }
        ) {
            returning {
                id
            }
        }
    }
`
