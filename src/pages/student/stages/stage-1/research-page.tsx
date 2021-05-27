import React, { Reducer } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { TextEditor } from '../../../../components/common/TextEditor'

// import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { useWorkState, ActionType } from '../../../../utils/input-utils'

import SaveIcon from '../../../../assets/save-icon.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { eng } from '../../../_index.data'

type WorkState = {
    [key: number]: string
}

// enum ActionType {
//     LoadAction,
//     UpdateAction,
// }

type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: { question: number; answer: string }
      }

const stage1QuestionReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.question]: action.payload.answer,
            }
        default:
            return state
    }
}

// const stage1DocSelector = (data) =>
//     data?.team_by_pk?.stage_progresses[0]?.documents[0] || {}

const Stage1ResearchPage = () => {
    const {
        loading,
        error,
        // pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
    } = useWorkState<WorkState, Action>(
        // STAGE_1_RESEARCH_QUERY,
        1,
        // stage1DocSelector,
        stage1QuestionReducer
    )

    if (loading)
        return (
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-12 text-align-center">
                        <div className="loader"></div>
                        <p className="sm-type-drum sm-type-drum--medium">
                            Loading...
                        </p>
                    </div>
                </div>
            </section>
        )
    if (error) return `Error! ${error.message}`

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
                            <p className="sm-type-guitar mb-4">
                                Here are a series of questions to help you to do
                                some preliminary exploration. This is your first
                                opportunity to work together as a team, so the
                                answers that you provide should be the product
                                of discussions between each of the team members.
                            </p>

                            <div className="form-holder-border">
                                <h3 className="sm-type-drum sm-type-drum--medium">
                                    Questions
                                </h3>
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
                                                {submitWorkObj.response.data ? (
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: workState[
                                                                i
                                                                ],
                                                        }}
                                                    />
                                                ) : (
                                                    <TextEditor
                                                        data={
                                                            workState[i] || ''
                                                        }
                                                        onChange={(data) =>
                                                            workDispatch({
                                                                // type: 'update',
                                                                type: ActionType.UpdateAction,
                                                                payload: {
                                                                    question: i,
                                                                    answer: data,
                                                                },
                                                            })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>

                                {!submitWorkObj.response.data && (
                                    <>
                                        <button
                                            className="btn-outline-lg mt-4 btn-icon"
                                            onClick={saveWorkObj.call}
                                        >
                                            <SaveIcon />
                                            Save Work
                                        </button>

                                        <button
                                            className="btn-solid-lg mt-4"
                                            disabled={
                                                Object.keys(workState).length <
                                                12
                                            }
                                            onClick={submitWorkObj.call}
                                        >
                                            Submit Work
                                        </button>
                                    </>
                                )}

                                {submitWorkObj.response.data && (
                                    <span>Work submitted - good luck!</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Civil parish
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Loch_Alsh"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Lochalsh
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Highland_council_area"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Highland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Inverness-shire"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Inverness-shire
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Stage1ResearchPage
