import React, { useState, useContext, useReducer, Reducer } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { TextEditor } from '../../../../components/common/TextEditor'
import { CheckList } from '../../../../components/common/Checklist'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { UserStateContext } from '../../../../utils/user-state'
import { ActionType } from '../../../../utils/input-utils'
import { useAuthMutation } from '../../../../utils/auth-utils'

import { SUBMIT_REFLECTION } from '../../../../gql/mutations'

import {
    stage8CheckListEng,
    stage8DataSubTitleEng,
    stage8DataTaskInstructionsEng,
    stage8Questions,
} from './_stage8.data'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

type WorkState = {
    [key: number]: string
}

type Action = {
    type: ActionType.UpdateAction
    payload: { question: number; answer: string }
}

const stage8QuestionReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.question]: action.payload.answer,
            }
        default:
            return state
    }
}

const Stage8TaskPage = () => {
    const {
        userInfo: { schoolId },
    } = useContext(UserStateContext)

    const [showSubmitModal, setShowSubmitModal] = useState(false)

    const [workState, workDispatch] = useReducer<Reducer<WorkState, Action>>(
        stage8QuestionReducer,
        {}
    )

    const [submitReflection, submitReflectionResponse] =
        useAuthMutation(SUBMIT_REFLECTION)

    // if (loading) return <Loading />
    // if (error || !pageData)
    //     return (
    //         <Error
    //             error={
    //                 error ||
    //                 new ApolloError({ errorMessage: 'No data returned!' })
    //             }
    //         />
    //     )

    // const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 8 - Reflection - Task</title>
                <meta name="description" content="The description" />
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
                                    {
                                        displayName: 'Stage 8',
                                        url: '/student/stage-8',
                                    },
                                ]}
                                currentDisplayName="Reflection"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Reflection
                            </h2>

                            {stage8DataTaskInstructionsEng.map((text, i) => (
                                <p key={i} className="sm-type-guitar mb-4">
                                    {text}
                                </p>
                            ))}

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task{' '}
                                        {submitReflectionResponse.data
                                            ? 'submitted'
                                            : 'to complete:'}
                                    </span>
                                </h3>
                                <div className="form-holder-border">
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {stage8Questions.map(
                                            ({ text, description }, i) => (
                                                <li key={i}>
                                                    <p className="sm-type-guitar">
                                                        {text}
                                                    </p>
                                                    {description && (
                                                        <p className="sm-type-amp mb-4">
                                                            {description}
                                                        </p>
                                                    )}
                                                    <div className="ck-textarea">
                                                        <TextEditor
                                                            data={
                                                                workState[i] ||
                                                                ''
                                                            }
                                                            onChange={(data) =>
                                                                workDispatch({
                                                                    type: ActionType.UpdateAction,
                                                                    payload: {
                                                                        question:
                                                                            i,
                                                                        answer: data,
                                                                    },
                                                                })
                                                            }
                                                            docSubmitted={false}
                                                        />
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ol>

                                    {!submitReflectionResponse.data && (
                                        <button
                                            className="btn-solid-lg mt-4"
                                            disabled={
                                                Object.values(workState).filter(
                                                    Boolean
                                                ).length < 8
                                            }
                                            onClick={() =>
                                                setShowSubmitModal(true)
                                            }
                                        >
                                            Submit
                                        </button>
                                    )}

                                    {showSubmitModal && (
                                        <div className="modal-window">
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        setShowSubmitModal(
                                                            false
                                                        )
                                                    }
                                                    title="Close"
                                                    className="modal-close"
                                                >
                                                    Close
                                                </button>

                                                {submitReflectionResponse.data ? (
                                                    <p className="sm-type-drum">
                                                        Thanks for submitting
                                                        your feedback.
                                                    </p>
                                                ) : (
                                                    <>
                                                        <p>Are you sure?</p>
                                                        <button
                                                            className="btn-solid-lg mt-4"
                                                            onClick={() =>
                                                                submitReflection(
                                                                    {
                                                                        variables:
                                                                            {
                                                                                schoolId,
                                                                                docData:
                                                                                    workState,
                                                                            },
                                                                    }
                                                                )
                                                            }
                                                        >
                                                            Yes, submit feedback
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {submitReflectionResponse.data && (
                                <p className="sm-type-guitar mb-4">
                                    Thank you very much for your time and
                                    congratulations again on completing the
                                    Community Land Quest!
                                </p>
                            )}
                            <Link to="/student/stage-8">Back to Stage 8</Link>
                        </div>

                        <div className="col-lg-3">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Have a think back over everything you've
                                    just accomplished.
                                </p>
                                <p className="sm-type-amp">
                                    Do you feel you worked well as a team?
                                </p>
                            </div>
                            <CheckList items={stage8CheckListEng} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage8TaskPage
