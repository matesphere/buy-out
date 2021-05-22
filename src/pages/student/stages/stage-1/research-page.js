import React, { useState, useReducer, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { TextEditor } from '../../../../components/common/TextEditor'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import SaveIcon from "../../../../assets/save-icon.svg";

import {
    SAVE_WORK_INITIAL,
    SAVE_WORK,
    SUBMIT_WORK_INITIAL,
    SUBMIT_WORK,
} from '../../../../gql/mutations'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { eng } from '../../../_index.data'

const STAGE_1_RESEARCH_QUERY = gql`
    query Stage1ResearchQuery($team_id: uuid!, $stage_id: Int) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(where: { status: { _eq: draft } }) {
                    id
                    doc_data
                }
            }
        }
    }
`

const stage1QuestionReducer = (state, { type, payload }) => {
    switch (type) {
        case 'load':
            return payload
        case 'update':
            return {
                ...state,
                [payload.question]: payload.answer,
            }
        default:
            return state
    }
}

const stage1DocSelector = (data) =>
    data?.team_by_pk?.stage_progresses[0]?.documents[0] || {}

const useWorkState = (docQuery, docQueryVars, docSelector, workReducer) => {
    const [docId, setDocId] = useState('')
    const [workState, workDispatch] = useReducer(workReducer, {})

    const [saveWorkInitial, saveWorkInitialResponse] =
        useAuthMutation(SAVE_WORK_INITIAL)
    const [saveWork, saveWorkResponse] = useAuthMutation(SAVE_WORK)
    const [submitWorkInitial, submitWorkInitialResponse] =
        useAuthMutation(SUBMIT_WORK_INITIAL)
    const [submitWork, submitWorkResponse] = useAuthMutation(SUBMIT_WORK)

    useEffect(() => {
        const { called, loading, data } = saveWorkInitialResponse
        if (called && !loading) {
            setDocId(data.insert_document_one.id)
        }
    }, [saveWorkInitialResponse.called])

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery(docQuery, { variables: docQueryVars }, 'teamId')

    useEffect(() => {
        if (!loading) {
            const { id, doc_data } = docSelector(pageData)

            if (id && doc_data) {
                setDocId(id)
                workDispatch({
                    type: 'load',
                    payload: doc_data,
                })
            }
        }
    }, [loading, pageData])

    const stageProgressId =
        pageData?.team_by_pk?.stage_progresses[0]?.id || null

    const saveWorkObj = !!docId
        ? {
              call: () =>
                  saveWork({
                      variables: { docId, docData: workState },
                  }),
              response: saveWorkResponse,
          }
        : {
              call: () =>
                  saveWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  }),
              response: saveWorkInitialResponse,
          }

    const submitWorkObj = !!docId
        ? {
              call: () =>
                  submitWork({
                      variables: { docId, docData: workState },
                  }),
              response: submitWorkResponse,
          }
        : {
              call: () =>
                  submitWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  }),
              response: submitWorkInitialResponse,
          }

    return {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
    }
}

const Stage1ResearchPage = () => {
    const {
        loading,
        error,
        // pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
    } = useWorkState(
        STAGE_1_RESEARCH_QUERY,
        { stage_id: 1 },
        stage1DocSelector,
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
                        <div className="col-lg-8">
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
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">Useful links</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
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
                                                                type: 'update',
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
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Stage1ResearchPage
