import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { CostOfLand } from '../../../../components/common/stages/business-plan/CostOfLand'
import { CapitalCostsSection } from '../../../../components/common/stages/business-plan/CapitalCostsSection'
import { RunningCostsSection } from '../../../../components/common/stages/business-plan/RunningCostsSection'
import { CashFlowSection } from '../../../../components/common/stages/business-plan/CashFlowSection'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion'

const TutorStage5SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    } = useFeedbackState(search, true)

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

    const teamName = pageData.stage_progress_by_pk?.team.name
    const shortlist =
        pageData.stage_progress_by_pk.team.team_development_options.filter(
            (opt) => opt.shortlist
        )
    const doc = pageData.stage_progress_by_pk.documents[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>
                    Stage 5 - Progress Your Plans (Business Plan) - Submitted
                </title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Tutor Hub',
                                url: '/tutor/hub',
                            },
                            {
                                displayName: 'Team Hub',
                                url: '/student/team-hub/',
                            },
                        ]}
                        currentDisplayName={`${teamName}: Stage 5 Submission`}
                    />
                    {/* TODO: bring in team name & logo? */}

                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Progress Your Plans II - Business Plan
                            </h2>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task submitted
                                    </span>
                                </h3>

                                <p className="sm-type-drum sm-type-drum--medium mb-2">
                                    Cost of Land
                                </p>
                                <CostOfLand
                                    workState={doc.doc_data}
                                    docSubmitted={true}
                                    isTutorPage={true}
                                />
                                <Accordion
                                    allowMultipleExpanded
                                    allowZeroExpanded
                                >
                                    {shortlist.map((opt, i) => (
                                        <>
                                            <AccordionItem className="form-holder-border">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {
                                                            opt
                                                                .development_option
                                                                .display_name
                                                        }
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <CapitalCostsSection
                                                        devOption={
                                                            opt.development_option
                                                        }
                                                        workState={doc.doc_data}
                                                        docSubmitted={true}
                                                    />
                                                    <RunningCostsSection
                                                        devOption={
                                                            opt.development_option
                                                        }
                                                        workState={doc.doc_data}
                                                        docSubmitted={true}
                                                    />
                                                    <CashFlowSection
                                                        devOption={
                                                            opt.development_option
                                                        }
                                                        workState={doc.doc_data}
                                                        docSubmitted={true}
                                                    />
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </>
                                    ))}
                                </Accordion>

                                <SubmitFeedbackSection
                                    feedbackState={feedbackState}
                                    changeFunc={(data) =>
                                        feedbackDispatch({
                                            type: ActionType.UpdateAction,
                                            payload: {
                                                feedback: data,
                                            },
                                        })
                                    }
                                    submittedFeedback={doc.feedback}
                                    submitFeedbackObj={submitFeedbackObj}
                                    disableSubmit={
                                        feedbackState && !feedbackState.feedback
                                    }
                                />

                                <p className="sm-type-amp">
                                    <Link to="/tutor/current-quests">
                                        Back to Current Quests
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default TutorStage5SubmittedPage
