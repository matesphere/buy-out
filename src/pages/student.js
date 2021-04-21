import React from 'react'
import { Router } from '@reach/router'

import Login from './student/login'
import TeamHub from './student/team-hub'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'
import Stage1 from './student/stages/stage-1/stage-1'
import RolesPage from './student/stages/stage-2/the-roles'
import Stage2Page from './student/stages/stage-2/stage-2'
import DevOpsPage from './student/stages/stage-2/development-opportunies'
import AboutGlenclasPeoplePage from './student/stages/stage-2/about-glenclas-people'
import Stage3Page from './student/stages/stage-3/stage-3'
import HousingPage from './student/stages/stage-3/affordable-housing-scheme'
// import YourNotesSubmit from './student/your-notes-submit'
// import YourNotesInProgress from './student/your-notes-inprogress'
// import YourNotesCompleted from './student/your-notes-completed'

const Routes = () => {
    return (
        <Router basepath="/student">
            <Login path="/login" />
            <TeamHub path="/team-hub" />
            <Stage1 path="/stage-1" />
            <Stage1Complete path="/stage-1/complete" />
            <RolesPage path="/stage-2/the-roles" />
            <Stage2Page path="/stage-2" />
            <DevOpsPage path="/stage-2/development-opportunies" />
            <AboutGlenclasPeoplePage path="/stage-2/about-glenclas-people" />
            <Stage3Page path="/stage-3" />
            <HousingPage path="/stage-3/affordable-housing-scheme" />
        </Router>
    )
}

export default Routes
