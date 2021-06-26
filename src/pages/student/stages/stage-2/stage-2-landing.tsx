import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage2LandingPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "glenclas.jpg" }) {
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
    } = useAuthQuery<StageQuery, StageQueryVariables>(
        STAGE_QUERY,
        {
            variables: { stage_id: 2, includeDevOptions: false },
        },
        'teamId'
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - {stageTitle}</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">Stage 2</span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            <p className="sm-type-lead mb-3">
                                In this stage you will consult with a community
                                in order to better understand how it could
                                benefit from a land buy-out. If you conclude
                                that there is community appetite for such a
                                project, you will form the board of a community
                                group (known as the 'steering group') who will
                                lead the purchase of some land that has come up
                                for sale.
                            </p>

                            <p className="sm-type-lead mb-3">
                                A plot of land has come up for sale next to the
                                village of GLENCLAS.
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
                                In order to make the correct decisions for this
                                community, you'll need to make sure you are
                                aware of what problems it faces and the opinions
                                of the people living there.
                            </p>
                            <p className="sm-type-lead mb-3">
                                To do this, follow the links below. The first
                                will give you some background information on
                                Glenclas, while the second provides some
                                responses from local community members and
                                experts - each of whom has an idea for a scheme
                                which you could investigate as a potential use
                                of the land.
                            </p>

                            <h3 className="sm-type-drum mb-3">
                                Read about the Glenclas area
                            </h3>

                            <p className="sm-type-bigamp mb-3">
                                Here you will find a description of Glenclas
                                village and its community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/about-glenclas-area">
                                    Read about the area
                                </Link>
                            </p>
                            <h3 className="sm-type-drum mt-4">
                                Listen to the experts and the community
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Consult with the locals about development
                                options that could help the community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/community">
                                    See what the experts and the community have
                                    to say
                                </Link>
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
                                <p className="sm-type-bigamp mb-3">
                                    Having determined that the community of
                                    Glenclas will support you in this endeavour,
                                    it is now time to allocate the members of
                                    your team to the roles within the Board.
                                    Each role will have specific tasks to
                                    perform, but every decision that you make
                                    must be taken by the whole group.
                                </p>

                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">
                                            Choose your{' '}
                                            <Link to="/student/stage-2/task">
                                                Team Logo and Board
                                            </Link>
                                        </li>
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
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage2LandingPage
