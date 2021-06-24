import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import { gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'

import { SET_TEAM_POSITIONS } from '../../../../gql/mutations'
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
            }
        }
    }
`

const Stage2TaskPage = () => {
    const [showFilters, setShowFilters] = useState(false)
    const [positions, setPositions] = useState([])
    const [submitPositions, submitPositionResponse] =
        useAuthMutation<SetTeamPositions, SetTeamPositionsVariables>(
            SET_TEAM_POSITIONS
        )

    const { loading, error, data } = useAuthQuery<
        Stage2TaskQuery,
        Stage2TaskQueryVariables
    >(STAGE_2_TASK_QUERY, {}, 'teamId')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { id: stageProgressId } = data.team_by_pk.stage_progresses[0]

    const data2 = useStaticQuery(graphql`
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
            logo: 'team-logo-1',
        },
        {
            logo: 'team-logo-2',
        },
        {
            logo: 'team-logo-3',
        },
        {
            logo: 'team-logo-4',
        },
        {
            logo: 'team-logo-5',
        },
        {
            logo: 'team-logo-6',
        },
        {
            logo: 'team-logo-7',
        },
        {
            logo: 'team-logo-8',
        },
        {
            logo: 'team-logo-9',
        },
        {
            logo: 'team-logo-10',
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
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">Team Hub</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="crumb">
                                    <Link to="/student/stage-2">Stage 2</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Consult Task
                                </span>
                            </div>

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
                            {/* <p className="sm-type-bigamp mb-3">
                                <Link to="/information/about-the-roles">
                                    Read about the roles here
                                </Link>
                            </p> */}
                            <div className="form-holder-border">
                                <ul>
                                    <li className="sm-type-guitar">
                                        <Link to="/information/about-the-roles">
                                            Read about the roles here
                                        </Link>
                                    </li>
                                </ul>
                            </div>

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
                                            <h3 className="sm-type-guitar mb-2">
                                                Choose a logo for your team:
                                            </h3>
                                            <div className="row">
                                                {stage2Logo.map((check) => (
                                                    <div
                                                        className="col-lg-3 mb-2"
                                                        key={check.logo}
                                                    >
                                                        <div className="multiple-choice">
                                                            <input
                                                                className="form-control"
                                                                id={check.logo}
                                                                value={
                                                                    check.logo
                                                                }
                                                                type="radio"
                                                                name="choose-logo"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                htmlFor={
                                                                    check.logo
                                                                }
                                                            >
                                                                <GatsbyImage
                                                                    alt="logo"
                                                                    image={
                                                                        data2
                                                                            .image1
                                                                            .childImageSharp
                                                                            .gatsbyImageData
                                                                    }
                                                                />
                                                                <span className="visuallyhidden">
                                                                    {check.logo}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <h4 className="sm-type-guitar mb-2">
                                                Choose a role for each team
                                                member:
                                            </h4>
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
                                                    {data.team_by_pk.students.map(
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

                <Footer />
            </main>
        </>
    )
}

export default Stage2TaskPage
