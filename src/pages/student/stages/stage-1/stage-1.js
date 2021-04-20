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

const CHECKBOX_LIST = [
    'Contact Community Land Scotland (CLS)',
    'Find out about what funding is available',
    'Get in touch with the agencies that can support you through the journey',
    'Look into options: Protocol or CRTB',
    'Identify who the landowner is',
]

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

    if (loading) return 'Loading...'
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
                <title>Stage 1: Research</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="the-quest">
                <Header headerText="the Quest" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Quest 1 - Research
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-4">
                                The legitimate place of people in the landscape:
                                renewing and repopulating rural Scotland
                            </p>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <ul>
                                    <li>
                                        <p className="sm-type-lead">
                                            Contact Community Land Scotland
                                            (CLS)
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Find out about what funding is
                                            available
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Get in touch with the agencies that
                                            can support you through the journey
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Look into options: Protocol or CRTB
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                CLS has a ‘Protocol for
                                                Negotiated Sales of Land with
                                                Scottish Land and Estates’
                                                (SLE), which provide guidance
                                                for sales between SLE and CLS
                                                members
                                            </li>
                                            <li>
                                                'Community Right To Buy' (CRTB)
                                                is a statutory route that allows
                                                communities the right to buy
                                                land when it comes up for sale.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Identify who the landowner is
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land Scotland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land About Us
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
