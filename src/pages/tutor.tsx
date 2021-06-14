import React, { createContext, useState, useContext, FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quests'
import AddStudents from './tutor/add-students'
import CreateTeam from './tutor/create-team'
import Stage1Submitted from './tutor/stages/stage-1/tutor-stage-1-submitted'

import { StudentType } from '../gql/types'

import { UserStateContext } from '../utils/user-state'

type LoggedInRouteProps = RouteComponentProps & {
    component: () => string | JSX.Element
}

const LoggedInRoute: FC<LoggedInRouteProps> = ({
    component: Component,
    navigate,
    ...rest
}) => {
    const { isSignedIn, userInfo } = useContext(UserStateContext)

    if (isSignedIn) {
        if (userInfo.role === 'student') {
            navigate('/student/team-hub') //TODO: not working...why?? Something to do with client-only?
        }

        return <Component {...rest} />
    }

    return <AmplifyAuthenticator />
}

export interface NewQuestContextType {
    studentsToAdd: Array<StudentType>
    setStudentsToAdd: (students: Array<StudentType>) => void
}

export const NewQuestContext = createContext<NewQuestContextType>({
    studentsToAdd: [],
    setStudentsToAdd: () => {},
})

const Routes = () => {
    const [studentsToAdd, setStudentsToAdd] = useState([])

    return (
        <NewQuestContext.Provider value={{ studentsToAdd, setStudentsToAdd }}>
            <Router basepath="/tutor">
                <LoggedInRoute path="/hub" component={Hub} />
                <LoggedInRoute
                    path="/current-quests"
                    component={CurrentQuest}
                />
                <LoggedInRoute path="/add-students" component={AddStudents} />
                <LoggedInRoute path="/create-team" component={CreateTeam} />

                <LoggedInRoute
                    path="/stage-1/submitted"
                    component={Stage1Submitted}
                />
            </Router>
        </NewQuestContext.Provider>
    )
}

export default Routes
