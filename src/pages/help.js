import React from 'react'
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import TickSheet from '../assets/tick-sheet.svg'
import HelpIcon from '../assets/help-icon.svg'
import {GatsbyImage} from "gatsby-plugin-image";
import {stage1DataSubTitleEng} from "./student/stages/stage-1/_stage1.data";

const HelpPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-1.jpg" }) {
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
                                <li>
                                    <div className="small-image">
                                        <GatsbyImage
                                            alt=""
                                            image={
                                                data.image1.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                    <p className="sm-type-lead mb-4 small-image-holder">
                                        When you will see any of the "Questies", the section sets out the aim of each stage.
                                        You will be guided along the way to help you
                                        achieve your goal.
                                    </p>
                                </li>

                                <li className="sm-type-lead mb-4">
                                    Your help guide will always appear in the
                                    "Helpful information" boxes. <br />
                                    Look out for this orange icon{' '}
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                </li>
                                <li className="sm-type-lead mb-4">
                                    Make sure you read all the information and
                                    check "Your checklist" to make sure you have
                                    completed the task. <br />
                                    Look out for this green icon{' '}
                                    <span className="side-icon side-icon-green">
                                        <TickSheet />
                                    </span>
                                </li>

                                <li className="sm-type-lead mb-4">
                                    You will find the task to complete at each stage. <br />
                                    Look out for this red icon{' '}
                                    <span className="side-icon side-icon-red">
                                        <TickSheet />
                                    </span>
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
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">Did you find the "Helpful information"
                                        location?</p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">Did you find the "Your checklist"
                                        location?</p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">Have you read all actions?</p>
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
