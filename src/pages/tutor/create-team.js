import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useQuery, useMutation } from '@apollo/client'

import { GET_STUDENTS } from '../../gql/queries'
import {
    CREATE_TEAMS_WITH_STUDENTS,
    START_QUEST,
    createTeamWithStudentsMapper,
    startQuestMapper,
} from '../../gql/mutations'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import HelpIcon from '../../assets/help-icon.svg'
import Cross from '../../assets/cross.svg'
import '../../scss/index.scss'

const TUTOR_ID = 'da6b4b46-09e1-4ff3-89d6-91cba1cfe6ca' // TODO another one to store

const TeamInput = ({ setTeams }) => (
    <form
        className="container"
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
                </span>
            </div>
            <div className="col-lg-6 mb-2">
                <button type="submit" className="btn-outline-lg">
                    Add team
                </button>
            </div>
        </div>
    </form>
)

const Team = ({ team: { name, students } }) => (
    <>
        <p className="sm-type-leadguitar sm-type-lead--medium">
            <span className="blackdot"></span> {name}
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

const addStudentToTeam = (
    teamNum,
    { user_id, school_id, user: { full_name } }
) => (teams) => {
    const teamsToUpdate = [...teams]
    const updatedStudents = [
        ...teams[teamNum].students,
        { name: full_name, userId: user_id, schoolId: school_id },
    ]
    const updatedTeam = { ...teams[teamNum], students: updatedStudents }
    teamsToUpdate[teamNum] = updatedTeam

    return teamsToUpdate
}

const Student = ({ student, teams, setTeams }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-6">
            <p className="sm-type-guitar sm-type-guitar--medium">
                {student.user.full_name}
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
    const [createTeams, createTeamsResponse] = useMutation(
        CREATE_TEAMS_WITH_STUDENTS
    )
    const [startQuest, startQuestResponse] = useMutation(START_QUEST)

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
                                STEP 1: Create Teams
                            </h2>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                Add ALL of your Team names before assigning students.
                            </p>

                            <TeamInput setTeams={setTeams} />

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 2: Student list
                            </h3>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                Add ALL of your students to teams before you "Save teams".
                            </p>
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
                        </div>

                        <div className="col-lg-4">
                            {teams.length > 0 && (
                                <>
                                    <p className="sm-type-guitar mb-2">
                                        <span className="side-icon side-icon-orange">
                                            <HelpIcon />
                                        </span>
                                        Teams
                                    </p>

                                    <div className="side-grey">
                                        <p className="sm-type-amp">
                                            Your teams will appear below.
                                        </p>
                                        {teams.map((team, i) => (
                                            <Team key={i} pos={i} team={team} />
                                        ))}
                                    </div>
                                </>
                            )}

                            {createTeamsResponse.data && (
                                <div className="modal-window">
                                    <div>
                                    <p className="sm-type-guitar sm-type-guitar--medium">
                                        {`Created ${createTeamsResponse.data.insert_team.returning.length} teams!`}{' '}
                                    </p>
                                    <button
                                        className="btn-solid-lg mt-4 mb-4"
                                        onClick={() => {
                                            startQuest({
                                                variables: startQuestMapper(
                                                    createTeamsResponse.data.insert_team.returning.map(
                                                        (obj) => obj.id
                                                    )
                                                ),
                                            })
                                        }}
                                    >
                                        START QUEST!
                                    </button>

                                        <a href="/tutor/create-team" className="sm-type-amp mt-4">
                                            Assign more students to team
                                        </a>
                                    {startQuestResponse.data && (
                                        <div className="modal-window">
                                            <div>
                                                <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                                    {`Stage 1 unlocked for ${startQuestResponse.data.insert_stage_progress.returning.length} teams!`}{' '}
                                                </p>
                                                <a href="/tutor/current-quest" className="btn-solid-lg mt-4 mb-4">
                                                    Go to current quest
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorAddStudentPage
