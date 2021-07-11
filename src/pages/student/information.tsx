import React, { useContext, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { gql, ApolloError } from '@apollo/client'

// import { Loading } from '../../components/common/Loading'
// import { Error } from '../../components/common/Error'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'

import { UserStateContext } from '../../utils/user-state'
// import { useAuthQuery } from '../../utils/auth-utils'

// import {
//     InformationPageQuery,
//     InformationPageQueryVariables,
// } from '../../gql/types/InformationPageQuery'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

// const INFORMATION_PAGE_QUERY = gql`
//     query InformationPageQuery($user_id: uuid!) {
//         user_by_pk(id: $user_id) {
//             id
//             full_name
//             username
//             student {
//                 id
//                 position
//                 team {
//                     id
//                     name
//                     stage_progresses(order_by: { stage_id: asc }) {
//                         stage_id
//                         status
//                     }
//                 }
//             }
//         }
//     }
// `

const InformationPage: FC = () => {
    const { latestStageUnlocked } = useContext(UserStateContext)

    // const { loading, error, data } = useAuthQuery<
    //     InformationPageQuery,
    //     InformationPageQueryVariables
    // >(INFORMATION_PAGE_QUERY, { fetchPolicy: 'network-only' }, 'userId')

    // if (loading) return <Loading />
    // if (error || !data)
    //     return (
    //         <Error
    //             error={
    //                 error ||
    //                 new ApolloError({ errorMessage: 'No data returned!' })
    //             }
    //         />
    //     )

    // const latestStageID =
    //     (data &&
    //         Math.max(
    //             ...(data.user_by_pk?.student?.team?.stage_progresses.map(
    //                 (el) => el.stage_id
    //             ) || [1])
    //         )) ||
    //     1

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information</title>
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
                                currentDisplayName="Information Hub"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Information Hub
                            </h2>

                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                All the information is listed below to help you
                                on your quest.
                            </p>
                            <h3 className="sm-type-drum">
                                Background Information
                            </h3>

                            <p className="sm-type-bigamp mb-3">
                                Look here to help you find out more about
                                communities, buy outs and the wider area the
                                Quest is based in.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/background-info">
                                    Find out more
                                </Link>
                            </p>

                            {latestStageUnlocked >= 2 && (
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
                                        Team Roles
                                    </h3>
                                    <p className="sm-type-bigamp mb-3">
                                        Find out the responsibilities of each
                                        team role within your steering group.
                                    </p>
                                    <p className="sm-type-bigamp mb-3">
                                        <Link to="/information/about-the-roles">
                                            Read about the roles
                                        </Link>
                                    </p>
                                </>
                            )}

                            {latestStageUnlocked >= 3 && (
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

                                    <h3 className="sm-type-drum mt-4">
                                        SWOT Analysis
                                    </h3>
                                    <p className="sm-type-bigamp mb-3">
                                        A handy refresher on the purpose of a
                                        SWOT and how to approach it
                                    </p>
                                    <p className="sm-type-bigamp mb-3">
                                        <Link to="/information/about-swot">
                                            SWOT information
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
                                    This is a collection of all the information
                                    you'll need to help you during the Quest.
                                </p>
                                <p className="sm-type-amp">
                                    More items will become available as you
                                    progress!
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
