import React from 'react'
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import TickSheet from '../assets/tick-sheet.svg'
import HelpIcon from '../assets/help-icon.svg'

const HelpPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "cls-ppt3-no-text-crop-1024x322.jpg" }) {
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
                <title>Community Land Quest</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
            </Helmet>

            <main className="homepage">
                <Header headerText="Community land quest" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Make your community a landowner!
                            </h2>
                            <p className="sm-type-guitar mb-4">
                                Can you make it through the 8 steps and emerge
                                victorious?
                            </p>
                            <p className="sm-type-lead mb-4">
                                The following will walk you through the process
                                to help on your quest.
                            </p>

                            <ol>
                                <li className="sm-type-lead mb-4">
                                    You will be guided along the way to help you
                                    achieve your goal.
                                </li>
                                <li className="sm-type-lead mb-4">
                                    Your help guide will always appear in the
                                    "Helpful information" boxes. <br />
                                    Look out for this icon{' '}
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                </li>
                                <li className="sm-type-lead mb-4">
                                    Make sure you read all the information and
                                    check "Your checklist" to make sure you have
                                    completed the task. <br />
                                    Look out for this icon{' '}
                                    <span className="side-icon side-icon-green">
                                        <TickSheet />
                                    </span>
                                </li>
                                <li className="sm-type-lead mb-4">
                                    You wont be able to move on until you click
                                    all the boxes in the "Your checklist" area.
                                </li>
                            </ol>
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
                                    Read all of the steps. You will have to
                                    follow them carefully.
                                </p>
                            </div>

                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Example checklist
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Check all task here:
                                </p>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        Did you find the "Helpful information"
                                        location?
                                    </label>
                                </div>

                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id2"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id2">
                                        Did you find the "Your checklist"
                                        location?
                                    </label>
                                </div>

                                <div className="multiple-choice mb-4">
                                    <input
                                        className="form-control"
                                        id="id3"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id3">
                                        Have you read all actions?
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

export default HelpPage
