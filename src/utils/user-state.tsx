import React, { createContext, useState, useEffect } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { navigate, useLocation } from '@reach/router'

enum AuthState {
    SignedIn = 'authenticated',
    SignedOut = 'unauthenticated',
}

interface UserInfo {
    username: string
    userId: string
    teamId: string
    schoolId: string
    role: string
    token: string
}

interface UserStateContextType {
    isSignedIn: boolean
    userInfo: UserInfo
    latestStageUnlocked: number
    setLatestStageUnlocked: (value: number) => void
}

const signedOutUserInfo: UserInfo = {
    username: '',
    role: '',
    userId: '',
    schoolId: '',
    teamId: '',
    token: '',
}

export const UserStateContext = createContext<UserStateContextType>({
    isSignedIn: false,
    userInfo: signedOutUserInfo,
    latestStageUnlocked: 0,
    setLatestStageUnlocked: () => {},
})
UserStateContext.displayName = 'UserState'

const isDefined = <T extends unknown>(val: T | undefined | null): val is T => {
    return val !== undefined && val !== null
}

export const UserStateProvider = ({ children }) => {
    const [authState, setAuthState] = useState({})
    const [userInfo, setUserInfo] = useState<UserInfo>(signedOutUserInfo)
    const [latestStageUnlocked, setLatestStageUnlocked] = useState(0)

    const { user, authStatus } = useAuthenticator((context) => [
        context.user,
        context.authStatus,
    ])

    const { pathname } = useLocation()

    useEffect(() => {
        setAuthState(authStatus)

        //? moving all these isDefined things into a separate function stops type guard from working ¯\_(ツ)_/¯
        if (
            authStatus === AuthState.SignedIn &&
            isDefined(user.username) &&
            isDefined(user.attributes) &&
            isDefined(user.attributes['custom:role']) &&
            isDefined(user.attributes['sub']) &&
            isDefined(user.attributes['custom:school_id']) &&
            isDefined(user.attributes['custom:team_id'])
        ) {
            const newUser: UserInfo = {
                username: user.username,
                role: user.attributes['custom:role'],
                userId: user.attributes.sub,
                schoolId: user.attributes['custom:school_id'],
                teamId: user.attributes['custom:team_id'],
                token: '',
            }

            Auth.currentSession().then((res) => {
                const token = res.getIdToken().getJwtToken()

                const userInfo: UserInfo = {
                    ...newUser,
                    token,
                }

                setUserInfo(userInfo)
            })
        } else {
            setUserInfo(signedOutUserInfo)

            if (pathname !== '/') navigate('/login')
        }
    }, [authStatus])

    const isSignedIn = authState === 'authenticated' && !!userInfo

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
