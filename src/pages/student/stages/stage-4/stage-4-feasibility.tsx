import React, { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { TextEditor } from '../../../../components/common/TextEditor'
import { SaveSubmitSection } from '../../../../components/student/stages/SaveSubmitSection'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

interface FeasibilityStudyType {
    benefits: string
    reasonsSucceed: string
    reasonsFail: string
}

export interface WorkState {
    [key: string]: string | FeasibilityStudyType
}

export type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: {
              option?: string
              section?: 'benefits' | 'reasonsSucceed' | 'reasonsFail'
              input: string
          }
      }

export const stage4Reducer: Reducer<WorkState, Action> = (
    state,
    action
): WorkState => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            if (action.payload.option) {
                return {
                    ...state,
                    [action.payload.option]: {
                        ...state[action.payload.option],
                        [action.payload.section]: action.payload.input,
                    },
                }
            } else {
                return {
                    ...state,
                    whyBuy: action.payload.input,
                }
            }
    }
}

const onChangeEditor = (workDispatch, option, section) => (data) =>
    workDispatch({
        type: ActionType.UpdateAction,
        payload: {
            option: option,
            section: section,
            input: data,
        },
    })

const Stage4FeasibilityPage: FC = () => {
    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
        docSubmitted,
        docFeedback,
    } = useWorkState<WorkState, Action>(4, stage4Reducer, true)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const devOptions = pageData.team_by_pk.team_development_options.filter(
        (opt) => opt.shortlist
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - Feasibility Study</title>
            </Helmet>

            <main className="the-quest">
                <Header headerText="Stage 4" />

                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Feasibility Study
                            </h2>
                            <div className="side-grey">
                                <h4 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h4>

                                <ol>
                                    <li className="mb-4">
                                        <div id="more-detail-hint">
                                            <h2 className="sm-type-bigamp mb-1">
                                                Why does the Community want to
                                                buy this land? (You should not
                                                refer to specific schemes but
                                                rather explain what it would
                                                mean to the community to own
                                                this land.)
                                            </h2>
                                        </div>
                                        <div className="form-holder-border">
                                            <p className="sm-type-amp mb-1">
                                                Enter your finding on the text
                                                box below.
                                            </p>
                                            <div className="ck-textarea">
                                                <TextEditor
                                                    data={
                                                        workState.whyBuy || ''
                                                    }
                                                    onChange={(data) =>
                                                        workDispatch({
                                                            type: ActionType.UpdateAction,
                                                            payload: {
                                                                input: data,
                                                            },
                                                        })
                                                    }
                                                    docSubmitted={docSubmitted}
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="mb-4">
                                        <h2 className="sm-type-bigamp mb-2">
                                            For each Development Option,
                                            describe the expected benefits to
                                            the community, the reasons that the
                                            scheme is likely to succeed and the
                                            risks that might cause it to fail.
                                        </h2>

                                        {devOptions.map(
                                            (
                                                {
                                                    development_option: {
                                                        option,
                                                        display_name,
                                                    },
                                                },
                                                i
                                            ) => (
                                                <div
                                                    key={i}
                                                    className="form-holder-border"
                                                >
                                                    <h4 className="sm-type-drum mb-2">
                                                        {display_name}
                                                    </h4>
                                                    <div id="more-detail-hint11">
                                                        <p className="sm-type-bigamp mb-1 redorange-highlight">
                                                            Benefits to the
                                                            Community
                                                        </p>
                                                    </div>
                                                    <div className="ck-textarea">
                                                        <TextEditor
                                                            data={
                                                                workState[
                                                                    option
                                                                ]?.[
                                                                    'benefits'
                                                                ] || ''
                                                            }
                                                            onChange={onChangeEditor(
                                                                workDispatch,
                                                                option,
                                                                'benefits'
                                                            )}
                                                            docSubmitted={
                                                                docSubmitted
                                                            }
                                                        />
                                                    </div>
                                                    <div id="more-detail-hint22">
                                                        <p className="sm-type-bigamp mb-1 green-highlight">
                                                            Reasons the Scheme
                                                            is likely to succeed
                                                        </p>
                                                    </div>
                                                    <div className="ck-textarea">
                                                        <TextEditor
                                                            data={
                                                                workState[
                                                                    option
                                                                ]?.[
                                                                    'reasonsSucceed'
                                                                ] || ''
                                                            }
                                                            onChange={onChangeEditor(
                                                                workDispatch,
                                                                option,
                                                                'reasonsSucceed'
                                                            )}
                                                            docSubmitted={
                                                                docSubmitted
                                                            }
                                                        />
                                                    </div>
                                                    <div id="more-detail-hin33">
                                                        <p className="sm-type-bigamp mb-1 red-highlight">
                                                            Risks that might
                                                            cause the Scheme to
                                                            fail
                                                        </p>
                                                    </div>
                                                    <div className="ck-textarea">
                                                        <TextEditor
                                                            data={
                                                                workState[
                                                                    option
                                                                ]?.[
                                                                    'reasonsFail'
                                                                ] || ''
                                                            }
                                                            onChange={onChangeEditor(
                                                                workDispatch,
                                                                option,
                                                                'reasonsFail'
                                                            )}
                                                            docSubmitted={
                                                                docSubmitted
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </li>
                                </ol>

                                <SaveSubmitSection
                                    saveWorkObj={saveWorkObj}
                                    submitWorkObj={submitWorkObj}
                                    disableSubmit={false}
                                />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <Helpful
                                items={[
                                    'You may find it helpful to refer back to the available information on the development options you have chosen.',
                                ]}
                            />

                            <CheckList
                                items={[
                                    'Describe why you think the community wants to buy this land',
                                    'Complete the feasibility studies on 3 options',
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage4FeasibilityPage
