import React, { createContext, useState, useEffect } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

export const UserStateContext = createContext({
    isSignedIn: false,
    userInfo: {},
    // user: {},
})

export const UserStateProvider = ({ children }) => {
    const [authState, setAuthState] = useState({})
    // const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState)
            // setUser(authData)
            setUserInfo(
                nextAuthState === AuthState.SignedIn
                    ? {
                          username: authData.username,
                          role: authData.attributes['custom:role'],
                          userId: authData.attributes.sub,
                          schoolId: authData.attributes['custom:school_id'],
                          teamId: authData.attributes['custom:team_id'],
                          token: authData.signInUserSession.idToken.jwtToken,
                      }
                    : {}
            )
        })
    }, [])

    const isSignedIn = authState === AuthState.SignedIn && !!userInfo

    // TODO: remove user object from here, useful for now as shows all methods etc
    return (
        <UserStateContext.Provider value={{ isSignedIn, userInfo }}>
            {children}
        </UserStateContext.Provider>
    )
}
