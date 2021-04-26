import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, useQuery, useMutation } from '@apollo/client'
import { SUBMIT_WORK } from '../../../../gql/mutations'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import DogVideo from '../../../../assets/the-quest.mp4'
import { eng } from '../../../_index.data'

// TODO this will also probably use user ID (or team ID actually)
const STAGE_1_QUERY = gql`
    query StageQuery($name: String, $stageId: Int) {
        user(where: { first_name: { _eq: $name } }) {
            student {
                team {
                    stage_progresses(where: { stage_id: { _eq: $stageId } }) {
                        id
                        stage_id
                        status
                    }
                }
            }
        }
    }
`

const useCheckboxListState = (listOfLabels) => {
    const [checkboxState, setCheckboxState] = useState(
        listOfLabels.map((label, i) => ({ id: i, label, value: false }))
    )

    const toggleCheckbox = (id) => {
        setCheckboxState((state) =>
            state.map((checkbox) =>
                checkbox.id === id
                    ? { id, label: checkbox.label, value: !checkbox.value }
                    : checkbox
            )
        )
    }

    const allCheckboxesChecked = checkboxState
        .map((checkbox) => checkbox.value)
        .every(Boolean)

    return [checkboxState, toggleCheckbox, allCheckboxesChecked]
}

const CHECKBOX_LIST = ['You have researched and answered all 12 questions']

// TODO: freeze this in place once work submitted (i.e. based on active doc submission in DB)
const CheckboxList = ({
    checkboxState,
    toggleCheckbox,
    allCheckboxesChecked,
}) => (
    <div className="side-grey">
        <p className="sm-type-amp">Check all task here:</p>
        {checkboxState.map(({ id, label, value }) => (
            <div className="multiple-choice">
                <input
                    className="form-control"
                    id={id}
                    type="checkbox"
                    value={value ? 'checked' : 'unchecked'}
                    onChange={() => toggleCheckbox(id)}
                />
                <label className="form-label" htmlFor={id}>
                    {label}
                </label>
            </div>
        ))}
        {allCheckboxesChecked && (
            <p className="sm-type-amp">You can now submit your findings.</p>
        )}
    </div>
)

const QuestPage = () => {
    const [
        checkboxState,
        toggleCheckbox,
        allCheckboxesChecked,
    ] = useCheckboxListState(CHECKBOX_LIST)

    const { loading, error, data: pageData } = useQuery(STAGE_1_QUERY, {
        variables: { name: 'Steve', stageId: 1 },
    })

    const [submitWork, submitWorkResponse] = useMutation(SUBMIT_WORK)

    if (loading) return (<section className="container" id="main"><div className="row"><div className="col-lg-12 text-align-center"><div className="loader"></div><p className="sm-type-drum sm-type-drum--medium">Loading...</p></div></div></section>)
    if (error) return `Error! ${error.message}`

    const user = pageData.user[0]

    const {
        student: {
            team: { stage_progresses: stageProgresses },
        },
    } = user

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
                                As the first stage of your Quest, it is
                                important to gain some background knowledge
                                about community land ownership in Scotland and
                                also to think about some of the important
                                concepts and issues.
                            </p>
                            <div className="homepage-image mb-4">
                                <video controls>
                                    <source src={DogVideo} type="video/mp4" />
                                </video>
                            </div>
                            <p className="sm-type-guitar mb-4">
                                Here are a series of questions to help you to do
                                some preliminary exploration. This is your first
                                opportunity to work together as a team, so the
                                answers that you provide should be the product
                                of discussions between each of the team members.
                            </p>

                            <h3 className="sm-type-drum sm-type-drum--medium">
                                Questions
                            </h3>
                            <ol>
                                {eng.map((eng) => (
                                    <li key={eng.text}>
                                        <p className="sm-type-guitar">
                                            {eng.text}
                                        </p>
                                        <p className="sm-type-amp mb-4">
                                            {eng.description}
                                        </p>
                                    </li>
                                ))}
                            </ol>
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
                            <p className="sm-type-guitar mb-2">
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
                            />

                            <button
                                className="btn-solid-lg mt-4"
                                disabled={!allCheckboxesChecked}
                                onClick={() => {
                                    submitWork({
                                        variables: {
                                            stageProgressId,
                                            docLink: 'doc.link',
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
                </section>
                <Footer />
            </main>
        </>
    )
}

export default QuestPage
