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
                                Present Findings
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
                                    findings to the community. Use the
                                    presentation you prepared in the previous
                                    stage and make sure you make it clear to
                                    your audience why you have made the choices
                                    you have!
                                </p>
                            </div>
                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    alt=""
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
                                    <p className="sm-type-lead mb-2">
                                        Part I - Presentation Tips
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Use the{' '}
                                            <Link to="/student/stage-7/presentation-tips">
                                                tips here
                                            </Link>{' '}
                                            to help you with giving your
                                            presentation.
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">
                                        Part II - Go For It
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Deliver your presentation!
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
                                    Your teacher will let you know where and
                                    when your presentation is to take place.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage7Page
