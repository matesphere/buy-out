import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'
// import scrollTo from 'gatsby-plugin-smoothscroll'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
// import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import MapOptions from '../../../../pages/information/_map'

import { stage3SwotReducer, WorkState, Action } from './stage-3-swot'
import { useWorkState } from '../../../../utils/input-utils'

import { DocumentCompleteQuery_team_by_pk_team_development_options } from '../../../../gql/types/DocumentCompleteQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'
import { Intro } from '../../../../components/student/Intro'
import {TaskContainer, TaskPanel} from '../../../../components/common/stages/TaskPanel'
import { CheckList } from '../../../../components/student/Checklist'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'

interface SwotLinksProps {
    devOptions: Array<DocumentCompleteQuery_team_by_pk_team_development_options>
    completedSwots?: Array<string>
}

export const SwotLinks = ({
    devOptions,
    completedSwots = [],
}: SwotLinksProps) => (
    <ol>
        {devOptions.map(
            (
                {
                    id,
                    team_choice_name,
                    development_option: { display_name, option },
                },
                i
            ) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link to={`/student/stage-3/swot?num=${i}&id=${id}`}>
                        {team_choice_name || display_name}
                    </Link>
                    {completedSwots.includes(option) && (
                        <span className="ml-2 side-icon">
                            <Tick />
                        </span>
                    )}
                </li>
            )
        )}
    </ol>
)

const ExampleSwotLinks: FC<{ exampleSwots: Array<string> }> = ({
    exampleSwots,
}) => (
    <>
        <p className="sm-type-lead mb-2">
            <span className="side-icon side-icon-orange shake">
                <HelpIcon />
            </span>
            {`Your teacher has provided the following example${
                exampleSwots.length > 1 ? 's' : ''
            } to help:`}
        </p>
        <ul>
            {exampleSwots.map((swotOption, i) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link
                        to={`/student/stage-3/swot/example?option=${swotOption}`}
                    >
                        Example {i + 1}
                    </Link>
                </li>
            ))}
        </ul>
    </>
)

const Stage3LandingPage: FC = () => {
    const {graphCmsStageLandingPage: {stageTitle, stageIntro, stageIntroRich, tasksToComplete, stageInfo, checklist}} = useStaticQuery(graphql`
        query Stage3PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 3 }) {
                stageTitle 
                stageIntro
                stageIntroRich {
                  raw
                }
                stageInfo {
                    raw
                }
                tasksToComplete {
                  taskInfo {
                    raw
                  }
                  taskLinkText
                  title
                }
                helpfulInfo {
                  info {
                    raw
                  }
                }
                checklist {
                    item
                }
            }
        }
    `)
    const {
        loading,
        error,
        pageData,
        submitWorkObj,
        docFeedback,
        docSubmitted,
    } = useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

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
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}

    // TODO: can use reduce to combine these 2 expressions, i.e. divide array
    const completedSwots = Object.keys(doc).filter(
        (opt) =>
            devOptions
                .map(({ development_option: { option } }) => option)
                .includes(opt) &&
            Object.keys(doc[opt]).filter((key) => key !== 'provided').length ===
                4
    )

    const exampleSwotOptions = Object.keys(doc).filter(
        (swot) =>
            !devOptions
                .map(({ development_option: { option } }) => option)
                .includes(swot)
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay The Foundations</title>
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
                                currentDisplayName="Stage 3"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>
                            <ReadQuesty text={stageIntro} />
                            <Intro item={stageInfo} />
                            <p className="sm-type-guitar mb-4">
                                <span className="side-icon side-icon-orange shake">
                                    <HelpIcon />
                                </span>
                                Read the{' '}
                                <Link to="/information/about-swot">
                                    SWOT guide
                                </Link>{' '}
                                here.
                            </p>

                            <MapOptions />

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/todo"
                                />
                                <TaskContainer
                                    taskToComplete={tasksToComplete[1]}
                                    taskLinkUrl="/todo"
                                />
                            </TaskPanel>
                            {/*<div className="side-grey">*/}
                            {/*    <h3 className="task ticker mb-2">*/}
                            {/*        <span className="ticker-sheet">*/}
                            {/*            <TickSheet />*/}
                            {/*        </span>*/}
                            {/*        <span className="sm-type-drum">*/}
                            {/*            Tasks{' '}*/}
                            {/*            {docSubmitted*/}
                            {/*                ? 'submitted'*/}
                            {/*                : 'to complete:'}*/}
                            {/*        </span>*/}
                            {/*    </h3>*/}

                            {/*    <div className="form-holder-border">*/}
                            {/*        <p className="sm-type-lead mb-2">*/}
                            {/*            Part I - Longlist*/}
                            {/*        </p>*/}
                            {/*        <p className="sm-type-lead mb-2">*/}
                            {/*            Use the link below to find detailed*/}
                            {/*            information for each option, and then*/}
                            {/*            submit the 5 options your team will be*/}
                            {/*            taking forward.*/}
                            {/*        </p>*/}
                            {/*        <p className="sm-type-guitar">*/}
                            {/*            <Link to="/student/stage-3/options">*/}
                            {/*                Read about the development options*/}
                            {/*                and choose your 'longlist'*/}
                            {/*            </Link>*/}
                            {/*        </p>*/}
                            {/*    </div>*/}

                            {/*    <div*/}
                            {/*        className={`form-holder-border ${*/}
                            {/*            devOptions.length === 0 &&*/}
                            {/*            'not-available-holder'*/}
                            {/*        }`}*/}
                            {/*    >*/}
                            {/*        <p className="sm-type-lead mb-2">*/}
                            {/*            Part II - SWOT*/}
                            {/*        </p>*/}
                            {/*        <p className="sm-type-lead mb-2">*/}
                            {/*            Complete a SWOT analysis for each of the*/}
                            {/*            development options you chose in Part I.*/}
                            {/*        </p>*/}
                            {/*        <p className="sm-type-lead mb-2">*/}
                            {/*            Use the SWOT templates to help you*/}
                            {/*            confirm your choices. Make sure to hit*/}
                            {/*            'save' before returning to this screen!*/}
                            {/*        </p>*/}

                            {/*        <SwotLinks*/}
                            {/*            devOptions={devOptions}*/}
                            {/*            completedSwots={completedSwots}*/}
                            {/*        />*/}

                            {/*        {exampleSwotOptions.length > 0 && (*/}
                            {/*            <ExampleSwotLinks*/}
                            {/*                exampleSwots={exampleSwotOptions}*/}
                            {/*            />*/}
                            {/*        )}*/}

                            {/*        <SaveSubmitSection*/}
                            {/*            submitWorkObj={submitWorkObj}*/}
                            {/*            disableSubmit={*/}
                            {/*                completedSwots.length !== 5*/}
                            {/*            }*/}
                            {/*            docSubmitted={docSubmitted}*/}
                            {/*        />*/}
                            {/*    </div>*/}

                            {/*    {docFeedback && (*/}
                            {/*        <div className="side-grey">*/}
                            {/*            <h3 className="task ticker mb-2">*/}
                            {/*                <span className="ticker-sheet ticker-feedback">*/}
                            {/*                    <HelpIcon />*/}
                            {/*                </span>*/}
                            {/*                <span className="sm-type-drum green-highlight">*/}
                            {/*                    Tutor feedback:*/}
                            {/*                </span>*/}
                            {/*            </h3>*/}
                            {/*            <div className="form-holder-border">*/}
                            {/*                <p className="sm-type-lead">*/}
                            {/*                    <div*/}
                            {/*                        dangerouslySetInnerHTML={{*/}
                            {/*                            __html: docFeedback.feedback,*/}
                            {/*                        }}*/}
                            {/*                    />*/}
                            {/*                </p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-lg-3">
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage3LandingPage
