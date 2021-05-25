import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useMutation } from '@apollo/client'

import {
    CREATE_QUEST_WITH_TEAMS,
    START_QUEST,
    startQuestMapper,
} from '../../gql/mutations'

import LoginHeader from './_header'
import AccountFooter from './_footer'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'

import {
    addStudentToTeam,
    mergeIdsIntoStudents,
    createStudentsInCognito,
} from '../../utils/auth-utils'

import { NewQuestContext } from '../tutor'

import HelpIcon from '../../assets/help-icon.svg'
import Cross from '../../assets/cross.svg'
import '../../scss/index.scss'

const SCHOOL_ID = 'e89e1d0c-4be6-4716-a597-a7c1f6d0ee6f'
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
        {students.map(({ firstName, lastName }, i) => (
            <p key={i} className="sm-type-amp">
                {firstName} {lastName}
                <span className="cross-icon">
                    <Cross />
                </span>
            </p>
        ))}
    </>
)

const Student = ({ student, teams, setTeams }) => (
    <div className="side-grey row mb-4">
        <div className="col-lg-6">
            <p className="sm-type-guitar sm-type-guitar--medium">
                {student.firstName} {student.lastName}
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

const createStudents = async (
    studentsWithTeamId,
    setCognitoLoading,
    setCognitoResponse
) => {
    setCognitoLoading(true)
    const response = await createStudentsInCognito(studentsWithTeamId)

    setCognitoLoading(false)
    setCognitoResponse(response)
}

const CreateStudentsSection = ({
    teamsWithStudents,
    teamsFromResponse,
    cognitoResponse,
    setCognitoResponse,
}) => {
    const [cognitoLoading, setCognitoLoading] = useState(false)
    // TODO: response is array of promises - need to handle rejections
    // const [cognitoError, setCognitoError] = useState(false)

    const studentsWithTeamId = mergeIdsIntoStudents(
        teamsWithStudents,
        teamsFromResponse,
        SCHOOL_ID
    )

    useEffect(() => {
        if (cognitoResponse.length === 0) {
            createStudents(
                studentsWithTeamId,
                setCognitoLoading,
                setCognitoResponse
            )
        }
    }, [])

    return (
        <>
            {cognitoLoading && (
                <>
                    <p>Adding students to teams...</p>
                    <LoadingSpinner delay={200} />
                </>
            )}

            {/* {cognitoError && <p>Oops, problem adding students!</p>} */}
        </>
    )
}

const ConfirmModal = ({ teams, showModal, setShowModal, setStudentsToAdd }) => {
    const [createQuestWithTeams, createQuestWithTeamsResponse] = useMutation(
        CREATE_QUEST_WITH_TEAMS
    )
    const [startQuest, startQuestResponse] = useMutation(START_QUEST)
    const [cognitoResponse, setCognitoResponse] = useState([])

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

                        {!createQuestWithTeamsResponse.data && (
                            <>
                                <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                    {`You are about to create ${teams.length} teams! Is this correct?`}{' '}
                                </p>

                                <button
                                    className="btn-solid-lg mt-4"
                                    onClick={() => {
                                        createQuestWithTeams({
                                            variables: {
                                                objects: teams.map(
                                                    ({ name }) => ({
                                                        name,
                                                        quest: {
                                                            data: {
                                                                tutor_id:
                                                                    TUTOR_ID,
                                                            },
                                                        },
                                                    })
                                                ),
                                            },
                                        })
                                    }}
                                >
                                    Yes, create teams
                                </button>
                            </>
                        )}

                        {createQuestWithTeamsResponse.loading && (
                            <LoadingSpinner delay={200} />
                        )}

                        {createQuestWithTeamsResponse.data && (
                            <div>
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    {`Created ${createQuestWithTeamsResponse.data.insert_team.returning.length} teams!`}{' '}
                                </p>

                                <CreateStudentsSection
                                    teamsWithStudents={teams}
                                    teamsFromResponse={
                                        createQuestWithTeamsResponse.data
                                            .insert_team.returning
                                    }
                                    cognitoResponse={cognitoResponse}
                                    setCognitoResponse={setCognitoResponse}
                                />

                                {cognitoResponse.length > 0 && (
                                    <>
                                        <p className="sm-type-guitar sm-type-guitar--medium">
                                            {`${cognitoResponse.length} students added.`}{' '}
                                        </p>
                                        <button
                                            className="btn-solid-lg mt-4 mb-4"
                                            onClick={() => {
                                                startQuest({
                                                    variables: {
                                                        quest_id:
                                                            createQuestWithTeamsResponse
                                                                .data
                                                                .insert_team
                                                                .returning
                                                                .quest_id,
                                                    },
                                                })
                                                setShowModal(false)
                                                setStudentsToAdd([])
                                            }}
                                        >
                                            START QUEST!
                                        </button>
                                        <span>
                                            You'll now be able to access this
                                            quest from your hub
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {startQuestResponse.data && (
                <div className="modal-window">
                    <div>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                            Quest created!{' '}
                        </p>
                        <Link
                            to="/tutor/current-quest"
                            className="btn-solid-lg mt-4 mb-4"
                        >
                            View current quests
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

const TutorCreateTeamPage = () => {
    const [teams, setTeams] = useState([])
    const [showModal, setShowModal] = useState(false)
    // const { loading, error, data } = useQuery(GET_STUDENTS)
    const { studentsToAdd, setStudentsToAdd } = useContext(NewQuestContext)

    // if (loading) return (<section className="container" id="main"><div className="row"><div className="col-lg-12 text-align-center"><div className="loader"></div><p className="sm-type-drum sm-type-drum--medium">Loading...</p></div></div></section>)
    // if (error) return `Error! ${error.message}`

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
                                {studentsToAdd.map((student, i) => (
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

                <ConfirmModal
                    {...{ teams, showModal, setShowModal, setStudentsToAdd }}
                />

                <AccountFooter />
            </main>
        </>
    )
}

export default TutorCreateTeamPage
