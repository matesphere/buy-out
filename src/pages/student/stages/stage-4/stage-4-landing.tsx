import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'
import { stage1DataSubTitleEng } from '../stage-1/_stage1.data'

const Stage4LandingPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "progress-plans.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "blue-1.jpg" }) {
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
            variables: { stage_id: 4, includeDevOptions: true },
        },
        'teamId'
    )

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { title: stageTitle } = pageData.stage_by_pk
    const { team_development_options: devOptions } = pageData.team_by_pk
    const shortlist = devOptions.filter((opt) => opt.shortlist)
    const task1Complete = devOptions.filter((opt) => opt.shortlist).length === 3
    const docFeedback =
        pageData?.team_by_pk?.stage_progresses[0].documents[0]?.feedback

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - {stageTitle}</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 4"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
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
                                    Having carried out the SWOT Analysis on your
                                    long-list of 5 Development Options, you must
                                    now narrow down your choices to a short-list
                                    of 3 and carry out a Feasibility Study on
                                    these.
                                </p>
                            </div>

                            <p className="sm-type-lead mb-3">
                                In this study, you must consider and then
                                explain what it would mean to the ‘community’ to
                                own this piece of land. Then, for each of the
                                short-listed options, you must consider and
                                explain how they will benefit the community, the
                                reasons that they are likely to succeed and any
                                possible risks that might cause them to fail.
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
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
                                        Task to complete:
                                    </span>
                                </h3>
                                <p className="sm-type-lead mb-2">
                                    Narrow down your list of five development
                                    options to a shortlist of 3.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To complete this task, you should refer back
                                    to:
                                </p>
                                <ul className="sm-type-bigamp">
                                    <li className="mb-2">
                                        <Link to="/information/community">
                                            The statements made by members of
                                            the community and experts in Stage 2
                                        </Link>
                                        ;
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/information/development-options">
                                            The detailed notes about each
                                            development option
                                        </Link>
                                        ;
                                    </li>
                                    <li className="mb-2">
                                        Your SWOT analyses:
                                        <ol>
                                            {devOptions.map(
                                                (
                                                    {
                                                        id,
                                                        development_option: {
                                                            display_name,
                                                        },
                                                    },
                                                    i
                                                ) => (
                                                    <li key={i}>
                                                        <Link
                                                            to={`/student/stage-3/swot?num=${i}&id=${id}`}
                                                        >
                                                            {display_name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ol>
                                    </li>
                                </ul>

                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">
                                        Part I - Shortlist
                                    </p>
                                    <p className="sm-type-lead mb-2">
                                        Use the links above to help you decide
                                        which of your development options you
                                        will progress to your shortlist.
                                    </p>

                                    {task1Complete ? (
                                        <ul>
                                            <li className="sm-type-guitar">
                                                Shortlist submitted{' '}
                                                <span className="shortlist-tick">
                                                    <Tick />
                                                </span>
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul>
                                            <li className="sm-type-guitar">
                                                <Link to="/student/stage-4/options">
                                                    Choose your shortlist
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <div
                                    className={`form-holder-border ${
                                        shortlist.length !== 3 &&
                                        'not-available-holder'
                                    }`}
                                >
                                    <p className="sm-type-lead mb-2">
                                        Part II - Feasibility Studies
                                    </p>
                                    <p className="sm-type-lead mb-2">
                                        Complete a Feasibility Study for each of
                                        your 3 shortlisted development options.
                                    </p>
                                    <p className="sm-type-lead mb-2">
                                        These Feasibility Studies will form the
                                        basis of the presentation that you will
                                        make to the ‘community’ when you seek
                                        their approval to purchase the land and
                                        adopt your Development Options.
                                    </p>

                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-4/feasibility">
                                                Complete your Feasibility
                                                Studies
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {docFeedback && (
                                    <div className="side-grey">
                                        <h3 className="task ticker mb-2">
                                            <span className="ticker-sheet ticker-feedback">
                                                <HelpIcon />
                                            </span>
                                            <span className="sm-type-drum green-highlight">
                                                Tutor feedback:
                                            </span>
                                        </h3>
                                        <div className="form-holder-border">
                                            <p className="sm-type-lead">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: docFeedback.feedback,
                                                    }}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Use the SWOT templates to help you decide.
                                </p>

                                <p className="sm-type-amp">
                                    Your team is required to carry out a
                                    Feasibility Study on a short list of 3
                                    Options
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
                                        Read back through the information on
                                        each development option.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Select your 3 options to take forward.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Complete a Feasibility Study for each
                                        option.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage4LandingPage
