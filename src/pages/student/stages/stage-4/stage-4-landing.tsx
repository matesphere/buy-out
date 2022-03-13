import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { Intro } from '../../../../components/student/Intro'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const Stage4LandingPage = () => {
    const {
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            helpfulInfo,
            tasksToComplete,
            stageInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query Stage4PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 4 }) {
                ...StageLandingContent
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
            variables: { stage_id: 4, includeDevOptions: true },
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

    const { team_development_options: devOptions } = pageData.team_by_pk
    const shortlist = devOptions.filter((opt) => opt.shortlist)
    const task1Complete = shortlist.length === 3
    const docFeedback =
        pageData?.team_by_pk?.stage_progresses[0].documents[0]?.feedback

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - {stageTitle}</title>
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
                                currentDisplayName="Stage 4"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />
                            <Intro item={stageInfo} />

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-4/options"
                                >
                                    <p className="mb-2">
                                        <ol>
                                            {devOptions.map(
                                                (
                                                    {
                                                        id,
                                                        team_choice_name,
                                                        development_option: {
                                                            display_name,
                                                        },
                                                    },
                                                    i
                                                ) => (
                                                    <li key={i}>
                                                        <Link
                                                            target="_blank"
                                                            to={`/student/stage-3/swot?num=${i}&id=${id}&from=stage-4`}
                                                        >
                                                            {team_choice_name ||
                                                                display_name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ol>
                                    </p>
                                </TaskContainer>

                                <TaskContainer
                                    disabled={!task1Complete}
                                    taskToComplete={tasksToComplete[1]}
                                    taskLinkUrl="/student/stage-4/feasibility"
                                />
                            </TaskPanel>

                            {docFeedback && (
                                <div className="side-grey">
                                    <h3 className="task ticker mb-2">
                                        <span className="ticker-sheet ticker-feedback">
                                            <HelpIcon />
                                        </span>
                                        <span className="sm-type-drum green-highlight">
                                            Tutor feedback:
                                        </span>
                                    </h3>
                                    <div className="form-holder-border">
                                        <p className="sm-type-lead">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: docFeedback.feedback,
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage4LandingPage
