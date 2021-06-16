import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { gql } from '@apollo/client'

import LoginHeader from './_header'
import AccountFooter from './_footer'
import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'

import {
    TutorHubQuery,
    TutorHubQueryVariables,
} from '../../gql/types/TutorHubQuery'

import HelpIcon from '../../assets/help-icon.svg'
import '../../scss/index.scss'

const TUTOR_HUB_QUERY = gql`
    query TutorHubQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            username
            email
            tutor {
                school {
                    name
                }
                quests {
                    id
                    status
                    started_at
                    completed_at
                    teams {
                        id
                        name
                    }
                }
            }
        }
    }
`

const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const PreviousQuestDisplay = ({ quest }) => (
    <>
        <span>
            {getDateFromTimestamp(quest.started_at)} -{' '}
            {getDateFromTimestamp(quest.completed_at)}, {quest.teams.length}{' '}
            teams{' '}
        </span>
        <Link to="/login">View</Link>
    </>
)

const CurrentQuestDisplay = ({ quest }) => (
    <>
        <span>
            Started on {getDateFromTimestamp(quest.started_at)},{' '}
            {quest.teams.length} teams
        </span>{' '}
    </>
)

const TutorHub = () => {
    const { loading, error, data } = useAuthQuery<
        TutorHubQuery,
        TutorHubQueryVariables
    >(TUTOR_HUB_QUERY, null, 'userId')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const {
        user_by_pk: {
            full_name: fullName,
            tutor: {
                school: { name: schoolName },
                quests,
            },
        },
    } = data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="Tutor Hub" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                {fullName}'s Hub
                            </h2>
                            <p className="sm-type-amp">{schoolName}</p>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                Your Quests
                            </p>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Previous Quests
                                </p>
                                <ul>
                                    {quests
                                        .filter(
                                            (quest) =>
                                                quest.status === 'complete'
                                        )
                                        .map((quest, i) => (
                                            <li
                                                key={i}
                                                className="sm-type-amp mb-2"
                                            >
                                                <PreviousQuestDisplay
                                                    quest={quest}
                                                />
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Current Quest(s)
                                </p>
                                <ul>
                                    {quests
                                        .filter(
                                            (quest) => quest.status === 'active'
                                        )
                                        .map((quest, i) => (
                                            <li
                                                key={i}
                                                className="sm-type-amp mb-2"
                                            >
                                                <CurrentQuestDisplay
                                                    quest={quest}
                                                />
                                            </li>
                                        ))}
                                </ul>
                                <Link to="/tutor/current-quests">View all</Link>
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Start New Quest
                                </p>
                                <p className="sm-type-amp">
                                    Start a new{' '}
                                    <Link to="/tutor/add-students">
                                        Quest here
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Here you can see your previous and current
                                    Quests. You can also start a new Quest
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorHub
