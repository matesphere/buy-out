import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { UserStateContext } from '../../../../utils/user-state'
import { useCheckboxState } from '../../../../utils/input-utils'
import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { CHOOSE_SHORTLIST_OPTIONS } from '../../../../gql/mutations'

import {
    Stage4TaskQuery,
    Stage4TaskQueryVariables,
} from '../../../../gql/types/Stage4TaskQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const STAGE_4_TASK_QUERY = gql`
    query Stage4TaskQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            team_development_options(
                order_by: { development_option: { id: asc } }
            ) {
                id
                team_choice_name
                shortlist
                development_option {
                    id
                    display_name
                    option
                }
            }
        }
    }
`

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
}) => (
    <>
        {devOptions
            .slice()
            .map(
                (
                    {
                        id,
                        team_choice_name,
                        development_option: { display_name },
                    },
                    i
                ) => (
                    <div key={i} className="multiple-choice">
                        <input
                            className="form-control"
                            id={id}
                            type="checkbox"
                            checked={selectedOptions.includes(id)}
                            onChange={() => toggleValue(id)}
                        />
                        <label className="form-label" htmlFor={id}>
                            {team_choice_name || display_name}
                        </label>
                    </div>
                )
            )}
    </>
)

// TODO: move this out to components
const Stage4Task = () => {
    const {
        userInfo: { teamId },
    } = useContext(UserStateContext)

    const [selectedOptions, toggleValue, allowedNumberSelected] =
        useCheckboxState<number>([], 3)

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_SHORTLIST_OPTIONS,
        {
            query: STAGE_4_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        }
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage4TaskQuery, Stage4TaskQueryVariables>(
        STAGE_4_TASK_QUERY,
        {},
        'teamId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { team_development_options: devOptions } = pageData.team_by_pk
    const taskComplete = devOptions.filter((opt) => opt.shortlist).length === 3

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
                    Development option shortlist submitted!
                </p>
            ) : (
                <>
                    <p className="sm-type-lead mb-2">
                        Choose your 3 options to take forward to the next stage.{' '}
                        <b>
                            Ensure you have considered all the available
                            information before deciding this!
                        </b>
                    </p>

                    <div className="form-holder-border">
                        <ChooseOptionsCheckboxes
                            devOptions={devOptions}
                            selectedOptions={selectedOptions}
                            toggleValue={toggleValue}
                        />

                        <button
                            className="btn-solid-lg mt-4"
                            disabled={!allowedNumberSelected}
                            onClick={() => {
                                chooseDevOptions({
                                    variables: {
                                        optionsToUpdate: selectedOptions,
                                    },
                                })
                            }}
                        >
                            Submit options
                        </button>

                        {/* {chooseDevOptionsResponse.data && (
                            <p className="sm-type-amp">Submitted!</p>
                        )} */}
                    </div>
                </>
            )}

            <p className="sm-type-lead mb-2">
                Once you have submitted your shortlist, go back and complete
                Part II
            </p>
        </div>
    )
}

const Stage4ChooseOptionsPage = () => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Stage 4 - Progress Your Plans - Choose Shortlist</title>
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
                                    displayName: 'Stage 4',
                                    url: '/student/stage-4/',
                                },
                            ]}
                            currentDisplayName="Choose Your Shortlist"
                        />
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            Choose Your Shortlist
                        </h2>
                        <p className="sm-type-lead mb-3">
                            Use the checkboxes below to select your shortlist of
                            3 from your longlist options.
                        </p>

                        <Stage4Task />
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
                                Think about which of your 5 longlist options are
                                the most likely to be beneficial to the
                                community.
                            </p>
                            <p className="sm-type-amp">
                                Your previously completed SWOTs should be very
                                useful for this.
                            </p>
                            <p className="sm-type-amp">
                                It is also worth considering funding when
                                choosing your shortlist.
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
                                    Read through the information provided on the
                                    previous page and your SWOT analyses
                                </p>
                            </div>
                        </div>
                        <div className="side-grey">
                            <div className="checklist">
                                <div className="tick"></div>
                                <p className="sm-type-lead">
                                    Debate amongst your team and select your
                                    shortlist of 3 options
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/student/stage-4">Back to Stage 4</Link>
            </section>
        </main>
    </>
)

export default Stage4ChooseOptionsPage
