import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './src/apollo/client'

import { UserStateProvider } from './src/utils/user-state'

import Amplify from 'aws-amplify'

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Region
        region: process.env.GATSBY_AWS_REGION,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: process.env.GATSBY_AWS_USER_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: process.env.GATSBY_AWS_APP_CLIENT_ID,

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // TODO if we can figure out httpOnly cookies we'll get WS auth for free
        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        // cookieStorage: {
        //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //     domain: 'localhost',
        //     // OPTIONAL - Cookie path
        //     path: '/',
        //     // OPTIONAL - Cookie expiration in days
        //     expires: 365,
        //     // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        //     sameSite: 'strict',
        //     // OPTIONAL - Cookie secure flag
        //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        //     secure: false, // TODO change to true on deploy
        // },

        // OPTIONAL - customized storage object
        // storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        // clientMetadata: { myCustomKey: 'myCustomValue' },

        // OPTIONAL - Hosted UI configuration
        // oauth: {
        //     domain: 'https://clq.auth.eu-west-1.amazoncognito.com',
        //     scope: ['email', 'openid'],
        //     redirectSignIn: 'http://localhost:8000/tutor/hub',
        //     redirectSignOut: 'http://localhost:8000/',
        //     responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
        // },
    },
})

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
        <UserStateProvider>{element}</UserStateProvider>
    </ApolloProvider>
)
