import React from 'react'
import { Router, Route } from '@reach/router'
import { Auth } from 'aws-amplify'

import Login from './tutor/login'
import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quest'
import NewQuest from './tutor/new-quest'
import AddStudent from './tutor/add-students'
import CreateTeam from './tutor/create-team'

const loggedInAs = async () => {
    let data
    try {
        data = await Auth.currentSession()
    } catch (e) {
        console.log('hmmm', e)
    }

    console.log(data)
}

const LoggedInRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
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
