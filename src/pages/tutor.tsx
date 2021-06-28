import React, { createContext, useState, useContext, FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import Header from './tutor/_header'
import Footer from './tutor/_footer'
import Hub from './tutor/hub'
import CurrentQuest from './tutor/current-quests'
import AddStudents from './tutor/add-students'
import CreateTeam from './tutor/create-team'
import Stage1Submitted from './tutor/stages/stage-1/tutor-stage-1-submitted'
import Stage3Submitted from './tutor/stages/stage-3/tutor-stage-3-submitted'
import Stage4Submitted from './tutor/stages/stage-4/tutor-stage-4-submitted'
import Stage5Submitted from './tutor/stages/stage-5/tutor-stage-5-submitted'
import TutorAssessment from './tutor/assessment'
import TutorTeamAssessment from './tutor/team-assessment'
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
            <Header />
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

                <LoggedInRoute
                    path="/stage-3/submitted"
                    component={Stage3Submitted}
                />

                <LoggedInRoute
                    path="/stage-4/submitted"
                    component={Stage4Submitted}
                />

                <LoggedInRoute
                    path="/stage-5/submitted"
                    component={Stage5Submitted}
                />

                <LoggedInRoute
                    path="/assessment"
                    component={TutorAssessment}
                />
                <LoggedInRoute
                    path="/team-assessment"
                    component={TutorTeamAssessment}
                />
            </Router>
            <Footer />
        </NewQuestContext.Provider>
    )
}

export default Routes
