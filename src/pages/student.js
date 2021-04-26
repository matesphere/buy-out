import React from 'react'
import { Router } from '@reach/router'

import Login from './student/login'
import TeamHub from './student/team-hub'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'
import Stage1 from './student/stages/stage-1/stage-1'
import RolesPage from './student/stages/stage-2/the-roles'
import Stage2Page from './student/stages/stage-2/stage-2'
import AboutGlenclasPeoplePage from './student/stages/stage-2/about-glenclas-people'
import Stage3Page from './student/stages/stage-3/stage-3'
import Stage3HousingPage from './student/stages/stage-3/affordable-housing-scheme'
import Stage3PlaySkate from './student/stages/stage-3/playpark-skatepark'
import Stage3ShopPostOffice from './student/stages/stage-3/shop-and-post-office'
import Stage3MicroHydro from './student/stages/stage-3/micro-hydro'
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

            <Stage2Page path="/stage-2" />
            <RolesPage path="/stage-2/the-roles" />
            <AboutGlenclasPeoplePage path="/stage-2/about-glenclas" />

            <Stage3Page path="/stage-3" />
            <Stage3HousingPage path="/stage-3/affordable-housing-scheme" />
            <Stage3ShopPostOffice path="/stage-3/shop-and-post-office" />
            <Stage3PlaySkate path="/stage-3/playpark-skatepark" />
            <Stage3MicroHydro path="/stage-3/micro-hydro" />
        </Router>
    )
}

export default Routes
