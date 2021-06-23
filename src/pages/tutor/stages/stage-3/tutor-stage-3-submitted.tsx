import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import Header from '../../_header'
import Footer from '../../_footer'
import { SWOT } from '../../../../components/common/stages/SWOT'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import '../../../../scss/index.scss'

const TutorStage3SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
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
                <title>Stage 3 - Lay the Foundations - Submitted</title>
            </Helmet>

            <main className="the-quest">
                <Header headerText="Stage 3" />
                <section className="container" id="main">
                    {devOptions.map((opt, i) => (
                        <SWOT
                            key={i}
                            devOption={opt.development_option}
                            swotState={
                                doc.doc_data[opt.development_option.option]
                            }
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
                <Footer />
            </main>
        </>
    )
}

export default TutorStage3SubmittedPage
