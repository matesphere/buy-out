import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import TickSheet from '../../../../assets/tick-sheet.svg'

const Stage8Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "certificate.jpg" }) {
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
                <title>Stage 8 - Celebrate & Reflect</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Celebrate & Reflect
                            </h2>

                            <p className="sm-type-lead mb-3">
                                Congratulations! You have successfully completed
                                the Community Land Quest!
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">Well done!</p>
                                <p className="sm-type-amp">
                                    Your final task is to answer a few short
                                    questions about your experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 mb-2 image-holder team-certificate">
                                    <div className="team-certificate--inner">
                                    <h3 className="sm-type-drum mb-4">Congratulations TeamAdmin</h3>
                                    <p className="sm-type-guitar mb-4">David Carter - Stuart Hull - Steve Carter</p>
                                    <p className="sm-type-drum sm-type-drum--medium">You have completed the Quest</p>
                                </div>
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
                                Community Land Quest - A Reflection
                            </p>
                            <ul>
                                <li className="sm-type-guitar">
                                    Follow{' '}
                                    <Link to="/student/stage-8/task">
                                        this link
                                    </Link>{' '}
                                    to reflect on the process and complete the
                                    Quest.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage8Page
