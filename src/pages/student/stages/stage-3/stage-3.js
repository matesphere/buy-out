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
import scrollTo from "gatsby-plugin-smoothscroll";
import TickSheet from "../../../../assets/tick-sheet.svg";
import Tick from "../../../../assets/tick.svg";

const Stage3Page = () => {
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
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Lay The Foundations
                            </h2>
                            <p className="sm-type-lead mb-3">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities, and consult with experts and
                                local residents to familiarise yourselves with
                                what each option entails. Think about how each
                                might benefit the community!
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
                            <div className="table table-proposal">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Options</p>
                                    </div>
                                    <div className="cell">
                                        <p>Notes</p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="greydot"></span> 1.
                                            Affordable Housing Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Space for 3 pairs of semi-detached
                                            houses behind a row of existing
                                            houses. Affordable rent charged and
                                            low running costs.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/affordable-housing-scheme">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            2. Play Park and/or Skate Park
                                            Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be located behind the school
                                            and provide a facility for the
                                            primary school children as well as
                                            for older children.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/playpark-skatepark">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="reddot"></span> 3.
                                            Shop and PO
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be situated just of the ‘High
                                            Street’ a purpose-built mini
                                            supermarket and shop, to service the
                                            local community and visitors.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/shop-and-post-office">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            4. Micro-hydro Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Making use of the stream coming off
                                            the hill behind the village.
                                            Providing both power for the
                                            community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/micro-hydro">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            5. Wind turbine Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated on the hill behind the
                                            village. Providing both power for
                                            the community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/wind-turbine">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            6. Business hub Shceme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated off the main thoroughfare,
                                            a new build that could be divided
                                            into units for offices and/or
                                            workshops.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/business-hub">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="tealdot"></span> 7.
                                            Forestry Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            On the extensive hill behind the
                                            village, an area of some 15 acres to
                                            be planted as mixed woodland.
                                            Potential for income from the
                                            softwood, amenity value (woodland
                                            walks) and habitat creation as well
                                            as climate mitigation
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/forestry-scheme">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="purpledot"></span>{' '}
                                            8. Campsite and Cabins Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Potential for a community owned
                                            campsite and areas for caravans,
                                            campervans and Cabins. The shower
                                            toilet block could be made available
                                            to public use (for a fee) to allow
                                            campervan and other tourists to use
                                            the facilities.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/campsite-cabin">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="purpledot"></span>{' '}
                                            9. Market Garden Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A commercial operation to grow
                                            year-round fruit and vegetables for
                                            the local community and for local
                                            businesses such as the Glenclas
                                            Hotel and Lodge.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/market-scheme">
                                                Read more about{' '}
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>10. Team Choice</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Your Team can develop your own idea.
                                            You will need to carry out a SWOT
                                            analysis, determine your Capital
                                            Costs and Running Costs and also
                                            find out where the funding to both
                                            start and keep your scheme running
                                            would come from.
                                        </p>
                                    </div>
                                </div>


                            </div>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet/>
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <p className="sm-type-amp mb-2">
                                    Choose a list of 5 options that you wish to take forward at this stage.
                                </p>
                                <div className="form-holder-border">
                                <div className="form-holder">
                                    <div className="mb-4" id="form-roles">
                                        <ul>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Option 1
                                                </label>
                                                <input className="form-control"/>
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Option 2
                                                </label>
                                                <input className="form-control"/>
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Option 3
                                                </label>
                                                <input className="form-control"/>
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Option 4
                                                </label>
                                                <input className="form-control"/>
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Option 5
                                                </label>
                                                <input className="form-control"/>
                                            </li>
                                        </ul>

                                        <button
                                            className="btn-solid-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
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
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                                <p className="sm-type-amp">
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/student/stage-2/about-glenclas-people">
                                        Hear from the people of Glenclas
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage3Page
