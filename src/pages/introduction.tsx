import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Header from '../components/_header'
import Footer from '../components/_footer'

import '../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

const IntroductionPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "introduction.jpg" }) {
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
                <title>Community Land Quest - Introduction</title>
            </Helmet>

            <main className="the-quest homepage">
                <Header headerText="Community Land Quest - Introduction" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Introduction
                            </h2>

                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                You are about to embark on the Community Buyout
                                Quest. You are going to work as the Board of a
                                community group who will lead the purchase of
                                some land that has come up for sale.
                            </p>
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p className="sm-type-guitar sm-type-guitar--medium mb-4">
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

                            <div className="form-holder-border">
                                <h3 className="sm-type-bigdrum mb-2">
                                    The Quest
                                </h3>
                                <p className="sm-type-lead mb-2">
                                    The local Estate Landowner has put up the
                                    piece of land for sale and the Community has
                                    come together and decided that this is too
                                    good an opportunity to miss. At a Community
                                    meeting in the Village Hall, it was decided
                                    that a Community Group should be formally
                                    constituted and a Board of Directors
                                    appointed to take the project through. The
                                    community also carried out a
                                    ‘brain-storming’ exercise and came up with 9
                                    possible uses (Development Options) for the
                                    land. (One of these is the purchase of the
                                    shop and Post Office in the village before
                                    it becomes leased as a residential
                                    property).
                                </p>
                                <p className="sm-type-lead mb-2">
                                    Your Team is the Board of Directors and your
                                    task is to follow the 8-Stage process laid
                                    out by{' '}
                                    <a
                                        href="http://www.communitylandscotland.org.uk/"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Community Land Scotland
                                    </a>
                                    . You will carry out SWOT Analysis on each
                                    of the Options which will help you to narrow
                                    down the Development Options to the 3 which
                                    your team consider to be best use for the
                                    land. You will conduct a Feasibility Study
                                    to clarify the benefits to the Community, to
                                    highlight the reasons for likely success and
                                    to identify risks that could cause the
                                    Development Schemes to fail. You will then
                                    produce a Business plan, which will
                                    summarize the Capital and Running Costs,
                                    show where the funding will be found and act
                                    as a balance sheet to display the financial
                                    situation over the first 4 years of the
                                    venture.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    During this process you must work together
                                    to agree which 3 projects would provide the
                                    greatest benefit to your community and you
                                    will have the opportunity to present your
                                    ideas to your Community (the rest of your
                                    class).
                                </p>
                                <p className="sm-type-lead mb-2">
                                    <Link to="/help">Click here</Link> for the
                                    help section, where you'll find some handy
                                    tips to assist with your Quest. This can be
                                    accessed at any time from the main
                                    navigation menu.
                                </p>

                                <p className="sm-type-lead mb-2">Good luck!</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                    <Link to="/student/team-hub" className="btn-solid-reg">
                        Go to Team Hub
                    </Link>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default IntroductionPage
