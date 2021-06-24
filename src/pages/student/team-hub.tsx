import React, { useContext } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gql } from '@apollo/client'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'
import { POSITION_DISPLAY_NAME } from '../../utils/common-utils'

import {
    TeamHubQuery,
    TeamHubQueryVariables,
} from '../../gql/types/TeamHubQuery'

import Lock from '../../assets/lock.svg'
import Ticktrbl from '../../assets/tick-trbl.svg'
import Ticktrbl2 from '../../assets/tick-trbl2.svg'
import Ticktlbr from '../../assets/tick-tlbr.svg'
import Ticklr from '../../assets/tick-lr.svg'
import Ticklr2 from '../../assets/tick-lr2.svg'
import Tickrl from '../../assets/tick-rl.svg'
import Tickrl2 from '../../assets/tick-rl2.svg'
import Ticktb1 from '../../assets/tick-tp1.svg'
import Ticktb2 from '../../assets/tick-tp2.svg'
import Ticktb3 from '../../assets/tick-tp3.svg'
import Ticktb4 from '../../assets/tick-tp4.svg'
import Tick from '../../assets/tick.svg'
import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

const TEAM_HUB_QUERY = gql`
    query TeamHubQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            student {
                team {
                    name
                    stage_progresses {
                        stage_id
                        status
                    }
                    students {
                        position
                        user {
                            full_name
                        }
                    }
                    team_development_options(
                        order_by: { development_option: { id: asc } }
                    ) {
                        shortlist
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

const TEAM_HUB_SUB = gql`
    subscription TeamHubSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            student {
                team {
                    name
                    stage_progresses {
                        stage_id
                        status
                    }
                    students {
                        user {
                            full_name
                        }
                    }
                    team_development_options {
                        shortlist
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
    }
`

const getStageClasses = (status) => {
    switch (status) {
        case 'unlocked':
            return 'quest-step-unlocked quest-step-highlight'
        case 'submitted':
            return 'quest-step-submitted'
        case 'completed':
            return 'quest-step-complete'
        default:
            return ''
    }
}

const StageButton = ({ id, title, status }) => (
    <div className={`quest-step ${getStageClasses(status)}`}>
        <div className="quest-step-text">
            <Link
                to={
                    status === 'completed'
                        ? `/student/stage-${id}/complete`
                        : `/student/stage-${id}`
                }
            >
                <span className="quest-step-number">
                    {status === 'locked' ? <Lock /> : id}
                </span>
                <div>
                    {title.toUpperCase()}
                    {status === 'completed' && (
                        <span className="greenlight-highlight sm-type-amp"><br />completed</span>
                    )}
                    {status === 'submitted' && (
                        <span className="greenlight-highlight sm-type-amp"><br />submitted</span>
                    )}
                    {status === 'unlocked' && (
                        <span className="orange-highlight sm-type-amp"><br />unlocked</span>

                    )}
                </div>
                {status === 'completed' && (
                    <span className="medium-icon">
                        <Tick />
                    </span>
                )}
            </Link>
        </div>
    </div>
)

const TeamInfoSection = ({
    fullName,
    teamName,
    students,
    devOptions,
    image,
}) => (
    <>
        <div className="container mt-4 side-grey">
            <div className="row mb-2">
                <div className="col-lg-6">
                    <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium">
                        {teamName}
                    </h1>
                </div>
                <div className="col-lg-6 mt-2">
                    <span className="sm-type-drum loggedin">
                        Logged in as{' '}
                        <span className="sm-type-drum--medium">{`${fullName}`}</span>
                    </span>
                </div>
            </div>

            {/*<div className="row mt-2 mb-4">*/}
            {/*    <div className="col-lg-2"></div>*/}
            {/*    <div className="col-lg-8">*/}
            {/*        <p className="notification-alert sm-type-lead">*/}
            {/*            ! You have a notification, check your current stage for*/}
            {/*            feedback.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg-2"></div>*/}
            {/*</div>*/}

            <div className="row">
                <div className="col-lg-3">
                    <div className="form-holder-border">
                        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                            Team logo:
                        </p>
                        <GatsbyImage alt="" image={image} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-holder-border">
                        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                            Members:
                        </p>
                        <ul>
                            {students.map((student, i) => (
                                <li key={i}>
                                    <p className="sm-type-lead">
                                        <span>{student.user.full_name}</span>
                                        {student.position && (
                                            <span>
                                                <i>
                                                    {` - ${
                                                        POSITION_DISPLAY_NAME[
                                                            student.position
                                                        ]
                                                    }`}
                                                </i>
                                            </span>
                                        )}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {devOptions.length > 0 && (
                    <div className="col-lg-5">
                        <div className="form-holder-border">
                            <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                                Development options:
                            </p>
                            <ol>
                                {devOptions.map(
                                    (
                                        {
                                            shortlist,
                                            development_option: {
                                                display_name,
                                            },
                                        },
                                        i
                                    ) => (
                                        <li
                                            key={i}
                                            className="sm-type-bigamp mb-2"
                                        >
                                            {display_name}{' '}
                                            {shortlist && (
                                                <span className="shortlist-tick">
                                                    <Tick />
                                                </span>
                                            )}
                                        </li>
                                    )
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
)

const TeamHub = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "team-logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    // TODO: use authQuery once subscription is fixed
    const {
        loading,
        error,
        data: pageData,
        // subscribeToMore,
    } = useAuthQuery<TeamHubQuery, TeamHubQueryVariables>(
        TEAM_HUB_QUERY,
        { fetchPolicy: 'network-only', pollInterval: 2000 },
        'userId'
    )

    // TODO: sort out passing dynamic auth token to subscription: https://github.com/apollographql/apollo-server/issues/1505 https://github.com/apollographql/apollo-link/issues/197
    // subscribeToMore({
    //     document: TEAM_HUB_SUB,
    //     variables: {
    //         user_id: userId,
    //     },
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
    //             ...prev,
    //             user: [
    //                 {
    //                     ...subscriptionData.data.user_by_pk[0],
    //                 },
    //             ],
    //         }
    //     },
    // })

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const {
        full_name: fullName,
        student: {
            team: {
                name: teamName,
                stage_progresses: stageProgresses,
                students,
                team_development_options: devOptions,
            },
        },
    } = pageData.user_by_pk

    const stages = pageData.stage.map((stage) => {
        const status =
            stageProgresses.find((sp) => sp.stage_id === stage.id)?.status ||
            'locked'

        return <StageButton {...{ ...stage, status }} />
    })

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Team Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <Header headerText="Team Hub" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <TeamInfoSection
                                fullName={fullName}
                                teamName={teamName}
                                students={students}
                                devOptions={devOptions}
                                image={
                                    data.image1.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <p className="sm-type-guitar mb-4">
                                Your progress towards a community land buyout.
                                Remember to work as a team - after all, the only
                                thing that will redeem mankind is cooperation!
                            </p>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row step">
                        <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-4">{stages[0]}</div>
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticklr />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb1 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[1]}</div>
                    </div>
                    <div className="row step step-reverse">
                        <div className="col-lg-2 step-reverse-1">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktrbl />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb2 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-2">
                            {stages[2]}
                        </div>
                        <div className="col-lg-2 step-reverse-3">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Tickrl2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb3 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-4">
                            {stages[3]}
                        </div>
                    </div>
                    <div className="row step">
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktlbr />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb4 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[4]}</div>
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticklr2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb1 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[5]}</div>
                    </div>
                    <div className="row step step-reverse">
                        <div className="col-lg-2 step-reverse-1">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktrbl2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb2 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-2">
                            {stages[6]}
                        </div>
                        <div className="col-lg-2 step-reverse-3">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Tickrl />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb3 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-4">
                            {stages[7]}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default TeamHub
