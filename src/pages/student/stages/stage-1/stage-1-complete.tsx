import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import Tick from '../../../../assets/tick.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const Stage1CompletePage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "congratulations.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const { loading, error, data: pageData } = useAuthQuery<
        DocumentCompleteQuery,
        DocumentCompleteQueryVariables
    >(DOCUMENT_COMPLETE_QUERY, { variables: { stageId: 1 } }, 'teamId')

    if (loading)
        return (
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-12 text-align-center">
                        <div className="loader"></div>
                        <p className="sm-type-drum sm-type-drum--medium">
                            Loading...
                        </p>
                    </div>
                </div>
            </section>
        )
    if (error) return `Error! ${error.message}`

    const docFeedback =
        pageData.team_by_pk.stage_progresses[0].documents[0].feedback

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - Research - Complete</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 1" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Research: Complete
                            </h1>

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p className="sm-type-guitar mb-4">
                                As the first stage of your Quest, it is
                                important to gain some background knowledge
                                about community land ownership in Scotland and
                                also to think about some of the important
                                concepts and issues.
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-bigdrum">
                                    Congratulations!
                                </p>
                                <p className="sm-type-drum mb-4">
                                    <span className="side-icon">
                                        <Tick />
                                    </span>
                                    You have completed Stage 1.
                                </p>
                                <p className="sm-type-lead mb-4">
                                    Your tutor feedback was: <br />"
                                    {docFeedback}"
                                </p>
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
                                <p className="sm-type-amp mb-2">
                                    You have completed Stage 1.
                                </p>

                                <p className="sm-type-amp mb-2">
                                    <Link
                                        className="dark-link"
                                        to="/student/your-notes-completed"
                                    >
                                        Your Stage 1 notes
                                    </Link>
                                </p>
                                <p className="sm-type-amp mb-2">
                                    <Link
                                        className="btn-solid-lg"
                                        to="/student/stage-2"
                                    >
                                        Move onto Stage 2
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

export default Stage1CompletePage
