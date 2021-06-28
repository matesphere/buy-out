import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import TickSheet from '../../../../assets/tick-sheet.svg'

const Stage7Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "community-feedback.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "blue-3.jpg" }) {
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
                <title>Stage 7 - Present findings</title>
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
                                <span className="leaf crumb-caps">Stage 7</span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Present findings
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
                                    Now it's time for your team to present your
                                    findings to the community. Use the presentation
                                    you prepared in the previous stage and make sure
                                    you make it clear to your audience why you have
                                    made the choices you have!
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
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Present your findings.
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
                                    Delivery your presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage7Page
