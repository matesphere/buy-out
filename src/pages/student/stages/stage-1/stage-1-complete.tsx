import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import { eng } from '../../../_index.data'

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

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<DocumentCompleteQuery, DocumentCompleteQueryVariables>(
        DOCUMENT_COMPLETE_QUERY,
        { variables: { stage_id: 1, includeDevOptions: false } },
        'teamId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const doc = pageData.team_by_pk.stage_progresses[0].documents[0]

    const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - {stageTitle} - Complete</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Stage 1 Complete
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>
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
                                        Tutor feedback
                                    </h4>
                                    <p
                                        className="sm-type-lead mb-3 italic"
                                        dangerouslySetInnerHTML={{
                                            __html: doc.feedback.feedback,
                                        }}
                                    />
                                </div>
                                <div className="form-holder-border">
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {eng.map((eng, i) => (
                                            <li key={eng.text}>
                                                <p className="sm-type-guitar">
                                                    {eng.text}
                                                </p>
                                                <p
                                                    className="sm-type-amp mb-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: doc.doc_data[i],
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage1CompletePage
