import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { gql } from '@apollo/client'
import { withAuthenticator } from '@aws-amplify/ui-react'

import { useAuthQuery } from '../utils/auth-utils'
import { UserStateContext } from '../utils/user-state'

import {
    LoggedInQuery,
    LoggedInQueryVariables,
} from '../gql/types/LoggedInQuery'

const LOGGED_IN_QUERY = gql`
    query LoggedInQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
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
    >(LOGGED_IN_QUERY, null, 'userId')

    if (loading) return <div>...</div>
    if (error) return <div>OK, so that didn't quite work.</div>

    // TODO: can use 'welcome back' once we have 'last_seen_at'
    return (
        <>
            <p>Hello, {data.user_by_pk.first_name}!</p>
            <Link to={role === 'tutor' ? '/tutor/hub' : '/student/team-hub'}>
                Let's get started shall we?
            </Link>
        </>
    )
}

export default withAuthenticator(ChooseRoute)
