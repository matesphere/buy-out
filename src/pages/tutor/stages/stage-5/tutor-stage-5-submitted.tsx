import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../_header'
import Footer from '../../_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { CostOfLand } from '../../../../components/common/stages/business-plan/CostOfLand'
import { CapitalCostsSection } from '../../../../components/common/stages/business-plan/CapitalCostsSection'
import { RunningCostsSection } from '../../../../components/common/stages/business-plan/RunningCostsSection'
import { CashFlowSection } from '../../../../components/common/stages/business-plan/CashFlowSection'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import '../../../../scss/index.scss'

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
    if (error) return <Error error={error} />

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
                    <CostOfLand workState={doc.doc_data} docSubmitted={true} />

                    {shortlist.map((opt, i) => (
                        <CapitalCostsSection
                            devOption={opt.development_option}
                            workState={doc.doc_data}
                            docSubmitted={true}
                        />
                    ))}

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
                        disableSubmit={feedbackState && !feedbackState.feedback}
                    />

                    <p className="sm-type-amp">
                        <Link to="/tutor/current-quests">
                            Back to Current Quests
                        </Link>
                    </p>
                </section>
            </main>
        </>
    )
}

export default TutorStage5SubmittedPage
