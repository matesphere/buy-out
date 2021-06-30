import React, { Reducer } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { TextEditor } from '../../../../components/common/TextEditor'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import { CheckList } from '../../../../components/common/Checklist'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import { eng } from '../../../_index.data'

import {
    stage1CheckListEng,
    stage1DataSubTitleEng,
    stage1DataTaskInstructionsEng,
} from './_stage1.data'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

type WorkState = {
    [key: number]: string
}

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

const Stage1TaskPage = () => {
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
        stageComplete,
    } = useWorkState<WorkState, Action>(1, stage1QuestionReducer)

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - {stageTitle} - Task</title>
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
                                        displayName: 'Stage 1',
                                        url: stageComplete
                                            ? '/student/stage-1/complete'
                                            : '/student/stage-1',
                                    },
                                ]}
                                currentDisplayName="Research Task"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>
                            {stage1DataTaskInstructionsEng.map((text, i) => (
                                <p key={i} className="sm-type-guitar mb-4">
                                    {text}
                                </p>
                            ))}

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
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: docFeedback.feedback,
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task{' '}
                                        {docSubmitted
                                            ? 'submitted'
                                            : 'to complete:'}
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
                                                    <TextEditor
                                                        data={
                                                            workState[i] || ''
                                                        }
                                                        onChange={(data) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateAction,
                                                                payload: {
                                                                    question: i,
                                                                    answer: data,
                                                                },
                                                            })
                                                        }
                                                        docSubmitted={
                                                            docSubmitted
                                                        }
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    <SaveSubmitSection
                                        saveWorkObj={saveWorkObj}
                                        submitWorkObj={submitWorkObj}
                                        disableSubmit={
                                            Object.values(workState).filter(
                                                Boolean
                                            ).length < 12
                                        }
                                        docSubmitted={docSubmitted}
                                    />
                                </div>
                            </div>
                            <Link
                                to={
                                    stageComplete
                                        ? '/student/stage-1/complete'
                                        : '/student/stage-1'
                                }
                            >
                                Back to Stage 1
                            </Link>
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
                            <CheckList items={stage1CheckListEng} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage1TaskPage
