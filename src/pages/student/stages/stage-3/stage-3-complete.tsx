import React, { FC } from 'react'
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
// import { SWOT } from '../../../../components/common/SWOT'
import { SwotLinks } from './stage-3-landing'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage3CompletePage: FC<PageProps> = ({ location: { search } }) => {
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
        { variables: { stage_id: 3, includeDevOptions: true } },
        'teamId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const doc = pageData.team_by_pk.stage_progresses[0].documents[0]
    const devOptions = pageData.team_by_pk.team_development_options

    const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - {stageTitle} - Complete</title>
            </Helmet>

            <main className="the-quest">
                <Header headerText="Stage 3" />

                <section className="container" id="main">
                    <div className="mt-4 mb-4 image-holder">
                        <GatsbyImage
                            image={data.image1.childImageSharp.gatsbyImageData}
                        />
                    </div>

                    <div className="side-grey">
                        <h3 className="task ticker mb-2">
                            <span className="ticker-sheet">
                                <TickSheet />
                            </span>
                            <span className="sm-type-drum">Task complete:</span>
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
                            <SwotLinks devOptions={devOptions} />
                        </div>

                        {/* {devOptions.map((opt) => (
                            <SWOT
                                devOption={opt.development_option}
                                swotState={
                                    doc.doc_data[opt.development_option.option]
                                }
                                docSubmitted={true}
                            />
                        ))} */}
                    </div>

                    <p className="sm-type-amp">
                        <Link to="/student/team-hub">Back to Team Hub</Link>
                    </p>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage3CompletePage
