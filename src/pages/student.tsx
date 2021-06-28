import React, { useContext, FC } from 'react'
import { PageProps } from 'gatsby'
import { Router, RouteComponentProps } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import TeamHub from './student/team-hub'
import Information from './student/information'

import Header from '../components/_header'
import Footer from '../components/_footer'

import Stage1Landing from './student/stages/stage-1/stage-1-landing'
import Stage1Task from './student/stages/stage-1/stage-1-task'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'

import Stage2Landing from './student/stages/stage-2/stage-2-landing'
import Stage2Task from './student/stages/stage-2/stage-2-task'
import Stage2PageComplete from './student/stages/stage-2/stage-2-complete'

import Stage3Landing from './student/stages/stage-3/stage-3-landing'
import Stage3ChooseOptions from './student/stages/stage-3/stage-3-choose-options'
import Stage3Swot from './student/stages/stage-3/stage-3-swot'
import Stage3SwotExample from './student/stages/stage-3/stage-3-swot-example'
import Stage3Complete from './student/stages/stage-3/stage-3-complete'

import Stage4Landing from './student/stages/stage-4/stage-4-landing'
import Stage4ChooseOptions from './student/stages/stage-4/stage-4-choose-options'
import Stage4Feasibility from './student/stages/stage-4/stage-4-feasibility'
import Stage4Complete from './student/stages/stage-4/stage-4-complete'

import Stage5Landing from './student/stages/stage-5/stage-5-landing'
import Stage5BusinessPlan from './student/stages/stage-5/stage-5-business-plan'
import Stage5Complete from './student/stages/stage-5/stage-5-complete'

import Stage6Page from './student/stages/stage-6/stage-6'
import Stage6TipsPage from './student/stages/stage-6/presentation-tips'

import Stage7Page from './student/stages/stage-7/stage-7'
import Stage7TipsPage from './student/stages/stage-7/presentation-tips'

import Stage8Page from './student/stages/stage-8/stage-8'

import { UserStateContext } from '../utils/user-state'

type LoggedInRouteProps = RouteComponentProps & {
    component: FC<PageProps>
}

const LoggedInRoute: FC<LoggedInRouteProps> = ({
    component: Component,
    navigate,
    ...rest
}) => {
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
        <>
            <Header />
            <Router basepath="/student">
                <LoggedInRoute path="/team-hub" component={TeamHub} />
                <LoggedInRoute path="/information" component={Information} />

                <LoggedInRoute path="/stage-1" component={Stage1Landing} />
                <LoggedInRoute path="/stage-1/task" component={Stage1Task} />
                <LoggedInRoute
                    path="/stage-1/complete"
                    component={Stage1Complete}
                />

                <LoggedInRoute path="/stage-2" component={Stage2Landing} />
                <LoggedInRoute path="/stage-2/task" component={Stage2Task} />
                <LoggedInRoute
                    path="/stage-2/complete"
                    component={Stage2PageComplete}
                />
                <LoggedInRoute path="/stage-3" component={Stage3Landing} />
                <LoggedInRoute
                    path="/stage-3/options"
                    component={Stage3ChooseOptions}
                />
                <LoggedInRoute path="/stage-3/swot" component={Stage3Swot} />
                <LoggedInRoute
                    path="/stage-3/swot/example"
                    component={Stage3SwotExample}
                />
                <LoggedInRoute
                    path="/stage-3/complete"
                    component={Stage3Complete}
                />

                <LoggedInRoute path="/stage-4" component={Stage4Landing} />
                <LoggedInRoute
                    path="/stage-4/options"
                    component={Stage4ChooseOptions}
                />
                <LoggedInRoute
                    path="/stage-4/feasibility"
                    component={Stage4Feasibility}
                />
                <LoggedInRoute
                    path="/stage-4/complete"
                    component={Stage4Complete}
                />
                <LoggedInRoute path="/stage-5" component={Stage5Landing} />
                <LoggedInRoute
                    path="/stage-5/business-plan"
                    component={Stage5BusinessPlan}
                />
                <LoggedInRoute
                    path="/stage-5/complete"
                    component={Stage5Complete}
                />

                <LoggedInRoute path="/stage-6" component={Stage6Page} />
                <LoggedInRoute
                    path="/stage-6/presentation-tips"
                    component={Stage6TipsPage}
                />

                <LoggedInRoute path="/stage-7" component={Stage7Page} />
                <LoggedInRoute
                    path="/stage-7/presentation-tips"
                    component={Stage7TipsPage}
                />

                <LoggedInRoute path="/stage-8" component={Stage8Page} />
            </Router>
            <Footer />
        </>
    )
}

export default Routes
