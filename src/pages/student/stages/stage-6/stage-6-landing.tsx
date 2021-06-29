import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useAuthQuery } from '../../../../utils/auth-utils'

import {
    Stage6Query,
    Stage6QueryVariables,
} from '../../../../gql/types/Stage6Query'

import TickSheet from '../../../../assets/tick-sheet.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const STAGE_6_QUERY = gql`
    query Stage6Query($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            team_development_options {
                id
                development_option {
                    display_name
                }
                shortlist
            }
        }
    }
`

const Stage6Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "present-findings.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "blue-2.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage6Query, Stage6QueryVariables>(
        STAGE_6_QUERY,
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

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 6 - Prepare Findings</title>
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
                                ]}
                                currentDisplayName="Stage 6"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Prepare Findings
                            </h2>
                            <div className="blue-holder-border">
                                <div className="small-image">
                                    <GatsbyImage
                                        alt=""
                                        image={
                                            data.image2.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                                <p className="sm-type-lead small-image-holder">
                                    Your team will present your shortlisted
                                    development options, including the reasons
                                    for your choices. To do this you will need
                                    to include your SWOT, feasibility study and
                                    business plan for each option.
                                </p>
                            </div>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-lead mb-3">
                                The aim of the presentation will be to seek the
                                final go-ahead from the community to follow
                                through with the land buy-out, as well as
                                convincing your proposed funders that your
                                projects can be successful. Your presentation
                                will therefore need to be detailed and
                                persuasive.
                            </p>

                            <div className="side-grey">
                                <h4 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h4>
                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">
                                        Part I - Presentation Tips
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Use the{' '}
                                            <Link to="/student/stage-6/presentation-tips">
                                                tips here
                                            </Link>{' '}
                                            to help you with your presentation.
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">
                                        Part II - Your Work
                                    </p>
                                    <ul>
                                        {pageData.team_by_pk?.team_development_options
                                            .filter((opt) => opt.shortlist)
                                            .map(
                                                (
                                                    {
                                                        id,
                                                        development_option: {
                                                            display_name,
                                                        },
                                                    },
                                                    i
                                                ) => (
                                                    <li
                                                        key={i}
                                                        className="sm-type-guitar"
                                                    >
                                                        <Link
                                                            to={`/student/stage-6/completed-work?id=${id}`}
                                                        >
                                                            {display_name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                </div>
                            </div>
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
                                    Prepare your presentation using your
                                    Feasibility Studies and SWOT analyses.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage6Page
