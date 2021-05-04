import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

// import Login from './student/login'
import TeamHub from './student/team-hub'
import Stage1Complete from './student/stages/stage-1-complete'
import Stage1 from './student/stages/stage-1'
import Stage2 from './student/stages/stage-2'
// import YourNotesSubmit from './student/your-notes-submit'
// import YourNotesInProgress from './student/your-notes-inprogress'
// import YourNotesCompleted from './student/your-notes-completed'

import { UserStateContext } from '../utils/user-state'

const LoggedInRoute = ({ component: Component, navigate, ...rest }) => {
    const { isSignedIn, userInfo } = useContext(UserStateContext)

    if (isSignedIn) {
        if (userInfo.role === 'tutor') {
            navigate('/tutor/hub') //TODO: not working...why?? Something to do with client-only?
        }

        return <Component {...rest} />
    }

    return <AmplifyAuthenticator />
}

const Routes = () => {
    return (
        <Router basepath="/student">
            <LoggedInRoute path="/team-hub" component={TeamHub} />
            <LoggedInRoute path="/stage-1" component={Stage1} />
            <LoggedInRoute
                path="/stage-1/complete"
                component={Stage1Complete}
            />
            <LoggedInRoute path="/stage-2" component={Stage2} />
        </Router>
    )
}

export default Routes
