import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { gql } from '@apollo/client'

import LoginHeader from './_header'
import AccountFooter from './_footer'
import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'

import {
    TutorHubQuery,
    TutorHubQueryVariables,
} from '../../gql/types/TutorHubQuery'

import HelpIcon from '../../assets/help-icon.svg'
import '../../scss/index.scss'

const TUTOR_HUB_QUERY = gql`
    query TutorHubQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            full_name
            username
            email
            tutor {
                school {
                    name
                }
            }
        }
    }
`

const TutorHub = () => {
    const { loading, error, data } = useAuthQuery<
        TutorHubQuery,
        TutorHubQueryVariables
    >(TUTOR_HUB_QUERY, null, 'userId')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const {
        user_by_pk: {
            full_name: fullName,
            tutor: {
                school: { name: schoolName },
            },
        },
    } = data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="Tutor Hub" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                {fullName}'s Hub
                            </h2>
                            <p className="sm-type-amp">{schoolName}</p>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                Your Quests
                            </p>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Previous Quests
                                </p>
                                <ul>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.04.2019 - Class 4B 2019
                                        </Link>
                                    </li>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.10.2019 - Class 4A 2019
                                        </Link>
                                    </li>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.05.2020 - Class 4B 2020
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Current Quest
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/tutor/current-quest">
                                        Your current Quest
                                    </Link>{' '}
                                    <span className="sm-type-amp--medium">
                                        Class 4B 2021
                                    </span>{' '}
                                    started on 03.05.2021
                                </p>
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Start New Quest
                                </p>
                                <p className="sm-type-amp">
                                    Start a new{' '}
                                    <Link to="/tutor/add-students">
                                        Quest here
                                    </Link>
                                    .
                                </p>
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
                                    Here you can see your previous and current
                                    Quests. You can also start a new Quest
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorHub
