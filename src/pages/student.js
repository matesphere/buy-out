import React from 'react'
import { Router } from '@reach/router'

import Login from './student/login'
import TeamHub from './student/team-hub'
import Stage1Complete from './student/stages/stage-1-complete'
import Stage1 from './student/stages/stage-1'
import Stage2 from './student/stages/stage-2'

const Routes = () => {
    return (
        <Router basepath="/student">
            <Login path="/login" />
            <TeamHub path="/team-hub" />
            <Stage1 path="/stage-1" />
            <Stage1Complete path="/stage-1/complete" />
            <Stage2 path="/stage-2" />
        </Router>
    )
}

export default Routes
