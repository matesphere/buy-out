import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { eng } from '../../../_index.data'
import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import { TextEditor } from '../../../../components/common/TextEditor'
import { ActionType } from '../../../../utils/input-utils'

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

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<DocumentCompleteQuery, DocumentCompleteQueryVariables>(
        DOCUMENT_COMPLETE_QUERY,
        { variables: { stage_id: 1 } },
        'teamId'
    )

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
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Research
                            </h2>
                            <p className="sm-type-guitar mb-4">
                                Here are a series of questions to help you to do
                                some preliminary exploration. This is your first
                                opportunity to work together as a team, so the
                                answers that you provide should be the product
                                of discussions between each of the team members.
                            </p>
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task complete:
                                    </span>
                                </h3>
                                <div className="form-holder-border">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-2 green-highlight">
                                        Tutor feedback.
                                    </h4>
                                    <p className="sm-type-lead mb-3 italic">
                                        {docFeedback}
                                        This looks like a great choice, dont
                                        forget to work together to achieve your
                                        goals. You cannot do this without
                                        everyone doing their bit.
                                    </p>
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {eng.map((eng, i) => (
                                            <li key={eng.text}>
                                                <p className="sm-type-guitar">
                                                    {eng.text}
                                                </p>
                                                <p className="sm-type-amp mb-4">
                                                    This would be an answer
                                                </p>
                                            </li>
                                        ))}
                                    </ol>
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
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
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
