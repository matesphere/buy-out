import React, { createContext, useState } from 'react'
import { Router } from '@reach/router'

import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quest'
import NewQuest from './tutor/new-quest'
import AddStudent from './tutor/add-students'
import CreateTeam from './tutor/create-team'

import { StudentType } from '../gql/types'

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
                <Hub path="/hub" />
                <CurrentQuest path="/current-quest" />
                <NewQuest path="/new-quest" />
                <AddStudent path="/add-students" />
                <CreateTeam path="/create-team" />
            </Router>
        </NewQuestContext.Provider>
    )
}

export default Routes
