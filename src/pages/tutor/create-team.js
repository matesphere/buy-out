import React, { useState, useEffect } from 'react'
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

// TODO: sort out 'team/teams' pluralisation in modals

const TeamInput = ({ setTeams }) => {
    const [teamName, setTeamName] = useState('')
    return (
        <form
            className="container"
            onSubmit={(e) => {
                e.preventDefault()
                setTeams((teams) => [
                    ...teams,
                    { name: teamName, students: [] },
                ])
                setTeamName('')
            }}
        >
            <div className="side-grey row mb-4">
                <div className="col-lg-6 mb-2">
                    <label className="form-label sm-type-amp">Name</label>
                    <span>
                        <input
                            id="name"
                            type="name"
                            className="form-control"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
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
}

const Team = ({ team: { name, students }, setTeams }) => (
    <>
        <p className="sm-type-leadguitar sm-type-lead--medium">
            <span className="blackdot"></span> {name}
            <span
                className="cross-icon"
                onClick={() =>
                    setTeams((teams) =>
                        teams.filter((team) => team.name !== name)
                    )
                }
            >
                <Cross />
            </span>
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
    const teamsToUpdate = [
        ...teams.map((team) => ({
            ...team,
            students: team.students.filter(
                (student) => student.userId !== user_id
            ),
        })),
    ]

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

const useDelayedRender = (delay) => {
    const [delayed, setDelayed] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), delay)
        return () => clearTimeout(timeout)
    }, [])

    console.log(delayed)
    return (fn) => !delayed && fn()
}

const LoadingSpinner = ({ delay }) => {
    const delayedRender = useDelayedRender(delay)

    return delayedRender(() => <div className="loader"></div>)
}

const ConfirmModal = ({ teams, showModal, setShowModal }) => {
    const [createTeams, createTeamsResponse] = useMutation(
        CREATE_TEAMS_WITH_STUDENTS
    )
    const [startQuest, startQuestResponse] = useMutation(START_QUEST)

    return (
        <>
            {showModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => setShowModal(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Cancel
                        </button>

                        {!createTeamsResponse.data && (
                            <>
                                <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                    {`You are about to create ${teams.length} teams! Is this correct?`}{' '}
                                </p>

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
                                    Yes, create teams
                                </button>
                            </>
                        )}

                        {createTeamsResponse.loading && (
                            <LoadingSpinner delay={200} />
                        )}

                        {createTeamsResponse.data && (
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
                                        setShowModal(false)
                                    }}
                                >
                                    START QUEST!
                                </button>
                                <span>
                                    This will unlock Stage 1 for all created
                                    teams
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {startQuestResponse.data && (
                <div className="modal-window">
                    <div>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            {`Stage 1 unlocked for ${startQuestResponse.data.insert_stage_progress.returning.length} teams!`}{' '}
                        </p>
                        <a
                            href="/tutor/current-quest"
                            className="btn-solid-lg mt-4 mb-4"
                        >
                            Go to current quest
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

const TutorAddStudentPage = () => {
    const [teams, setTeams] = useState([])
    const [showModal, setShowModal] = useState(false)
    const { loading, error, data } = useQuery(GET_STUDENTS)

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
                                Add all required teams here...
                            </p>

                            <TeamInput setTeams={setTeams} />

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                STEP 2: Assign students
                            </h3>
                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                ...then assign students to teams here
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
                                onClick={() => setShowModal(true)}
                            >
                                Create teams
                            </button>
                        </div>

                        <div className="col-lg-4">
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

                                {teams.length > 0 && (
                                    <>
                                        {teams.map((team, i) => (
                                            <Team
                                                key={i}
                                                pos={i}
                                                team={team}
                                                setTeams={setTeams}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <ConfirmModal {...{ teams, showModal, setShowModal }} />

                <AccountFooter />
            </main>
        </>
    )
}

export default TutorAddStudentPage
