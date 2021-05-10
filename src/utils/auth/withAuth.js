import React, { Component } from 'react'

// import { aws, compose, getDisplayName } from '../lib'
import CognitoAuth from './cognitoAuth'

/* The HOC */
export const withAuth = (WrappedComponent) => {
    const Auth = (props) => {
        if (!props.navigate || !props.location) {
            return new Error('withAuth is missing required route props')
        }

        const authProps = CognitoAuth(props)

        return <WrappedComponent {...authProps} {...props} />
    }

    // Auth.displayName = getDisplayName(WrappedComponent, 'withAuth')
    return Auth
}
