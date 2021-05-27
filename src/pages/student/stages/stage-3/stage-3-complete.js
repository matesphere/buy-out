import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import InfoPick from '../../../../assets/info-pick.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

const Stage3PageComplete = () => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "map-zoom.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)
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

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet/>
                                    </span>
                                    <span className="sm-type-drum">
                                        Task complete
                                    </span>
                                </h3>


                                <div className="form-holder-border">
                                    <h4 className="sm-type-guitar mb-2 green-highlight">Tutor feedback.</h4>
                                    <p className="sm-type-lead mb-3 italic">
                                        This looks like a great choice, dont forget to work together
                                        to achieve your goals. You cannot do this without everyone
                                        doing their bit.
                                    </p>

                                    <h4 className="sm-type-guitar mb-2">
                                        You have chosen the 5 options
                                    </h4>
                                    <ul>
                                        <li className="sm-type-guitar">Micro Hydro</li>
                                        <li className="sm-type-guitar">Micro Hydro</li>
                                        <li className="sm-type-guitar">Micro Hydro</li>
                                        <li className="sm-type-guitar">Micro Hydro</li>
                                        <li className="sm-type-guitar">Micro Hydro</li>
                                    </ul>
                                </div>

                                <div className="form-holder-border">
                                    <h4 className="sm-type-guitar mb-2">
                                        Completed SWOT analysis.
                                    </h4>
                                    <ol>
                                        <li className="sm-type-guitar mb-2"><Link to="/student/stage-3/swot-study">SWOT analysis for Micro Hydro</Link></li>
                                        <li className="sm-type-guitar mb-2"><Link to="/student/stage-3/swot-study">SWOT analysis for Micro Hydro</Link></li>
                                        <li className="sm-type-guitar mb-2"><Link to="/student/stage-3/swot-study">SWOT analysis for Micro Hydro</Link></li>
                                        <li className="sm-type-guitar mb-2"><Link to="/student/stage-3/swot-study">SWOT analysis for Micro Hydro</Link></li>
                                        <li className="sm-type-guitar mb-2"><Link to="/student/stage-3/swot-study">SWOT analysis for Micro Hydro</Link></li>

                                    </ol>
                                </div>
                            </div>

                            <p className="sm-type-lead mb-3">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities and produce a SWOT analysis for each option.
                            </p>
                            <div className="image-map mb-4 mt-4">
                                <div className="image-map-holder">
                                    <div>
                                        <GatsbyImage
                                            image={
                                                data.image5.childImageSharp
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
                                    <p className="sm-type-lead">You have seen the map and the detailed information on each option.</p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">You have completed 5 SWOT analysis.</p>
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

export default Stage3PageComplete
