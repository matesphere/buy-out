import React from 'react'
import { Router } from '@reach/router'

import Login from './tutor/login'
import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quest'
import NewQuest from './tutor/new-quest'
import AddStudent from './tutor/add-students'
import CreateTeam from './tutor/create-team'

const Routes = () => {
    return (
        <Router basepath="/tutor">
            <Login path="/login" />
            <Hub path="/hub" />
            <CurrentQuest path="/current-quest" />
            <NewQuest path="/new-quest" />
            <AddStudent path="/add-students" />
            <CreateTeam path="/create-team" />
        </Router>
    )
}

export default Routes
