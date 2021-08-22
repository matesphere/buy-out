import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, ApolloError } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import { CheckList } from '../../../../components/student/Checklist'
import { Helpful } from '../../../../components/student/Helpful'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'

import { SET_TEAM_POSITIONS_AND_LOGO } from '../../../../gql/mutations'
import {
    SetTeamPositions,
    SetTeamPositionsVariables,
} from '../../../../gql/types/SetTeamPositions'
import {
    Stage2TaskQuery,
    Stage2TaskQueryVariables,
} from '../../../../gql/types/Stage2TaskQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

import {
    stage2CheckListEng,
    stage2HelpfulEng,
    stage2DataTitleEng,
    stage2DataSubTitleEng,
    stage2DataTextEng,
} from './_stage2.data'

const STAGE_2_TASK_QUERY = gql`
    query Stage2TaskQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            logo
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
            stage_progresses(where: { stage_id: { _eq: 2 } }) {
                id
                status
            }
        }
    }
`

const Stage2TaskPage = () => {
    // const [showFilters, setShowFilters] = useState(false)
    const [logo, setLogo] = useState('')
    const [positions, setPositions] = useState([])
    const [submitComplete, setSubmitComplete] = useState(false)

    // const [submitLogo, submitLogoResponse] = useAuthMutation(SET_TEAM_LOGO)
    const [submitPositions, submitPositionResponse] = useAuthMutation<
        SetTeamPositions,
        SetTeamPositionsVariables
    >(
        SET_TEAM_POSITIONS_AND_LOGO,
        {
            query: STAGE_2_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        },
        () => setSubmitComplete(true)
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage2TaskQuery, Stage2TaskQueryVariables>(
        STAGE_2_TASK_QUERY,
        {},
        'teamId'
    )

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

    const { id: teamId } = pageData.team_by_pk
    const { id: stageProgressId } = pageData.team_by_pk?.stage_progresses[0]
    const submitted = !!pageData.team_by_pk?.logo

    const imageData = useStaticQuery(graphql`
        query {
            allImageSharp(
                filter: { fixed: { originalName: { regex: "/team-logo-/" } } }
            ) {
                edges {
                    node {
                        id
                        fixed {
                            originalName
                        }
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - Consult - Task</title>
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
                                        displayName: 'Stage 2',
                                        url: '/student/stage-2/',
                                    },
                                ]}
                                currentDisplayName="Consult Task"
                            />

                            {stage2DataTitleEng.map((check) => (
                                <h2
                                    className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4"
                                    key={check.title}
                                >
                                    {check.title}
                                </h2>
                            ))}

                            {stage2DataSubTitleEng.map((check) => (
                                <p
                                    className="sm-type-guitar mb-4"
                                    key={check.subtitle}
                                >
                                    {check.subtitle}
                                </p>
                            ))}

                            <p className="sm-type-bigamp mb-3">
                                Your steering group will consist of four
                                different roles. Follow the link below to find
                                out what each of these is responsible for.
                            </p>

                            <p className="sm-type-guitar mb-4">
                                <span className="side-icon side-icon-orange shake">
                                    <HelpIcon />
                                </span>
                                <Link to="/information/about-the-roles">
                                    Read about the roles here
                                </Link>
                            </p>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task{' '}
                                        {submitted
                                            ? 'submitted'
                                            : 'to complete:'}
                                    </span>
                                </h3>
                                <div className="form-holder-border">
                                    <div className="form-holder">
                                        <p className="sm-type-lead mb-2">
                                            Part I - Team Logo
                                        </p>
                                        <p className="sm-type-lead mb-4">
                                            Choose a logo for your team:
                                        </p>
                                        <div className="row">
                                            {imageData.allImageSharp.edges.map(
                                                ({
                                                    node: {
                                                        fixed: {
                                                            originalName: id,
                                                        },
                                                        gatsbyImageData,
                                                    },
                                                }) => (
                                                    <div
                                                        className="col-lg-3 mb-2"
                                                        key={id}
                                                    >
                                                        <div className="multiple-choice">
                                                            <input
                                                                className="form-control"
                                                                id={id}
                                                                value={id}
                                                                checked={
                                                                    logo === id
                                                                }
                                                                onChange={
                                                                    submitted
                                                                        ? () => {}
                                                                        : () =>
                                                                              setLogo(
                                                                                  id
                                                                              )
                                                                }
                                                                type="radio"
                                                                name="choose-logo"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                htmlFor={id}
                                                            >
                                                                <GatsbyImage
                                                                    alt="logo"
                                                                    image={
                                                                        gatsbyImageData
                                                                    }
                                                                />
                                                                <span className="visuallyhidden">
                                                                    {id}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-holder-border">
                                    <div className="form-holder">
                                        <p className="sm-type-lead mb-2">
                                            Part II - Team Roles
                                        </p>
                                        <p className="sm-type-lead mb-4">
                                            Choose a role for each team member:
                                        </p>
                                        <p className="sm-type-amp mb-2">
                                            Use the dropdowns below to select
                                            which team member will perform which
                                            role. Try and match the roles to the
                                            strengths of each member!
                                        </p>

                                        <p className="sm-type-amp mb-2">
                                            <b>
                                                Your team must have at least one
                                                of each role!
                                            </b>{' '}
                                            If you have more than 4 members in
                                            your team you may double up on
                                            roles.
                                        </p>
                                        <div id="form-roles">
                                            <ul>
                                                {pageData.team_by_pk.students.map(
                                                    (
                                                        {
                                                            user: {
                                                                username,
                                                                full_name,
                                                            },
                                                            user_id,
                                                            school_id,
                                                        },
                                                        i
                                                    ) => (
                                                        <li
                                                            key={i}
                                                            className="mb-2"
                                                        >
                                                            <label className="form-label sm-type-amp">
                                                                {full_name}
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                value={
                                                                    submitPositionResponse.data
                                                                        ? submitPositionResponse.data.insert_student.returning.find(
                                                                              (
                                                                                  student
                                                                              ) =>
                                                                                  student
                                                                                      .user
                                                                                      .id ===
                                                                                  user_id
                                                                          )
                                                                              ?.position
                                                                        : positions[
                                                                              username
                                                                          ]
                                                                }
                                                                disabled={
                                                                    !!submitPositionResponse.data
                                                                }
                                                                onChange={({
                                                                    target: {
                                                                        value,
                                                                    },
                                                                }) =>
                                                                    setPositions(
                                                                        (
                                                                            positions
                                                                        ) => [
                                                                            ...positions.filter(
                                                                                (
                                                                                    pos
                                                                                ) =>
                                                                                    pos.user_id !==
                                                                                    user_id
                                                                            ),
                                                                            {
                                                                                user_id,
                                                                                school_id,
                                                                                position:
                                                                                    value,
                                                                            },
                                                                        ]
                                                                    )
                                                                }
                                                            >
                                                                <option
                                                                    value=""
                                                                    defaultChecked
                                                                >
                                                                    Select
                                                                </option>
                                                                <option value="chairperson">
                                                                    Chair
                                                                </option>
                                                                <option value="vicechairperson">
                                                                    Vice-chair
                                                                </option>
                                                                <option value="secretary">
                                                                    Secretary
                                                                </option>
                                                                <option value="treasurer">
                                                                    Treasurer
                                                                </option>
                                                            </select>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <SaveSubmitSection
                                            submitWorkObj={{
                                                call: () => {
                                                    submitPositions({
                                                        variables: {
                                                            objects:
                                                                Object.values(
                                                                    positions
                                                                ),
                                                            stageProgressId,
                                                            teamId,
                                                            logo,
                                                        },
                                                    })
                                                },
                                                response:
                                                    submitPositionResponse,
                                                submitComplete,
                                                setSubmitComplete,
                                            }}
                                            disableSubmit={
                                                !logo ||
                                                positions.length !==
                                                    pageData.team_by_pk
                                                        ?.students.length
                                            }
                                            docSubmitted={submitted}
                                        />
                                    </div>
                                </div>
                            </div>
                            {submitted && (
                                <div
                                    className="success-holder"
                                    id="filter-container"
                                >
                                    <h4 className="sm-type-bigdrum sm-type-bigdrum--medium">
                                        <span className="side-icon">
                                            <Tick />
                                        </span>{' '}
                                        Success
                                    </h4>
                                    <p>Your roles have been submitted.</p>
                                </div>
                            )}
                            <Link to="/student/team-hub">Back to Team Hub</Link>
                        </div>
                        <div className="col-lg-3">
                            <Helpful items={stage2HelpfulEng} />
                            <CheckList items={stage2CheckListEng} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage2TaskPage
