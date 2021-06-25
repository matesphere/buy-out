import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { TEAM_QUERY } from '../../../../gql/queries'
import { TeamQuery, TeamQueryVariables } from '../../../../gql/types/TeamQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const positions = [
    { value: 'chairperson', displayName: 'Chair' },
    { value: 'vicechairperson', displayName: 'Vice-chair' },
    { value: 'treasurer', displayName: 'Treasurer' },
    { value: 'secretary', displayName: 'Secretary' },
]

const Stage2CompletePage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "glenclas.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "congratulations.jpg" }) {
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
    } = useAuthQuery<TeamQuery, TeamQueryVariables>(TEAM_QUERY, {}, 'teamId')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { students } = pageData.team_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - Consult - Complete</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Stage 2 Complete
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Consult
                            </h2>
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image2.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task completed:
                                    </span>
                                </h3>

                                <div className="form-holder-border">
                                    {/* <h4 className="sm-type-guitar mb-2 green-highlight">
                                        Tutor feedback.
                                    </h4>
                                    <p className="sm-type-lead mb-3 italic">
                                        This looks like a great choice, dont
                                        forget to work together to achieve your
                                        goals. You cannot do this without
                                        everyone doing their bit.
                                    </p> */}
                                    <h4 className="sm-type-guitar mb-2">
                                        You have chosen the following for your
                                        board.
                                    </h4>

                                    {positions.map((pos) => (
                                        <p className="sm-type-lead mb-3">
                                            <span className="sm-type-lead--medium">
                                                {pos.displayName}
                                            </span>{' '}
                                            -{' '}
                                            {students
                                                .filter(
                                                    (student) =>
                                                        student.position ===
                                                        pos.value
                                                )
                                                .map(
                                                    (student) =>
                                                        student.user.full_name
                                                )
                                                .join(', ')}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage2CompletePage
