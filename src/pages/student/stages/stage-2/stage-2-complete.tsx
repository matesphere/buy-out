import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
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
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
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

                            <p className="sm-type-lead mb-3">
                                Welcome to Stage 2 of the Community Buyout
                                Quest. In this stage you will form the board of
                                a community group (known as the 'steering
                                group') who will lead the purchase of some land
                                that has come up for sale.
                            </p>

                            <p className="sm-type-lead mb-3">
                                The land that has come up for sale is next to
                                the village of GLENCLAS.
                            </p>
                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <p className="sm-type-lead mb-3">
                                You will each adopt a specific role within the
                                Board, but throughout, you will need to work as
                                a team. Each decision that you make must take
                                into account the views of everyone in the team.
                                That does not mean that you will agree on
                                everything, in fact it is inevitable that you
                                will disagree at times. However, you must work
                                out how you will reach decisions when there is
                                disagreement amongst the team.
                            </p>
                            <p className="sm-type-lead mb-3">
                                You will now need to design a logo that will
                                appear on any documentation that you produce.
                            </p>

                            <h3 className="sm-type-drum mb-3">
                                Read about the Glenclas area.
                            </h3>

                            <p className="sm-type-bigamp mb-3">
                                Here you will find a description of Glenclas
                                village and its community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/student/stage-2/about-glenclas-area">
                                    Read about the area.
                                </Link>
                            </p>
                            <h3 className="sm-type-drum mt-4">
                                See what the community and experts have to say.
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Consult with the people about development
                                options that could help the community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/student/stage-2/community">
                                    See what the experts and the community have
                                    to say.
                                </Link>
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
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li className="mb-2">
                                        <Link to="/student/stage-2/about-glenclas-area">
                                            Read about the area.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/student/stage-2/community">
                                            See what the community and experts
                                            have to say.
                                        </Link>
                                    </li>
                                </ul>
                                <p className="sm-type-amp">
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage2CompletePage
