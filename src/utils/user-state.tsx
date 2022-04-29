import React, { createContext, useState, useEffect } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { navigate } from '@reach/router'

const signedOutUserInfo = {
    username: '',
    role: '',
    userId: '',
    schoolId: '',
    teamId: '',
    token: '',
}

interface UserStateContextType {
    isSignedIn: boolean
    userInfo: {
        username: string
        userId: string
        teamId: string
        schoolId: string
        role: string
        token: string
    }
    latestStageUnlocked: number
    setLatestStageUnlocked: (value: number) => void
}

export const UserStateContext = createContext<UserStateContextType>({
    isSignedIn: false,
    userInfo: signedOutUserInfo,
    latestStageUnlocked: 0,
    setLatestStageUnlocked: () => {},
})
UserStateContext.displayName = 'UserState'

interface AuthDataType {
    username: string
    attributes: {
        sub: string
        'custom:role': string
        'custom:school_id': string
        'custom:team_id': string
    }
    signInUserSession: {
        idToken: {
            jwtToken: string
        }
    }
}

export const UserStateProvider = ({ children }) => {
    const [authState, setAuthState] = useState({})
    // const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState(signedOutUserInfo)
    const [latestStageUnlocked, setLatestStageUnlocked] = useState(0)

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, data) => {
            const authData = data as AuthDataType
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
                    : signedOutUserInfo
            )

            if (nextAuthState !== AuthState.SignedIn) {
                navigate('/login')
            }
        })
    }, [])

    const isSignedIn = authState === AuthState.SignedIn && !!userInfo

    return (
        <UserStateContext.Provider
            value={{
                isSignedIn,
                userInfo,
                latestStageUnlocked,
                setLatestStageUnlocked,
            }}
        >
            {children}
        </UserStateContext.Provider>
    )
}
