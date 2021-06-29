import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, ApolloError } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'

import { SET_TEAM_LOGO, SET_TEAM_POSITIONS } from '../../../../gql/mutations'
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
    query Stage2TaskQuery($teamId: uuid!) {
        team_by_pk(id: $teamId) {
            id
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
    const [showFilters, setShowFilters] = useState(false)
    const [logo, setLogo] = useState('')
    const [positions, setPositions] = useState([])

    const [submitLogo, submitLogoResponse] = useAuthMutation(SET_TEAM_LOGO)
    const [submitPositions, submitPositionResponse] =
        useAuthMutation<SetTeamPositions, SetTeamPositionsVariables>(
            SET_TEAM_POSITIONS
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

    const { id: stageProgressId } = pageData.team_by_pk?.stage_progresses[0]

    const imageData = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "team-logo-1.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "team-logo-2.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image3: file(relativePath: { eq: "team-logo-3.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image4: file(relativePath: { eq: "team-logo-4.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image5: file(relativePath: { eq: "team-logo-5.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image6: file(relativePath: { eq: "team-logo-6.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image7: file(relativePath: { eq: "team-logo-7.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image8: file(relativePath: { eq: "team-logo-8.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image9: file(relativePath: { eq: "team-logo-9.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image10: file(relativePath: { eq: "team-logo-10.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const stage2Logo = [
        {
            id: 'team-logo-1',
            image: imageData.image1.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-2',
            image: imageData.image2.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-3',
            image: imageData.image3.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-4',
            image: imageData.image4.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-5',
            image: imageData.image5.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-6',
            image: imageData.image6.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-7',
            image: imageData.image7.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-8',
            image: imageData.image8.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-9',
            image: imageData.image9.childImageSharp.gatsbyImageData,
        },
        {
            id: 'team-logo-10',
            image: imageData.image10.childImageSharp.gatsbyImageData,
        },
    ]

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

                            <div
                                className={`filters-container${
                                    showFilters ? ' show' : ''
                                }`}
                            >
                                <div className="side-grey">
                                    <h3 className="task ticker mb-2">
                                        <span className="ticker-sheet">
                                            <TickSheet />
                                        </span>
                                        <span className="sm-type-drum">
                                            Task to complete:
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
                                                {stage2Logo.map(
                                                    ({ id, image }) => (
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
                                                                        logo ===
                                                                        id
                                                                    }
                                                                    onChange={() =>
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
                                                                            image
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
                                            <SaveSubmitSection
                                                submitWorkObj={{
                                                    call: () => {
                                                        submitLogo({
                                                            variables: {
                                                                teamId: pageData
                                                                    .team_by_pk
                                                                    ?.id,
                                                                logo,
                                                            },
                                                        })
                                                    },
                                                    response:
                                                        submitLogoResponse,
                                                }}
                                                disableSubmit={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-holder-border">
                                        <div className="form-holder">
                                            <p className="sm-type-lead mb-2">
                                                Part II - Team Roles
                                            </p>
                                            <p className="sm-type-lead mb-4">
                                                Choose a role for each team
                                                member:
                                            </p>
                                            <p className="sm-type-amp mb-2">
                                                Use the dropdowns below to
                                                select which team member will
                                                perform which role. Try and
                                                match the roles to the strengths
                                                of each member!
                                            </p>

                                            <p className="sm-type-amp mb-2">
                                                <b>
                                                    Your team must have at least
                                                    one of each role!
                                                </b>{' '}
                                                If you have more than 4 members
                                                in your team you may double up
                                                on roles.
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
                                                            },
                                                        })
                                                    },
                                                    response:
                                                        submitPositionResponse,
                                                }}
                                                disableSubmit={false}
                                            />
                                        </div>

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
                                            <p>
                                                Your roles have been submitted.
                                            </p>
                                            <p>
                                                <Link to="/student/your-notes-inprogress">
                                                    You will see your feedback
                                                    here
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
