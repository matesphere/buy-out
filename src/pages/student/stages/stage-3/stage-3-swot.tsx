import React, { Reducer, FC } from 'react'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SWOT } from '../../../../components/common/stages/SWOT'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

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

const onChangeEditor =
    (workDispatch, devOption) => (section: string) => (data) =>
        workDispatch({
            type: ActionType.UpdateAction,
            payload: {
                option: devOption.option,
                section: section,
                input: data,
            },
        })

const Stage3Swot: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        docSubmitted,
        // docFeedback,
    } = useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { id, num } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string; num: number }

    const devOption = pageData.team_by_pk.team_development_options.find(
        (opt) => opt.id === id
    )?.development_option

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
                    <SWOT
                        swotTitle={`SWOT Analysis ${num + 1}`}
                        // docFeedback={docFeedback}
                        devOption={devOption}
                        swotState={workState[devOption.option]}
                        changeFunc={onChangeEditor(workDispatch, devOption)}
                        saveWorkObj={saveWorkObj}
                        docSubmitted={docSubmitted}
                    />
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage3Swot
