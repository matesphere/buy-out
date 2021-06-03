import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
// import scrollTo from 'gatsby-plugin-smoothscroll'
// import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { SaveSubmitSection } from '../../../../components/student/stages/SaveSubmitSection'

import { stage3SwotReducer, WorkState, Action } from './stage-3-swot'
// import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { useWorkState, ActionType } from '../../../../utils/input-utils'

// import {
//     Stage3Query,
//     Stage3QueryVariables,
// } from '../../../../gql/types/Stage3Query'

import HelpIcon from '../../../../assets/help-icon.svg'
import InfoPick from '../../../../assets/info-pick.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
// import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

// export const STAGE_3_QUERY = gql`
//     query Stage3Query($team_id: uuid!, $stage_id: Int) {
//         team_by_pk(id: $team_id) {
//             stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
//                 id
//                 stage_id
//                 status
//                 documents(where: { status: { _eq: draft } }) {
//                     id
//                     doc_data
//                 }
//             }
//             team_development_options {
//                 id
//                 team_choice_name
//                 development_option {
//                     display_name
//                     option
//                 }
//             }
//         }
//     }
// `

// TODO turn DONE into an icon
const SwotLinks = ({ devOptions, completedSwots }) => (
    <ol>
        {devOptions.map(
            (
                {
                    id,
                    team_choice_name,
                    development_option: { display_name, option },
                },
                i
            ) => (
                <li
                    key={i}
                    className={`sm-type-guitar mb-2${
                        completedSwots.length >= i ? '' : ' disabled'
                    }`}
                >
                    <Link to={`/student/stage-3/swot?id=${id}`}>
                        {team_choice_name || display_name}
                    </Link>
                    {completedSwots.includes(option) && <span> DONE</span>}
                </li>
            )
        )}
    </ol>
)

const Stage3LandingPage = () => {
    const imageData = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "map-zoom.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const { loading, error, pageData, submitWorkObj } = useWorkState<
        WorkState,
        Action
    >(3, stage3SwotReducer, true)

    // const { data, loading, error } = useAuthQuery<
    //     Stage3Query,
    //     Stage3QueryVariables
    // >(
    //     STAGE_3_QUERY,
    //     { variables: { stage_id: 3 }, fetchPolicy: 'no-cache' },
    //     'teamId'
    // )

    if (loading) return <Loading />
    if (error) return `Error! ${error.message}`

    const { team_development_options: devOptions } = pageData.team_by_pk
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}
    const completedSwots = Object.keys(doc)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay The Foundations</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 3" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Lay The Foundations
                            </h2>
                            <p className="sm-type-lead mb-3">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities and produce a SWOT analysis for
                                each option.
                            </p>
                            <div className="image-map mb-4 mt-4">
                                <div className="image-map-holder">
                                    <div>
                                        <GatsbyImage
                                            image={
                                                imageData.image5.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                    <div className="hover-pins">
                                        <p className="sm-type-amp">
                                            Hover over the pins to see more
                                            information
                                        </p>
                                    </div>
                                    <div className="outer-grid">
                                        <div className="outer-square">
                                            <div className="inner-grid inner-grid-1">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="reddot"></span>{' '}
                                                            Shop and Post Office
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-2">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="greydot"></span>{' '}
                                                            Affordable Housing
                                                            area
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-3">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-r">
                                                        <p className="sm-type-amp">
                                                            <span className="purpledot"></span>{' '}
                                                            Campsite / Cabins
                                                        </p>
                                                        <p className="sm-type-amp">
                                                            <span className="purpledot"></span>{' '}
                                                            Market gardening
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-4">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Play park / Skate
                                                            park
                                                        </p>
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Wind turbine
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-5">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Business hub
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-6">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-r">
                                                        <p className="sm-type-amp">
                                                            <span className="tealdot"></span>{' '}
                                                            Forest area
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-7"></div>
                                            <div className="inner-grid inner-grid-8">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Micro Hydro
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-9"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>

                                <p className="sm-type-lead mb-2">
                                    You will need to work together to discuss
                                    the available development options and decide
                                    on five which you think offer the best
                                    chance of providing benefits to the
                                    community - whether these be financial,
                                    social or otherwise.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    Once decided upon, you'll then be asked to
                                    complete a SWOT analysis for each of these.{' '}
                                    <Link to="#">Click here</Link> to find out
                                    more about what is meant by SWOT and how you
                                    can complete this task.
                                </p>

                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">Part I</p>
                                    <p className="sm-type-lead mb-2">
                                        Use the link below to find detailed
                                        information for each option, and then
                                        submit the 5 options your team will be
                                        taking forward.
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-3/task">
                                                View the development options
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className={`form-holder-border ${
                                        devOptions.length === 0 &&
                                        'not-available-holder'
                                    }`}
                                >
                                    <p className="sm-type-lead mb-2">Part II</p>
                                    <p className="sm-type-lead mb-2">
                                        Complete a SWOT analysis for each of the
                                        development options you chose in Part I.
                                    </p>
                                    <p className="sm-type-lead mb-2">
                                        Use the SWOT templates to help you
                                        confirm your choices. Make sure to hit
                                        'save' before returning to this screen;
                                        this will then unlock the next SWOT.
                                    </p>

                                    <SwotLinks
                                        devOptions={devOptions}
                                        completedSwots={completedSwots}
                                    />
                                    <SaveSubmitSection
                                        submitWorkObj={submitWorkObj}
                                        disableSubmit={
                                            completedSwots.length !== 5
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                                <p className="sm-type-amp">
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/student/stage-3/glenclas-map-options">
                                        View map of Glenclas
                                    </Link>
                                </p>
                            </div>

                            <p className="sm-type-guitar mb-2 mt-4">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                            <div className="side-grey">
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Read carefully through the detailed
                                        information on each development option.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Select your 5 options to take forward.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Complete a SWOT analysis for each
                                        option.
                                    </p>
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

export default Stage3LandingPage
