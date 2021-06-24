import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { UserStateContext } from '../../../../utils/user-state'
import { useCheckboxState } from '../../../../utils/input-utils'
import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { CHOOSE_DEVELOPMENT_OPTIONS } from '../../../../gql/mutations'

import {
    Stage3TaskQuery,
    Stage3TaskQueryVariables,
} from '../../../../gql/types/Stage3TaskQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const STAGE_3_TASK_QUERY = gql`
    query Stage3TaskQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            team_development_options {
                id
            }
        }
        development_option(order_by: { id: asc }) {
            id
            option
            display_name
        }
    }
`

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
    teamChoiceName,
    setTeamChoiceName,
}) => (
    <>
        {devOptions.slice().map(({ id, display_name }, i) =>
            id === 10 ? (
                <div key={i}>
                    <p className="sm-type-lead sm-type-lead--medium mt-4">
                        Or choose your own option - check the box and enter your
                        option name here!
                    </p>
                    <div className="multiple-choice">
                        <input
                            className="form-control"
                            id="10"
                            type="checkbox"
                            checked={selectedOptions.includes(10)}
                            onChange={() => toggleValue(10)}
                        />
                        <label className="form-label" htmlFor="housing">
                            Team choice
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-label sm-type-amp">
                            Development option name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={teamChoiceName}
                            onChange={({ target: { value } }) =>
                                setTeamChoiceName(value)
                            }
                        />
                    </div>
                </div>
            ) : (
                <div key={i} className="multiple-choice">
                    <input
                        className="form-control"
                        id={id}
                        type="checkbox"
                        checked={selectedOptions.includes(id)}
                        onChange={() => toggleValue(id)}
                    />
                    <label className="form-label" htmlFor={id}>
                        {display_name}
                    </label>
                </div>
            )
        )}
    </>
)

// TODO: move this out to components
const Stage3Task = () => {
    const {
        userInfo: { teamId },
    } = useContext(UserStateContext)

    const [teamChoiceName, setTeamChoiceName] = useState('')

    const [selectedOptions, toggleValue, allowedNumberSelected] =
        useCheckboxState<number>([], 5)

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_DEVELOPMENT_OPTIONS,
        {
            query: STAGE_3_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        }
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage3TaskQuery, Stage3TaskQueryVariables>(
        STAGE_3_TASK_QUERY,
        {},
        'teamId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { team_development_options: devOptions } = pageData.team_by_pk
    const taskComplete = devOptions.length === 5

    return (
        <div className="side-grey">
            <h3 className="task ticker mb-2">
                <span className="ticker-sheet">
                    <TickSheet />
                </span>
                <span className="sm-type-drum">
                    Task {taskComplete ? 'complete' : 'to complete:'}
                </span>
            </h3>

            {taskComplete ? (
                <p className="sm-type-lead mb-2">
                    Development option list submitted!
                </p>
            ) : (
                <>
                    <p className="sm-type-lead mb-2">
                        Choose your 5 options to take forward to the next stage.{' '}
                        <b>
                            Ensure you are fully informed on the development
                            options via the link above before deciding this!
                        </b>
                    </p>

                    <div className="form-holder-border">
                        <ChooseOptionsCheckboxes
                            devOptions={pageData.development_option}
                            selectedOptions={selectedOptions}
                            toggleValue={toggleValue}
                            teamChoiceName={teamChoiceName}
                            setTeamChoiceName={setTeamChoiceName}
                        />

                        <button
                            className="btn-solid-lg mt-4"
                            disabled={
                                !allowedNumberSelected ||
                                (selectedOptions.includes(10) &&
                                    !teamChoiceName)
                            }
                            onClick={() => {
                                const objects = selectedOptions.map((id) => {
                                    if (id === 10) {
                                        return {
                                            team_id: teamId,
                                            development_option_id: id,
                                            team_choice_name: teamChoiceName,
                                        }
                                    }

                                    return {
                                        team_id: teamId,
                                        development_option_id: id,
                                    }
                                })

                                chooseDevOptions({
                                    variables: {
                                        objects,
                                    },
                                })
                            }}
                        >
                            Submit options
                        </button>

                        {/* TODO: replace with proper 'submitted' notification component...if needed? */}
                        {/* {chooseDevOptionsResponse.data && (
                            <p className="sm-type-amp">Submitted!</p>
                        )} */}
                    </div>
                </>
            )}
        </div>
    )
}

const Stage3ChooseOptionsPage = () => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Stage 3 - Lay The Foundations - Choose Longlist</title>
        </Helmet>

        <main className="the-quest">
            <Header headerText="Stage 3" />

            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="breadcrumb-list-container">
                            <span className="crumb">
                                <Link to="/student/team-hub/">Team Hub</Link>
                                <span className="crumb-spacer">›</span>
                            </span>
                            <span className="leaf crumb-caps">
                                <Link to="/student/stage-3">Stage 3</Link>
                                <span className="crumb-spacer">›</span>
                            </span>
                            <span className="leaf crumb-caps">
                                Choose your longlist
                            </span>
                        </div>
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            Choose Your Longlist
                        </h2>
                        <p className="sm-type-lead mb-3">
                            You will need to work together to discuss the
                            available development options and decide on five
                            which you think offer the best chance of providing
                            benefits to the community - whether these be
                            financial, social or otherwise.
                        </p>
                        <p className="sm-type-lead mb-3">
                            All information required about each of the options
                            is provided and can be accessed here:
                        </p>
                        {/* <p className="sm-type-bigamp mb-3">
                                <Link to="/information/development-options">
                                    View the development options
                                </Link>
                            </p> */}
                        <div className="form-holder-border">
                            <ul>
                                <li className="sm-type-guitar">
                                    <Link to="/information/development-options">
                                        View the development options
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Stage3Task />
                    </div>
                    <div className="col-lg-3">
                        <p className="sm-type-guitar mb-2">
                            <span className="side-icon side-icon-orange">
                                <HelpIcon />
                            </span>
                            Helpful information
                        </p>
                        <div className="side-grey">
                            <p className="sm-type-amp">
                                Read all about Glenclas and find out what you
                                need to move on to the next quest.
                            </p>
                            <p className="sm-type-amp">
                                Make notes of the amenities and the
                                opportunities.
                            </p>
                            <p className="sm-type-amp">
                                Look at Funding Options on each Option.
                            </p>
                        </div>

                        <p className="sm-type-guitar mb-2">
                            <span className="side-icon side-icon-green">
                                <TickSheet />
                            </span>
                            Your checklist
                        </p>
                        <div className="side-grey">
                            <div className="checklist">
                                <div className="tick"></div>
                                <p className="sm-type-lead">
                                    Check the map and read through the detailed
                                    information on each option.
                                </p>
                            </div>
                        </div>
                        <div className="side-grey">
                            <div className="checklist">
                                <div className="tick"></div>
                                <p className="sm-type-lead">
                                    Based on what you've read, choose 5 of the
                                    options to investigate further.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/student/stage-3">Back to Stage 3</Link>
            </section>

            <Footer />
        </main>
    </>
)

export default Stage3ChooseOptionsPage
