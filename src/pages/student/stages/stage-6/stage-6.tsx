import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import TickSheet from '../../../../assets/tick-sheet.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const Stage6Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "present-findings.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "blue-2.jpg" }) {
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
                <title>Stage 6 - Prepare Findings</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">Stage 6</span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Prepare Findings
                            </h2>
                            <div className="blue-holder-border">
                                <div className="small-image">
                                    <GatsbyImage
                                        alt=""
                                        image={
                                            data.image2.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                                <p className="sm-type-lead small-image-holder">
                                    Your team will present your Feasibility
                                    Studies, including the reasons for your choice
                                    of options (the SWOT analyses will be
                                    important), and your Business Plan to the
                                    Community (in this case, to the rest of your
                                    class).
                                </p>
                            </div>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-lead mb-3">
                                The aim of the presentation will be to seek the
                                final go-ahead from the Community to follow
                                through with the land buy-out. Their
                                presentation will therefore need to be detailed
                                and persuasive.
                            </p>

                            <div className="side-grey">
                                <h4 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h4>
                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-3">
                                        Use the{' '}
                                        <Link to="/student/stage-6/presentation-tips">
                                            tips here
                                        </Link>{' '}
                                        to help you with your presentation.
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Prepare your presentation.
                                        </li>
                                    </ul>
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
                                    Prepare your presentation using your
                                    Feasibility Studies and SWOT analyses.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage6Page
