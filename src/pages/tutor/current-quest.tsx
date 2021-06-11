import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { gql, useQuery } from '@apollo/client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import LoginHeader from './_header'
import AccountFooter from './_footer'
import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'
import {
    LockedStageStatus,
    UnlockedStageStatus,
    SubmittedStageStatus,
    DocumentlessSubmittedStageStatus,
    FailedStageStatus,
    CompletedStageStatus,
} from '../../components/tutor/CurrentQuest'

import { useAuthQuery } from '../../utils/auth-utils'
import { TUTOR_CURRENT_QUEST_QUERY } from '../../gql/queries'

import {
    TutorCurrentQuestQuery,
    TutorCurrentQuestQueryVariables,
} from '../../gql/types/TutorCurrentQuestQuery'

import 'react-tabs/style/react-tabs.css'
import '../../scss/index.scss'

const TUTOR_CURRENT_QUEST_SUB = gql`
    subscription TutorCurrentQuestSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            username
            email
            tutor {
                school {
                    name
                }
                quests(where: { status: { _eq: "active" } }) {
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
                                feedback
                            }
                        }
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

    const document = stageProgress?.documents[0] || null

    if (stageProgress) {
        if (document) {
            switch (document.status) {
                case 'submitted':
                    return (
                        <SubmittedStageStatus
                            documents={stageProgress.documents}
                            stageProgressId={stageProgress.id}
                            stageId={stageId}
                        />
                    )
                case 'marked_failed':
                    return (
                        <FailedStageStatus
                            documents={stageProgress.documents}
                        />
                    )
                case 'marked_passed':
                    return (
                        <CompletedStageStatus
                            stageProgressId={stageProgress.id}
                        />
                    )
                default:
                    return <UnlockedStageStatus />
            }
        } else {
            if (stageProgress.status === 'completed') {
                return (
                    <CompletedStageStatus stageProgressId={stageProgress.id} />
                )
            } else if (stageProgress.status === 'submitted' && !document) {
                return (
                    <DocumentlessSubmittedStageStatus
                        stageProgressId={stageProgress.id}
                    />
                )
            }
            return <ul className="current-steps"><li><UnlockedStageStatus /></li></ul>
        }
    } else {
        return <ul className="current-steps"><li><LockedStageStatus teamId={teamId} stageId={stageId} /></li></ul>
    }
}

const TeamInfoPanel = ({ listNum, teamName, students }) => (
    <>
        <p className="mb-2 sm-type-guitar sm-type-guitar--medium red-highlight mt-2">{listNum + 1}. {teamName}</p>
        <p className="sm-type-lead sm-type-lead--medium">Team members:</p>
        <ul className="mb-2">
            {students.map(({ user: { full_name } }, i) => (
                <li key={i} className="sm-type-amp">
                    {full_name}
                </li>
            ))}
        </ul>
    </>
)

const StageInfoPanel = ({ stages, stageProgresses, teamId }) => (
    <ul className="steps">
        {stages.map(({ id, title }, i) => (
            <li key={i}>
                <p className="steps-step sm-type-lead sm-type-lead--medium">
                    {`Stage ${id}: ${title}`}
                </p>
                <div className="form-holder-border">
                    {getStageStatusDisplay(id, stageProgresses, teamId)}
                </div>
            </li>
        ))}
    </ul>
)

const TutorCurrentQuestPage = () => {
    const { loading, error, data } = useAuthQuery<
        TutorCurrentQuestQuery,
        TutorCurrentQuestQueryVariables
    >(
        TUTOR_CURRENT_QUEST_QUERY,
        { fetchPolicy: 'network-only', pollInterval: 2000 },
        'userId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    // subscribeToMore({
    //     document: TUTOR_CURRENT_QUEST_SUB,
    //     variables: { user_id: userId },
    //     context: {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     },

    //     updateQuery: (prev, { subscriptionData }) => {
    //         if (!subscriptionData.data) return prev

    //         // TODO big check whether status of any stages has actually changed
    //         // const stageProgressesWithStatus =
    //         //     subscriptionData.data.user[0].student.team.stage_progresses

    //         // if (subscriptionData.)

    //         return {
    //             user_by_pk: {
    //                 ...prev.user_by_pk,
    //                 tutor: {
    //                     ...prev.user_by_pk.tutor,
    //                     quests: {
    //                         ...prev.user_by_pk.tutor.quests,
    //                         teams: subscriptionData.data.user_by_pk.tutor.teams,
    //                     },
    //                 },
    //             },
    //         }
    //     },
    // })

    const {
        user_by_pk: {
            tutor: { quests },
        },
        stage,
    } = data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Current Quests</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="notes">
                <LoginHeader headerText="Current Quests" />
                <section className="container" id="currentquest">
                    <Tabs>
                        <TabList>
                            {quests.map((_, i) => (
                                <Tab key={i}>Current Quest {i + 1}</Tab>
                            ))}
                        </TabList>

                        {quests.map((quest, i) => (
                            <TabPanel key={i}>
                                {quest.teams.map(
                                    (
                                        {
                                            id,
                                            name,
                                            students,
                                            stage_progresses,
                                        },
                                        i
                                    ) => (
                                        <div key={i} className="row tutor mt-4 side-grey">
                                            <div className="col-lg-3">
                                                <TeamInfoPanel
                                                    listNum={i}
                                                    teamName={name}
                                                    students={students}
                                                />
                                            </div>
                                            <div className="col-lg-9">
                                                <StageInfoPanel
                                                    stages={stage}
                                                    stageProgresses={
                                                        stage_progresses
                                                    }
                                                    teamId={id}
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </TabPanel>
                        ))}
                    </Tabs>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorCurrentQuestPage
