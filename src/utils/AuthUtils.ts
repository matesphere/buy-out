import { useContext } from 'react'
import { useQuery } from '@apollo/client'
import axios from 'axios'

import { UserStateContext } from './user-state'

export const genUsername = (firstName: string, lastName: string) =>
    [firstName.toLowerCase()[0], lastName.toLowerCase()]
        .join('')
        .concat(Math.floor(Math.random() * 99).toString())

export const genPassword = () => 'abcdefg123' // TODO: password generator

interface TeamType {
    name: string
    students: Array<StudentType>
}

interface StudentType {
    firstName: string
    lastName: string
    email: string
}

export const addStudentToTeam = (
    teamNum: number,
    { firstName, lastName, email }: StudentType
) => (teams: Array<TeamType>) => {
    const teamsToUpdate = [
        ...teams.map((team) => ({
            ...team,
            students: team.students.filter(
                (student) => student.email !== email // remove student in case they are switching from one team to another!
            ),
        })),
    ]

    const updatedStudents = [
        ...teams[teamNum].students,
        { firstName, lastName, email },
    ]

    const updatedTeam = { ...teams[teamNum], students: updatedStudents }
    teamsToUpdate[teamNum] = updatedTeam

    return teamsToUpdate
}

export const useAuthQuery = (query, options, idRequired) => {
    const {
        userInfo: { userId, teamId, token },
    } = useContext(UserStateContext)

    let variables = options?.variables || {}

    if (idRequired === 'userId') {
        variables = { ...variables, user_id: userId }
    }

    if (idRequired === 'teamId') {
        variables = { ...variables, team_id: teamId }
    }

    console.log(variables)

    const queryProps = useQuery(query, {
        ...options,
        variables,
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    })

    return { ...queryProps }
}

export const mergeIdsIntoStudents = (
    teamsWithStudents,
    teamsFromResponse,
    schoolId
) =>
    teamsWithStudents
        .map(({ name, students }) => {
            const teamWithId = {
                name,
                students,
                teamId: teamsFromResponse.find((team) => team.name === name).id,
            }
            return [...teamWithId.students].map((student) => ({
                ...student,
                teamId: teamWithId.teamId,
                schoolId,
            }))
        })
        .flat()

export const createStudentsInCognito = async (students) => {
    // TODO: build retry method into promises
    const cognitoPromises = []

    students.forEach(async (student) => {
        const username = genUsername(student.firstName, student.lastName)
        const password = genPassword()

        const body = {
            ClientId: '45r6i1n1n655isehsq2spbk0me',
            Username: username,
            Password: password,
            UserAttributes: [
                {
                    Name: 'given_name',
                    Value: student.firstName,
                },
                {
                    Name: 'family_name',
                    Value: student.lastName,
                },
                {
                    Name: 'email',
                    Value: student.email,
                },
                {
                    Name: 'custom:school_id',
                    Value: student.schoolId,
                },
                {
                    Name: 'custom:team_id',
                    Value: student.teamId,
                },
                {
                    Name: 'custom:role',
                    Value: 'student',
                },
            ],
            ClientMetadata: {
                password,
            },
        }

        const promise = axios({
            method: 'post',
            url: 'https://cognito-idp.eu-west-1.amazonaws.com/',
            headers: {
                'Content-Type': 'application/x-amz-json-1.1',
                'X-Amz-Target': 'AWSCognitoIdentityProviderService.SignUp',
            },
            data: body,
        })

        cognitoPromises.push(promise)
    })

    return Promise.allSettled(cognitoPromises)
}