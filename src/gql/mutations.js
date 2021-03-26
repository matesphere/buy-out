import { gql } from '@apollo/client'

import { genUsername, genPassword } from '../utils/LoginUtils'

export const INSERT_STUDENTS = gql`
    mutation InsertStudents($objects: [student_insert_input!]!) {
        insert_student(objects: $objects) {
            returning {
                school_id
                user {
                    id
                    name
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
    const mappedStudents = students.map(({ name, email }) => ({
        school_id: schoolId,
        user: {
            data: {
                name: name,
                email: email,
                username: genUsername(name),
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
                        name
                    }
                }
                tutor {
                    user {
                        name
                    }
                }
            }
        }
    }
`

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
