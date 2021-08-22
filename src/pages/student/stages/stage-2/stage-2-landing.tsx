import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { CheckList } from '../../../../components/student/Checklist'
import { Helpful } from '../../../../components/student/Helpful'
import {
    TaskPanel,
    TaskContainer,
} from '../../../../components/common/stages/TaskPanel'
import { StageInfoRenderer } from '../../../../components/student/RichTextRenderers'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage2LandingPage: FC = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "glenclas.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "blue-2.jpg" }) {
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
    } = useAuthQuery<StageQuery, StageQueryVariables>(
        STAGE_QUERY,
        {
            variables: { stage_id: 2, includeDevOptions: false },
        },
        'teamId'
    )

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const {
        stageTitle,
        stageIntro,
        stageInfo,
        tasksToComplete,
        checklist,
        helpfulInfo,
    } = pageData.content.stageLandingPages[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - {stageTitle}</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 2"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
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
                                    {stageIntro}
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

                            {stageInfo && (
                                <StageInfoRenderer content={stageInfo.raw} />
                            )}

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-2/task"
                                />
                            </TaskPanel>

                            {/* <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>

                                {taskInfo.map((text: string) => (
                                    <p className="sm-type-bigamp mb-3">
                                        {text}
                                    </p>
                                ))}

                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-2/task">
                                                {taskLinks}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo?.info.raw} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage2LandingPage
