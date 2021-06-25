import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage6TipsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "present-findings.jpg" }) {
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
                <title>Stage 6 - Presentation Hints</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    <Link to="/student/stage-6">Stage 6</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Presentation Hints
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Presentation Hints
                            </h2>

                            <p className="sm-type-lead mb-3">
                                The presentation is your final task before you
                                complete the Quest. While it is the
                                responsibility of the Chair, each member of the
                                Team must be involved in its preparation.
                            </p>
                            <p className="sm-type-lead mb-3">
                                The Presentation is your chance to use all the
                                documents that you have already prepared to make
                                a persuasive case for each of your three
                                Options. Your imaginary audience will be members
                                of the Community and also potential Funders for
                                each of the Options (although your real audience
                                is likely to be the rest of your class and/or
                                invited quests).
                            </p>
                            <p className="sm-type-lead mb-3">
                                You will use this Presentation to persuade your
                                community to give [Group name] the final
                                go-ahead to purchase the land and to proceed
                                with your three chosen options. You will also
                                use it to persuade your various funders to
                                provide the necessary financial support to allow
                                the land purchase to proceed and to make the
                                Options a reality.
                            </p>

                            <p className="sm-type-lead">
                                <span className="sm-type-lead--medium">
                                    Preparing the Presentation
                                </span>
                            </p>
                            <p className="sm-type-amp mb-3">
                                (Hints – suggestions only, you don’t HAVE to do
                                it like this)
                            </p>
                            <ul>
                                <li className="mb-2">
                                    You are probably familiar with using
                                    Microsoft PowerPoint as a presentation tool
                                    and so it is suggested that you use this,
                                    although if you have a preferred alternative
                                    then use that.
                                </li>
                                <li className="mb-2">
                                    The on-screen presentation should be a blend
                                    of text and images and you can use any of
                                    the materials that appear in the Quest
                                    record that have been prepared for you or
                                    that you have written yourselves.
                                </li>
                                <li className="mb-2">
                                    Keep the text short and to the point.
                                </li>
                                <li>
                                    Divide the Presentation into 3 sections:
                                    <ol>
                                        <li className="mb-2">
                                            Introduction – explain why [Group
                                            name] wants to become a Land owner
                                            and what the Community will gain by
                                            taking this step. Give some
                                            background about the Community,
                                            include some images and maybe some
                                            facts and figures to support your
                                            comments.
                                        </li>
                                        <li className="mb-2">
                                            The Options – using the information
                                            provided about each Option, your
                                            SWOT Analyses, your Feasibility
                                            Studies and your Business Plans to
                                            explain what is the long-term
                                            benefit to the Community of each
                                            Option and also how each option will
                                            become sustainable into the future.
                                            Once again, illustrate your comments
                                            with images, facts and figures.
                                        </li>
                                        <li>
                                            Conclusion – this only needs to be
                                            brief, but you need to bring all
                                            your ideas together with a statement
                                            that will give both the Community
                                            and your Funders the confidence to
                                            back your proposals.
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-2">
                                    You should aim for your presentation to last
                                    about 10-15 minutes.
                                </li>
                            </ul>
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
                                    Hints – suggestions only, you don’t HAVE to
                                    do it like this
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage6TipsPage
