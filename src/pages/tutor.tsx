import React, { createContext, useState, useContext } from 'react'
import { Router } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quest'
import NewQuest from './tutor/new-quest'
import AddStudents from './tutor/add-students'
import CreateTeam from './tutor/create-team'

import { StudentType } from '../gql/types'

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
                <LoggedInRoute path="/current-quest" component={CurrentQuest} />
                <LoggedInRoute path="/new-quest" component={NewQuest} />
                <LoggedInRoute path="/add-students" component={AddStudents} />
                <LoggedInRoute path="/create-team" component={CreateTeam} />
            </Router>
        </NewQuestContext.Provider>
    )
}

export default Routes
