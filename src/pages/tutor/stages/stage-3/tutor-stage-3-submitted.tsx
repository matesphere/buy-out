import React, { Reducer, useState, FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import Header from '../../_header'
import Footer from '../../_footer'
import { SWOT } from '../../../../components/common/SWOT'
import { TextEditor } from '../../../../components/common/TextEditor'
import { SubmitFeedbackSection } from '../../../../components/tutor/stages/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

type WorkState = {
    feedback: string
}

type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: WorkState
      }

const stage3FeedbackReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                feedback: action.payload.feedback,
            }
        default:
            return state
    }
}

const TutorStage3SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    } = useFeedbackState<WorkState, Action>(stage3FeedbackReducer, search, true)

    const [allowUpdate, setAllowUpdate] = useState(false)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const devOptions =
        pageData.stage_progress_by_pk.team.team_development_options
    const doc = pageData.stage_progress_by_pk.documents[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Progress Your Plans (SWOT Analysis)</title>
            </Helmet>

            <main className="the-quest">
                <Header headerText="Stage 3" />
                <section className="container" id="main">
                    {devOptions.map((opt) => (
                        <SWOT
                            devOption={opt.development_option}
                            swotState={
                                doc.doc_data[opt.development_option.option]
                            }
                            docSubmitted={true}
                        />
                    ))}

                    <div className="side-grey">
                        <h3 className="task ticker mb-2">
                            <span className="ticker-sheet ticker-feedback">
                                <HelpIcon />
                            </span>
                            <span className="sm-type-drum green-highlight">
                                Your feedback:
                            </span>
                        </h3>
                        <div className="form-holder-border">
                            <p className="sm-type-lead">
                                <TextEditor
                                    data={feedbackState?.feedback || ''}
                                    onChange={(data) =>
                                        feedbackDispatch({
                                            type: ActionType.UpdateAction,
                                            payload: {
                                                feedback: data,
                                            },
                                        })
                                    }
                                    docSubmitted={doc.feedback && !allowUpdate}
                                />
                            </p>

                            <SubmitFeedbackSection
                                submittedFeedback={doc.feedback}
                                submitFeedbackObj={submitFeedbackObj}
                                disableSubmit={
                                    feedbackState && !feedbackState.feedback
                                }
                                allowUpdate={allowUpdate}
                                setAllowUpdate={setAllowUpdate}
                            />
                        </div>
                    </div>

                    {doc.feedback && !allowUpdate && (
                        <button
                            className="btn-solid-lg mt-4"
                            onClick={() => setAllowUpdate(true)}
                        >
                            Update Feedback
                        </button>
                    )}

                    <p className="sm-type-amp">
                        <Link to="/tutor/current-quests">
                            Back to Current Quests
                        </Link>
                    </p>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default TutorStage3SubmittedPage
