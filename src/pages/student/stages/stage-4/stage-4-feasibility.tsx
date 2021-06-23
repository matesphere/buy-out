import React, { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'

import { FeasibilityStudy } from '../../../../components/common/stages/FeasibilityStudy'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

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

const changeFunc = (workDispatch) => (option, section) => (data) =>
    workDispatch({
        type: ActionType.UpdateAction,
        payload: {
            option: option,
            section: section,
            input: data,
        },
    })

const feasibilityComplete = ({ whyBuy, ...rest }: WorkState) => {
    const studies = rest as { [key: string]: FeasibilityStudyType }

    return (
        !!whyBuy &&
        Object.values(studies).every(
            ({ benefits, reasonsSucceed, reasonsFail }) =>
                !!benefits && !!reasonsSucceed && reasonsFail
        )
    )
}

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

                                <FeasibilityStudy
                                    devOptions={devOptions}
                                    workState={workState}
                                    changeFunc={changeFunc(workDispatch)}
                                    docSubmitted={docSubmitted}
                                />

                                <SaveSubmitSection
                                    saveWorkObj={saveWorkObj}
                                    submitWorkObj={submitWorkObj}
                                    disableSubmit={
                                        !feasibilityComplete(workState)
                                    }
                                    docSubmitted={docSubmitted}
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
                    <Link to="/student/stage-4">Back to Stage 4</Link>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage4FeasibilityPage
