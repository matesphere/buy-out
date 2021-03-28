import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gql, useQuery } from '@apollo/client'

import Header from '../../components/_header'
import Footer from '../../components/_footer'

import '../../scss/index.scss'

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

// TODO use this for the real thing!
// user_by_pk(id: $id) {
//     name
//     student {
//         team {
//             name
//             stage_progresses {
//                 stage_id
//                 status
//             }
//             students {
//                 user {
//                     name
//                 }
//             }
//         }
//     }
// }

const TEAM_HUB_QUERY = gql`
    query TeamHubQuery($name: String) {
        user(where: { name: { _eq: $name } }) {
            name
            student {
                team {
                    name
                    stage_progresses {
                        stage_id
                        status
                    }
                    students {
                        user {
                            name
                        }
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

const getStageClasses = (status) => {
    switch (status) {
        case 'unlocked':
            return 'quest-step-complete quest-step-highlight'
        case 'completed':
            return 'quest-step-complete'
        default:
            return ''
    }
}

const QuestPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "team-logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const { loading, error, data: pageData } = useQuery(TEAM_HUB_QUERY, {
        variables: {
            name: 'Steve Carter',
        },
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    // const {
    //     user: {
    //         name,
    //         student: {
    //             team: {
    //                 name: teamName,
    //                 stage_progresses: stageProgresses,
    //                 students,
    //             },
    //         },
    //     },
    // } = pageData

    const user = pageData.user[0]

    const {
        name,
        student: {
            team: {
                name: teamName,
                stage_progresses: stageProgresses,
                students,
            },
        },
    } = user

    const stages = pageData.stage.map((stage) => {
        const stageProgressForStage =
            stageProgresses.find((sp) => sp.stage_id === stage.id) || {} // TODO optional chaining here once TS is in

        const status = stageProgressForStage.status || 'locked'

        return { ...stage, status }
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
                    <div className="side-grey">
                        <p className="sm-type-amp">{`Logged in as ${name}`}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Your Team
                            </h1>

                            <div className="container side-grey">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2 className="sm-type-drum sm-type-drum--medium">
                                            {teamName}
                                        </h2>
                                        <p className="sm-type-lead">
                                            {students
                                                .map(
                                                    (student) =>
                                                        student.user.name
                                                )
                                                .join(', ')}
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <GatsbyImage
                                            alt=""
                                            image={
                                                data.image1.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                </div>
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
                                    Click on the quests below that have been
                                    unlocked. Check your progress and view your
                                    work.
                                </p>
                            </div>
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
                        <div className="col-lg-4">
                            <div
                                className={`quest-step ${getStageClasses(
                                    stages[0].status
                                )}`}
                            >
                                <div className="quest-step-text">
                                    <Link
                                        to={
                                            stages[0].status === 'completed'
                                                ? '/student/stage-1-complete'
                                                : '/student/stage-1'
                                        }
                                    >
                                        <span className="quest-step-number">
                                            {stages[0].status === 'locked' ? (
                                                <Lock />
                                            ) : (
                                                1
                                            )}
                                        </span>
                                        {stages[0].title.toUpperCase()}
                                        {stages[0].status === 'complete' && (
                                            <span className="medium-icon">
                                                <Tick />
                                            </span>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                        <div className="col-lg-4">
                            <div
                                className={`quest-step ${getStageClasses(
                                    stages[1].status
                                )}`}
                            >
                                <div className="quest-step-text">
                                    <Link to="/the-quest-2">
                                        <span className="quest-step-number">
                                            {stages[1].status === 'locked' ? (
                                                <Lock />
                                            ) : (
                                                2
                                            )}
                                        </span>
                                        {stages[1].title.toUpperCase()}
                                        {stages[1].status === 'complete' && (
                                            <span className="medium-icon">
                                                <Tick />
                                            </span>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                            <div
                                className={`quest-step ${getStageClasses(
                                    stages[2].status
                                )}`}
                            >
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        {stages[2].status === 'locked' ? (
                                            <Lock />
                                        ) : (
                                            3
                                        )}
                                    </span>
                                    {stages[2].title.toUpperCase()}
                                </div>
                            </div>
                        </div>
                        //TODO still need logic building into steps from here
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
                            <div className="quest-step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        <Lock />
                                    </span>
                                    {stages[3].title.toUpperCase()}
                                </div>
                            </div>
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
                        <div className="col-lg-4">
                            <div className="quest-step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        <Lock />
                                    </span>
                                    {stages[4].title.toUpperCase()}
                                </div>
                            </div>
                        </div>
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
                        <div className="col-lg-4">
                            <div className="quest-step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        <Lock />
                                    </span>
                                    {stages[5].title.toUpperCase()}
                                </div>
                            </div>
                        </div>
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
                            <div className="quest-step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        <Lock />
                                    </span>
                                    {stages[6].title.toUpperCase()}
                                </div>
                            </div>
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
                            <div className="quest-step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">
                                        <Lock />
                                    </span>
                                    {stages[7].title.toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default QuestPage
