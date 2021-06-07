import React, { Reducer, useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../tutor/_header'
import Footer from '../../../tutor/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { TextEditor } from '../../../../components/common/TextEditor'
import { SubmitFeedbackSection } from '../../../../components/tutor/stages/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import { eng } from '../../../_index.data'

type WorkState = {
    feedback: string
}

type Action = {
    type: ActionType.UpdateAction
    payload: WorkState
}

const stage1FeedbackReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        // case ActionType.LoadAction:
        //     return action.payload
        case ActionType.UpdateAction:
            return {
                feedback: action.payload.feedback,
            }
        default:
            return state
    }
}

const TutorStage1TaskPage = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    } = useFeedbackState<WorkState, Action>(stage1FeedbackReducer, search)

    const [allowUpdate, setAllowUpdate] = useState(false)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const doc = pageData.stage_progress_by_pk.documents[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - Research</title>
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

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task submitted
                                    </span>
                                </h3>
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
                                                <p className="sm-type-amp mb-4">
                                                    {eng.description}
                                                </p>
                                                <div className="ck-textarea">
                                                    <div
                                                        className="submitted-holder"
                                                        dangerouslySetInnerHTML={{
                                                            __html: doc
                                                                .doc_data[i],
                                                        }}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

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
                                        {doc.feedback && !allowUpdate ? (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: doc.feedback
                                                        .feedback,
                                                }}
                                            />
                                        ) : (
                                            <TextEditor
                                                data={
                                                    feedbackState?.feedback ||
                                                    ''
                                                }
                                                onChange={(data) =>
                                                    feedbackDispatch({
                                                        type: ActionType.UpdateAction,
                                                        payload: {
                                                            feedback: data,
                                                        },
                                                    })
                                                }
                                            />
                                        )}
                                    </p>

                                    <SubmitFeedbackSection
                                        submittedFeedback={doc.feedback}
                                        submitFeedbackObj={submitFeedbackObj}
                                        disableSubmit={
                                            feedbackState &&
                                            !feedbackState.feedback
                                        }
                                        allowUpdate={allowUpdate}
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
                                <Link to="/tutor/current-quest">
                                    Back to Current Quests
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default TutorStage1TaskPage
