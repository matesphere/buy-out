import React, { useReducer, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { TextEditor } from '../../../../components/common/TextEditor'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
// import { useCheckboxListState } from '../../../../utils/input-utils'

import { SAVE_WORK, SUBMIT_WORK } from '../../../../gql/mutations'

import HelpIcon from '../../../../assets/help-icon.svg'
// import TickSheet from '../../../../assets/tick-sheet.svg'

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

// const CHECKBOX_LIST = ['You have researched and answered all 12 questions']

// // TODO: freeze this in place once work submitted (i.e. based on active doc submission in DB)
// const CheckboxList = ({
//     checkboxState,
//     toggleCheckbox,
//     allCheckboxesChecked,
// }) => (
//     <div className="side-grey">
//         <p className="sm-type-amp">Check all task here:</p>
//         {checkboxState.map(({ id, label, value }, i) => (
//             <div key={i} className="multiple-choice">
//                 <input
//                     className="form-control"
//                     id={id}
//                     type="checkbox"
//                     value={value ? 'checked' : 'unchecked'}
//                     onChange={() => toggleCheckbox(id)}
//                 />
//                 <label className="form-label" htmlFor={id}>
//                     {label}
//                 </label>
//             </div>
//         ))}
//         {allCheckboxesChecked && (
//             <p className="sm-type-amp">You can now submit your findings.</p>
//         )}
//     </div>
// )

const questionReducer = (state, { type, payload }) => {
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

// TODO: extract this to be generic 'docState' hook, useDocState(query, vars, selector, reducer)
// TODO: should be able to build in save & submit too (including adding doc ID to state for future save/submits)
const useQuestionState = () => {
    const [questionState, questionDispatch] = useReducer(questionReducer, {})

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery(
        STAGE_1_RESEARCH_QUERY,
        {
            variables: { stage_id: 1 },
        },
        'teamId'
    )

    useEffect(() => {
        if (loading === false) {
            const doc_data =
                pageData?.team_by_pk?.stage_progresses[0]?.documents[0]
                    ?.doc_data

            if (doc_data) {
                questionDispatch({
                    type: 'load',
                    payload: doc_data,
                })
            }
        }
    }, [loading, pageData])

    return [loading, error, pageData, questionState, questionDispatch]
}

const Stage1ResearchPage = () => {
    // const [checkboxState, toggleCheckbox, allCheckboxesChecked] =
    //     useCheckboxListState(CHECKBOX_LIST)

    // const {
    //     loading,
    //     error,
    //     data: pageData,
    // } = useAuthQuery(
    //     STAGE_1_RESEARCH_QUERY,
    //     {
    //         variables: { stage_id: 1 },
    //     },
    //     'teamId'
    // )

    const [saveWork, saveWorkResponse] = useAuthMutation(SAVE_WORK)
    const [submitWork, submitWorkResponse] = useAuthMutation(SUBMIT_WORK)
    const [loading, error, pageData, questionState, questionDispatch] =
        useQuestionState()

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

    const { stage_progresses: stageProgresses } = pageData.team_by_pk

    // const docData = stageProgresses.documents[0].doc_data
    const stageProgressId = stageProgresses[0].id

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
                                                <TextEditor
                                                    data={
                                                        questionState[i] || ''
                                                    }
                                                    onChange={(data) =>
                                                        questionDispatch({
                                                            type: 'update',
                                                            payload: {
                                                                question: i,
                                                                answer: data,
                                                            },
                                                        })
                                                    }
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                                {/* <p className="sm-type-guitar mb-2">
                                    <span className="side-icon side-icon-green">
                                        <TickSheet />
                                    </span>
                                    Your checklist
                                </p>
                                <CheckboxList
                                    {...{
                                        checkboxState,
                                        toggleCheckbox,
                                        allCheckboxesChecked,
                                    }}
                                /> */}

                                <button
                                    className="btn-solid-lg mt-4"
                                    onClick={() => {
                                        saveWork({
                                            variables: {
                                                stageProgressId,
                                                doc_data: questionState,
                                            },
                                        })
                                    }}
                                >
                                    Save Work
                                </button>

                                <button
                                    className="btn-solid-lg mt-4"
                                    disabled={
                                        Object.keys(questionState).length < 12
                                    }
                                    onClick={() => {
                                        submitWork({
                                            variables: {
                                                stageProgressId,
                                            },
                                        })
                                    }}
                                >
                                    Submit Work
                                </button>

                                {submitWorkResponse.data && (
                                    <span>
                                        {`Doc submitted and available at `}
                                        <a href="doc.link">doc.link</a>
                                    </span>
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
