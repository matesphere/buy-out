import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quest'
import NewQuest from './tutor/new-quest'
import AddStudent from './tutor/add-students'
import CreateTeam from './tutor/create-team'

import { UserStateContext } from '../utils/user-state'

const LoggedInRoute = ({ component: Component, navigate, ...rest }) => {
    const { isSignedIn, userInfo } = useContext(UserStateContext)

    if (isSignedIn) {
        if (userInfo.role === 'student') {
            navigate('/student/team-hub') //TODO: not working...why?? Something to do with client-only?
        }

        return <Component {...rest} />
    }

    return <AmplifyAuthenticator />
}

const Routes = () => {
    return (
        <Router basepath="/tutor">
            <LoggedInRoute path="/hub" component={Hub} />
            <LoggedInRoute path="/current-quest" component={CurrentQuest} />
            <LoggedInRoute path="/new-quest" component={NewQuest} />
            <LoggedInRoute path="/add-students" component={AddStudent} />
            <LoggedInRoute path="/create-team" component={CreateTeam} />
        </Router>
    )
}

export default Routes
