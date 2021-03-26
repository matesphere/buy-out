import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useQuery, useMutation } from '@apollo/client'

import { GET_STUDENTS } from '../../gql/queries'
import {
    CREATE_TEAMS_WITH_STUDENTS,
    createTeamWithStudentsMapper,
} from '../../gql/mutations'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import HelpIcon from '../../assets/help-icon.svg'
import Cross from '../../assets/cross.svg'
import '../../scss/index.scss'

const DOTS = ['yellowdot', 'tealdot', 'reddot', 'purpledot']
const TUTOR_ID = 'da6b4b46-09e1-4ff3-89d6-91cba1cfe6ca' // TODO another one to store

const TeamInput = ({ setTeams }) => (
    <form
        onSubmit={(e) => {
            e.preventDefault()
            console.log(e.target.name.value)
            setTeams((teams) => [
                ...teams,
                { name: e.target.name.value, students: [] },
            ])
        }}
    >
        <div className="side-grey row mb-4">
            <div className="col-lg-6 mb-2">
                <label className="form-label sm-type-amp">Name</label>
                <span>
                    <input id="name" type="name" className="form-control" />
                    <button type="submit">Add team</button>
                </span>
            </div>
        </div>
    </form>
)

const Team = ({ pos, team: { name, students } }) => (
    <>
        <p className="sm-type-leadguitar sm-type-lead--medium">
            <span className={DOTS[pos]}></span> {name}
        </p>
        {students.map(({ name }, i) => (
            <p key={i} className="sm-type-amp">
                {name}{' '}
                <span className="cross-icon">
                    <Cross />
                </span>
            </p>
        ))}
    </>
)

const addStudentToTeam = (teamNum, { user_id, school_id, user: { name } }) => (
    teams
) => {
    const teamsToUpdate = [...teams]
    const updatedStudents = [
        ...teams[teamNum].students,
        { name, userId: user_id, schoolId: school_id },
    ]
    const updatedTeam = { ...teams[teamNum], students: updatedStudents }
    teamsToUpdate[teamNum] = updatedTeam

    return teamsToUpdate
}

const Student = ({ student, teams, setTeams }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-6">
            <p className="sm-type-guitar sm-type-guitar--medium">
                {student.user.name}
            </p>
        </div>
        <div className="col-lg-6">
            <div className="multiple-choice">
                <select
                    defaultValue="none"
                    className="form-control"
                    onChange={({ target: { value } }) => {
                        setTeams(addStudentToTeam(value, student))
                    }}
                >
                    <option disabled value="none">
                        {' '}
                        -- select a team --{' '}
                    </option>
                    {teams.map(({ name }, i) => (
                        <option key={i} value={i}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
)

const TutorAddStudentPage = () => {
    const [teams, setTeams] = useState([])
    const { loading, error, data } = useQuery(GET_STUDENTS)
    const [createTeams, response] = useMutation(CREATE_TEAMS_WITH_STUDENTS)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>New Quest - Create Teams</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="New Quest" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Create Teams
                            </h2>
                            {/* <p className="sm-type-lead sm-type-lead--medium mb-4">
                                03.05.2020 - Class 4B 2020
                            </p> */}

                            <TeamInput setTeams={setTeams} />

                            <form
                                className="mb-4 container"
                                id="form-login"
                                action="/account/tutor-add-student-to-teams"
                            >
                                {data.student.map((student, i) => (
                                    <Student
                                        key={i}
                                        student={student}
                                        teams={teams}
                                        setTeams={setTeams}
                                    />
                                ))}
                            </form>
                        </div>
                    </div>
                    {teams.length > 0 && (
                        <>
                            <div className="col-lg-4">
                                <p className="sm-type-guitar mb-2">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Teams
                                </p>
                                <div className="side-grey">
                                    {teams.map((team, i) => (
                                        <Team key={i} pos={i} team={team} />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    <button
                        className="btn-solid-lg mt-4"
                        onClick={() => {
                            createTeams({
                                variables: createTeamWithStudentsMapper(
                                    teams,
                                    TUTOR_ID
                                ),
                            })
                        }}
                    >
                        Save teams
                    </button>
                    // TODO: adding start quest mutation here
                    {response.data && (
                        <>
                            <div className="col-lg-12">
                                {`Created ${response.data.insert_team.returning.length} teams!`}{' '}
                                <a
                                    onClick={() => {}}
                                    href="/tutor/current-quest"
                                >
                                    Start Quest! ->
                                </a>
                            </div>
                            <br />
                            <br />
                        </>
                    )}
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorAddStudentPage
