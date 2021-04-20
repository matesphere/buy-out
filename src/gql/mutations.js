import { gql } from '@apollo/client'

import { genUsername, genPassword } from '../utils/LoginUtils'

export const INSERT_STUDENTS = gql`
    mutation InsertStudents($objects: [student_insert_input!]!) {
        insert_student(objects: $objects) {
            returning {
                school_id
                user {
                    id
                    full_name
                    email
                    username
                    password
                }
            }
        }
    }
`

// TODO: this should really only take fields & map them to the right shape for Hasura, not generate anything
export const insertStudentsMapper = (students, schoolId) => {
    const mappedStudents = students.map(({ firstName, lastName, email }) => ({
        school_id: schoolId,
        user: {
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: genUsername(firstName, lastName),
                password: genPassword(),
            },
        },
    }))

    return { objects: mappedStudents }
}

export const CREATE_TEAMS_WITH_STUDENTS = gql`
    mutation InsertTeam($objects: [team_insert_input!]!) {
        insert_team(objects: $objects) {
            returning {
                id
                name
                students {
                    user {
                        full_name
                    }
                }
                tutor {
                    user {
                        full_name
                    }
                }
            }
        }
    }
`

// we have to pass school ID here in order to fake a full insert, so the update to student works. this will hopefully be replaced when nested updates arrive
export const createTeamWithStudentsMapper = (teams, tutorId) => {
    const mappedTeams = teams.map(({ name, students }) => ({
        name,
        tutor_id: tutorId,
        students: {
            data: students.map(({ userId, schoolId }) => ({
                user_id: userId,
                school_id: schoolId,
            })),
            on_conflict: {
                constraint: 'student_user_id_key',
                update_columns: 'team_id',
            },
        },
    }))

    return { objects: mappedTeams }
}

export const START_QUEST = gql`
    mutation StartQuest($objects: [stage_progress_insert_input!]!) {
        insert_stage_progress(objects: $objects) {
            returning {
                stage {
                    id
                    title
                }
                status
            }
        }
    }
`

export const startQuestMapper = (teamIds) => ({
    objects: teamIds.map((teamId) => ({
        team_id: teamId,
        status: 'unlocked',
        stage_id: 1,
    })),
})

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

export const SUBMIT_WORK = gql`
    mutation SubmitWork($stageProgressId: uuid, $docLink: String) {
        insert_document_one(
            object: {
                stage_progress_id: $stageProgressId
                link: $docLink
                status: submitted
            }
        ) {
            id
            link
            status
        }
        update_stage_progress(
            where: { id: { _eq: $stageProgressId } }
            _set: { status: submitted }
        ) {
            returning {
                id
                status
            }
        }
    }
`

export const MARK_PASSED = gql`
    mutation MarkPassed($documentId: uuid, $stageProgressId: uuid) {
        update_document(
            _set: { status: marked_passed, feedback: "nice job" }
            where: { id: { _eq: $documentId } }
        ) {
            returning {
                id
                link
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
