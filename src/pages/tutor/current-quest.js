import React from 'react'
import { Helmet } from 'react-helmet'
import { gql, useQuery } from '@apollo/client'

import LoginHeader from './_header'
import AccountFooter from './_footer'
import {
    LockedStageStatus,
    UnlockedStageStatus,
    SubmittedStageStatus,
    FailedStageStatus,
    CompletedStageStatus,
} from '../../components/tutor/CurrentQuest'

import '../../scss/index.scss'

const TUTOR_ID = 'da6b4b46-09e1-4ff3-89d6-91cba1cfe6ca' // TODO another one to store

const TUTOR_CURRENT_QUEST_QUERY = gql`
    query TutorCurrentQuestQuery($tutor_id: uuid!) {
        tutor_by_pk(id: $tutor_id) {
            school {
                name
            }
            user {
                full_name
                username
                email
            }
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
                        link
                        feedback
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
const TUTOR_CURRENT_QUEST_SUB = gql`
    subscription TutorCurrentQuestSub($tutor_id: uuid!) {
        tutor_by_pk(id: $tutor_id) {
            school {
                name
            }
            user {
                full_name
                username
                email
            }
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
                        link
                        feedback
                    }
                }
            }
        }
    }
`

const getStageStatusDisplay = (stageId, stageProgresses, teamId) => {
    const stageProgress = stageProgresses.find(
        (stageProgress) => stageProgress.stage_id === stageId
    )

    if (stageProgress) {
        switch (stageProgress.status) {
            case 'submitted':
                return (
                    <SubmittedStageStatus
                        documents={stageProgress.documents}
                        stageProgressId={stageProgress.id}
                    />
                )
            case 'failed':
                return <FailedStageStatus documents={stageProgress.documents} />
            case 'completed':
                return (
                    <CompletedStageStatus documents={stageProgress.documents} />
                )
            default:
                return <UnlockedStageStatus />
        }
    } else {
        return <LockedStageStatus teamId={teamId} stageId={stageId} />
    }
}

const TeamInfoPanel = ({ listNum, teamName, students }) => (
    <>
        <div className="quest-step quest-step-complete step">
            <div className="quest-step-text">
                <span className="quest-step-number">{listNum + 1}</span>
                {teamName}
            </div>
        </div>
        <div className="mt-3">
            {students.map(({ user: { full_name } }, i) => (
                <p key={i} className="sm-type-amp">
                    {full_name}
                </p>
            ))}
        </div>
    </>
)

const StageInfoPanel = ({ stages, stageProgresses, teamId }) => (
    <ul className="steps">
        {stages.map(({ id, title }, i) => (
            <li key={i}>
                <p className="steps-step sm-type-lead sm-type-lead--medium">
                    {`Stage ${id}: ${title}`}
                </p>
                {getStageStatusDisplay(id, stageProgresses, teamId)}
            </li>
        ))}
    </ul>
)

const TutorPage = () => {
    const { loading, error, data, subscribeToMore } = useQuery(
        TUTOR_CURRENT_QUEST_QUERY,
        {
            variables: { tutor_id: TUTOR_ID },
        }
    )

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    subscribeToMore({
        document: TUTOR_CURRENT_QUEST_SUB,
        variables: { tutor_id: TUTOR_ID },

        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev

            // TODO big check whether status of any stages has actually changed
            // const stageProgressesWithStatus =
            //     subscriptionData.data.user[0].student.team.stage_progresses

            // if (subscriptionData.)

            return {
                tutor_by_pk: {
                    ...prev.tutor_by_pk,
                    teams: subscriptionData.data.tutor_by_pk.teams,
                },
            }
        },
    })

    const {
        tutor_by_pk: { teams },
        stage,
    } = data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Current Quest</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="notes">
                <LoginHeader headerText="Current Quest" />
                <section className="container" id="main">
                    {teams.map(
                        ({ id, name, students, stage_progresses }, i) => (
                            <div key={i} className="row tutor mt-4">
                                <div className="col-lg-4">
                                    <TeamInfoPanel
                                        listNum={i}
                                        teamName={name}
                                        students={students}
                                    />
                                </div>
                                <div className="col-lg-8">
                                    <StageInfoPanel
                                        stages={stage}
                                        stageProgresses={stage_progresses}
                                        teamId={id}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorPage
