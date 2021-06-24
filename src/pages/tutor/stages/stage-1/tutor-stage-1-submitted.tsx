import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../_header'
import Footer from '../../_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import { eng } from '../../../_index.data'

const TutorStage1SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    } = useFeedbackState(search)

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
                <title>Stage 1 - Research - Submitted</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 1" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
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
                </section>
                <Footer />
            </main>
        </>
    )
}

export default TutorStage1SubmittedPage
