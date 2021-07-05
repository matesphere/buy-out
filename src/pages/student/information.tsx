import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, ApolloError } from '@apollo/client'

import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'

import {
    InformationPageQuery,
    InformationPageQueryVariables,
} from '../../gql/types/InformationPageQuery'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

const INFORMATION_PAGE_QUERY = gql`
    query InformationPageQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            student {
                id
                position
                team {
                    id
                    name
                    stage_progresses(order_by: { stage_id: asc }) {
                        stage_id
                        status
                    }
                }
            }
        }
    }
`

const InformationPage: FC = () => {
    const { loading, error, data } = useAuthQuery<
        InformationPageQuery,
        InformationPageQueryVariables
    >(INFORMATION_PAGE_QUERY, { fetchPolicy: 'network-only' }, 'userId')

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

    const latestStageID =
        (data &&
            Math.max(
                ...(data.user_by_pk?.student?.team?.stage_progresses.map(
                    (el) => el.stage_id
                ) || [1])
            )) ||
        1

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - Community</title>
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
                                <span className="leaf crumb-caps">
                                    Information
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Information Hub
                            </h2>

                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                All the information is listed below to help you
                                on your quest.
                            </p>
                            <h3 className="sm-type-drum">General links</h3>

                            <p className="sm-type-bigamp mb-1">
                                Some links to help you find out more about
                                communities, buy outs and the wider area the
                                Quest is based in
                            </p>
                            <ul className="mt-1">
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Civil parish
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Loch_Alsh"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Lochalsh
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Highland_council_area"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Highland
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Inverness-shire"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Inverness-shire
                                    </a>
                                </li>
                            </ul>

                            {latestStageID >= 2 && (
                                <>
                                    <h3 className="sm-type-drum mt-4">
                                        Read about the Glenclas area
                                    </h3>

                                    <p className="sm-type-bigamp mb-3">
                                        Here you will find a description of
                                        Glenclas village and its community.
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
                                        Consult with the people about
                                        development options that could help the
                                        community.
                                    </p>
                                    <p className="sm-type-bigamp mb-3">
                                        <Link to="/information/community">
                                            See what the experts and the
                                            community have to say
                                        </Link>
                                    </p>

                                    <h3 className="sm-type-drum mt-4">
                                        Steering group roles
                                    </h3>
                                    <p className="sm-type-bigamp mb-3">
                                        Find out what each role is responsible
                                        for and elect a steering group.
                                    </p>
                                    <p className="sm-type-bigamp mb-3">
                                        <Link to="/information/about-the-roles">
                                            Read about the roles
                                        </Link>
                                    </p>
                                </>
                            )}

                            {latestStageID >= 3 && (
                                <>
                                    <h3 className="sm-type-drum mt-4">
                                        Development options
                                    </h3>
                                    <p className="sm-type-bigamp mb-3">
                                        Look at the map and see what options are
                                        available to help you choose.
                                    </p>
                                    <p className="sm-type-bigamp mb-3">
                                        <Link to="/information/development-options">
                                            Read about the development options
                                        </Link>
                                    </p>
                                </>
                            )}
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
                                    Use the links to help you on your Quest.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default InformationPage
