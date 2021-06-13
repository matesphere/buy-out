import React, { Reducer, FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { TextEditor } from '../../../../components/common/TextEditor'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import SaveIcon from '../../../../assets/save-icon.svg'
import HelpIcon from '../../../../assets/help-icon.svg'
import '../../../../scss/index.scss'

interface SwotType {
    strengths: string
    weaknesses: string
    opportunities: string
    threats: string
}

export interface WorkState {
    [key: string]: SwotType
}

export type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: {
              option: string
              section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats'
              input: string
          }
      }

export const stage3SwotReducer: Reducer<WorkState, Action> = (
    state,
    action
) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.option]: {
                    ...state[action.payload.option],
                    [action.payload.section]: action.payload.input,
                },
            }
    }
}

const Stage3Swot: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
        docFeedback,
    } = useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { id } = QueryString.parse(search)
    const devOption = pageData.team_by_pk.team_development_options.find(
        (opt) => opt.id === id
    )?.development_option

    const swotState = workState[devOption.option]

    // TODO: feedback split out by SWOT
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
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                SWOT Analysis 1
                            </h2>
                            <p className="sm-type-amp mb-4">
                                Use the SWOT Analysis to gather information in
                                order to complete the Feasibility Study
                                template.{' '}
                            </p>

                            {docFeedback && (
                                <div className="side-grey">
                                    <h3 className="task ticker mb-2">
                                        <span className="ticker-sheet ticker-feedback">
                                            <HelpIcon />
                                        </span>
                                        <span className="sm-type-drum green-highlight">
                                            Tutor feedback:
                                        </span>
                                    </h3>
                                    <div className="form-holder-border">
                                        <p className="sm-type-lead">
                                            {docFeedback.feedback}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <h3 className="sm-type-drum sm-type-drum--medium mt-4">
                                Option: {devOption.display_name}
                            </h3>
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Fill out the SWOT diagram, using the
                                    information provided elsewhere in stage 3 to
                                    help you.
                                </p>
                                <p className="sm-type-amp">
                                    <strong>
                                        Remember to hit 'save work' on each of
                                        your SWOTs, before leaving the page!
                                    </strong>
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/student/stage-3">
                                        Back to Stage 3
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 red-highlight">
                                        Strengths
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Areas of advantage
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor
                                        data={swotState?.['strengths'] || ''}
                                        onChange={(data) =>
                                            workDispatch({
                                                type: ActionType.UpdateAction,
                                                payload: {
                                                    option: devOption.option,
                                                    section: 'strengths',
                                                    input: data,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 greendark-highlight">
                                        Weaknesses
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Areas of challenge
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor
                                        data={swotState?.['weaknesses'] || ''}
                                        onChange={(data) =>
                                            workDispatch({
                                                type: ActionType.UpdateAction,
                                                payload: {
                                                    option: devOption.option,
                                                    section: 'weaknesses',
                                                    input: data,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 green-highlight">
                                        Opportunities
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Positive influences outside your control
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor
                                        data={
                                            swotState?.['opportunities'] || ''
                                        }
                                        onChange={(data) =>
                                            workDispatch({
                                                type: ActionType.UpdateAction,
                                                payload: {
                                                    option: devOption.option,
                                                    section: 'opportunities',
                                                    input: data,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1">
                                        Threats
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Negative influences outside your control
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor
                                        data={swotState?.['threats'] || ''}
                                        onChange={(data) =>
                                            workDispatch({
                                                type: ActionType.UpdateAction,
                                                payload: {
                                                    option: devOption.option,
                                                    section: 'threats',
                                                    input: data,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button
                            className="btn-outline-lg mt-4 btn-icon"
                            onClick={saveWorkObj.call}
                        >
                            <SaveIcon />
                            Save Work
                        </button>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage3Swot
