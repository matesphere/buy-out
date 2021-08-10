import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gql } from '@apollo/client/core'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { Stage8Query, Stage8QueryVariables } from '../../gql/types/TeamHubQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import '../../../../scss/print.scss'

const STAGE_8_QUERY = gql`
    query Stage8Query($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            student {
                id
                team {
                    name
                    students {
                        user {
                            full_name
                        }
                    }
                }
            }
        }
    }
`

const TeamSection = ({ students, teamName }) => (
    <>
        <h3 className="cert-type-one">{teamName}</h3>
        <p className="cert-type-one">
            {students.map((student, i) => (
                <span className="cert-name" key={i}>
                    {student.user.full_name}
                </span>
            ))}
        </p>
    </>
)

const Stage8Page = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "certificate.jpg" }) {
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
    } = useAuthQuery<Stage8Query, Stage8QueryVariables>(
        STAGE_8_QUERY,
        {},
        'userId'
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

    const {
        student: {
            team: { name: teamName, students },
        },
    } = pageData.user_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 8 - Celebrate & Reflect</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row none-print">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Celebrate & Reflect
                            </h2>

                            <p className="sm-type-lead mb-3">
                                Congratulations! You have successfully completed
                                the Community Land Quest!
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
                                <p className="sm-type-amp">Well done!</p>
                                <p className="sm-type-amp">
                                    Your final task is to answer a few short
                                    questions about your experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="mt-4 mb-2 image-holder team-certificate">
                                <div className="team-certificate--inner">
                                    <TeamSection
                                        students={students}
                                        teamName={teamName}
                                    />
                                </div>
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="side-grey none-print">
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
                                        Community Land Quest - A Reflection
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Follow{' '}
                                            <Link to="/student/stage-8/task">
                                                this link
                                            </Link>{' '}
                                            to reflect on the process and
                                            complete the Quest.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage8Page
