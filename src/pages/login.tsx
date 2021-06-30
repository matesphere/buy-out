import React, { useContext } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { gql } from '@apollo/client'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Helmet } from 'react-helmet'

import { Loading } from '../components/common/Loading'
import { Error } from '../components/common/Error'

import { useAuthQuery } from '../utils/auth-utils'
import { UserStateContext } from '../utils/user-state'

import Squiggle from '../assets/squiggle.svg'
import PinLogo from '../assets/pin-logo.svg'

import '../scss/index.scss'

import {
    LoggedInQuery,
    LoggedInQueryVariables,
} from '../gql/types/LoggedInQuery'
import { GatsbyImage } from 'gatsby-plugin-image'

const LOGGED_IN_QUERY = gql`
    query LoggedInQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            first_name
        }
    }
`

const ChooseRoute = () => {
    const {
        userInfo: { role },
    } = useContext(UserStateContext)

    const { loading, error, data } = useAuthQuery<
        LoggedInQuery,
        LoggedInQueryVariables
    >(LOGGED_IN_QUERY, {}, 'userId')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const data1 = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "indexpage.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    // TODO: can use 'welcome back' once we have 'last_seen_at'
    // TODO also: redirect to intro or team hub properly, again once we have last_seen_at
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Community Land Quest</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
            </Helmet>
            <section className="container top-section">
                <Squiggle className="squiggle" />
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="main-header">
                            <PinLogo />
                            <span>Community Land Quest</span>
                        </h1>
                    </div>
                    <div className="col-lg-4">
                        <div className="cls-logo">
                            <GatsbyImage
                                alt=""
                                image={
                                    data1.file.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
            <main className="homepage">
                <section className="container" id="main">
                    <div className="indeximage">
                        <GatsbyImage
                            alt=" "
                            image={data1.image2.childImageSharp.gatsbyImageData}
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 index-holder">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 text-align-center">
                                Hello, {data.user_by_pk.first_name}!
                            </h2>
                            <p className="sm-type-drum text-align-center">
                                Let's get started shall we?
                            </p>
                            <p className="text-align-center mb-4">
                                <Link
                                    to={
                                        role === 'tutor'
                                            ? '/tutor/hub'
                                            : '/introduction'
                                    }
                                    className="btn-solid-reg"
                                >
                                    Enter The Quest
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default withAuthenticator(ChooseRoute)
