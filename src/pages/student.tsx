import React, { useContext, FC } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import TeamHub from './student/team-hub'
import Stage1Landing from './student/stages/stage-1/stage-1-landing'
import Stage1Task from './student/stages/stage-1/stage-1-task'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'
import RolesPage from './student/stages/stage-2/the-roles'
import Stage2Page from './student/stages/stage-2/stage-2'
import Stage2PageComplete from './student/stages/stage-2/stage-2-complete'
import AboutGlenclasAreaPage from './student/stages/stage-2/about-glenclas-area'
import CommunityHousingPage from './student/stages/stage-2/community'
import Stage3Landing from './student/stages/stage-3/stage-3-landing'
import Stage3Task from './student/stages/stage-3/stage-3-task'
import Stage3Swot from './student/stages/stage-3/stage-3-swot'
import Stage3Complete from './student/stages/stage-3/stage-3-complete'
import Stage3HousingPage from './student/stages/stage-3/affordable-housing-scheme'
import Stage3PlaySkate from './student/stages/stage-3/playpark-skatepark'
import Stage3ShopPostOffice from './student/stages/stage-3/shop-and-post-office'
import Stage3MicroHydro from './student/stages/stage-3/micro-hydro'
import Stage3WindTurbine from './student/stages/stage-3/wind-turbine'
import Stage3BusinessHub from './student/stages/stage-3/business-hub'
import Stage3ForestryScheme from './student/stages/stage-3/forestry-scheme'
import Stage3CampsiteCabin from './student/stages/stage-3/campsite-cabin'
import Stage3MarketScheme from './student/stages/stage-3/market-scheme'
import Stage4Page from './student/stages/stage-4/stage-4'
import Stage4FeasibilityOne from './student/stages/stage-4/feasibility-study-one'
import Stage5Page from './student/stages/stage-5/stage-5'
import Stage5BusinessPlanPage from './student/stages/stage-5/business-plan'
import Stage6Page from './student/stages/stage-6/stage-6'
import Stage6TipsPage from './student/stages/stage-6/presentation-tips'
import Stage7Page from './student/stages/stage-7/stage-7'
import Stage7TipsPage from './student/stages/stage-7/presentation-tips'
import Stage8Page from './student/stages/stage-8/stage-8'

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

            <LoggedInRoute path="/stage-1" component={Stage1Landing} />
            <LoggedInRoute path="/stage-1/task" component={Stage1Task} />
            <LoggedInRoute
                path="/stage-1/complete"
                component={Stage1Complete}
            />

            <LoggedInRoute path="/stage-2" component={Stage2Page} />
            <LoggedInRoute path="/stage-2/the-roles" component={RolesPage} />
            <LoggedInRoute
                path="/stage-2/about-glenclas-area"
                component={AboutGlenclasAreaPage}
            />
            <LoggedInRoute
                path="/stage-2-complete"
                component={Stage2PageComplete}
            />
            <LoggedInRoute
                path="/stage-2/community"
                component={CommunityHousingPage}
            />
            <LoggedInRoute path="/stage-3" component={Stage3Landing} />
            <LoggedInRoute path="/stage-3/task" component={Stage3Task} />
            <LoggedInRoute
                path="/stage-3/complete"
                component={Stage3Complete}
            />

            <LoggedInRoute
                path="/stage-3/affordable-housing-scheme"
                component={Stage3HousingPage}
            />
            <LoggedInRoute
                path="/stage-3/shop-and-post-office"
                component={Stage3ShopPostOffice}
            />
            <LoggedInRoute
                path="/stage-3/playpark-skatepark"
                component={Stage3PlaySkate}
            />
            <LoggedInRoute
                path="/stage-3/micro-hydro"
                component={Stage3MicroHydro}
            />
            <LoggedInRoute
                path="/stage-3/wind-turbine"
                component={Stage3WindTurbine}
            />
            <LoggedInRoute
                path="/stage-3/business-hub"
                component={Stage3BusinessHub}
            />
            <LoggedInRoute
                path="/stage-3/forestry-scheme"
                component={Stage3ForestryScheme}
            />
            <LoggedInRoute
                path="/stage-3/campsite-cabin"
                component={Stage3CampsiteCabin}
            />
            <LoggedInRoute
                path="/stage-3/market-scheme"
                component={Stage3MarketScheme}
            />
            <LoggedInRoute path="/stage-3/swot" component={Stage3Swot} />
            <LoggedInRoute path="/stage-4" component={Stage4Page} />

            <LoggedInRoute
                path="/stage-4/feasibility-study-one"
                component={Stage4FeasibilityOne}
            />

            <LoggedInRoute path="/stage-5" component={Stage5Page} />
            <LoggedInRoute
                path="/stage-5/business-plan"
                component={Stage5BusinessPlanPage}
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
    )
}

export default Routes
