import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import '../../../../scss/index.scss'
import {GatsbyImage} from "gatsby-plugin-image";

const Stage2Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "glenclas.jpg" }) {
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
                <title>Stage 2 - Consult</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Consult
                            </h2>

                            <p className="sm-type-lead mb-3">
                                Welcome to Stage 2 of the Community Buyout
                                Quest. In this stage you will form the board of
                                a community group (known as the 'steering
                                group') who will lead the purchase of some land
                                that has come up for sale.
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p className="sm-type-lead mb-3">
                                You will each adopt a specific role within the
                                Board, but throughout, you will need to work as
                                a team. Each decision that you make must take
                                into account the views of everyone in the team.
                                That does not mean that you will agree on
                                everything, in fact it is inevitable that you
                                will disagree at times. However, you must work
                                out how you will reach decisions when there is
                                disagreement amongst the team.
                            </p>
                            <p className="sm-type-lead mb-3">
                                You will now need to design a logo that will
                                appear on any documentation that you produce.
                            </p>
                            <p className="sm-type-lead mb-3">
                                The land that has come up for sale is next to
                                the (fictional) village of GLENCLAS.
                            </p>

                            <h3 className="sm-type-drum mb-3">
                                Read about the Glenclas area.
                            </h3>

                            <p className="sm-type-bigamp mb-3">
                                Here you will find a
                                description of Glenclas village and its
                                community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/student/stage-2/about-glenclas-area">Read about the area.</Link>
                            </p>



                            <h3 className="sm-type-drum mb- mt-4">
                                Read about the potential options here.
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Here you will find a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/student/stage-2/plan-of-glenclas">See what options are available.</Link>
                            </p>


                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <p className="sm-type-bigamp mb-3">
                                    It is now time to allocate the members of
                                    your team to the roles within the Board.
                                    Each role will have specific tasks to
                                    perform, but every decision that you make
                                    must be taken by the complete Board of
                                    Directors. If your team has more than 4
                                    members then you can double up on the
                                    Secretary and/or Treasurer roles.
                                </p>

                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Find more{' '}
                                            <Link href="/student/stage-2/the-roles">
                                                information about the roles and choose
                                                your Board here
                                            </Link>
                                            .
                                        </li>
                                    </ul>
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
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li>
                                        <Link to="/student/stage-2/plan-of-glenclas">
                                            See the potential options map of Glenclas
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Civil parish
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Loch_Alsh"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Lochalsh
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Highland_council_area"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Highland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Inverness-shire"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Inverness-shire
                                        </a>
                                    </li>
                                </ul>

                                <p className="sm-type-amp">
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                                <p className="sm-type-amp">
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                            </div>

                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                            <div className="side-grey">
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        You have read the information about Glenclas, the geography, atractions and facilities.
                                    </label>
                                </div>

                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        You have read the development options.
                                    </label>
                                </div>

                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        You have read what the roles entail.
                                    </label>
                                </div>

                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        You have decided what roles you will undertake.
                                    </label>
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

export default Stage2Page
