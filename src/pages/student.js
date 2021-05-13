import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import TeamHub from './student/team-hub'
import Stage1Complete from './student/stages/stage-1/stage-1-complete'
import Stage1ResearchPage from './student/stages/stage-1/research-page'
import Stage1 from './student/stages/stage-1/stage-1'
import RolesPage from './student/stages/stage-2/the-roles'
import Stage2Page from './student/stages/stage-2/stage-2'
import AboutGlenclasPeoplePage from './student/stages/stage-2/about-glenclas-people'
import AboutGlenclasAreaPage from './student/stages/stage-2/about-glenclas-area'
import Stage3Page from './student/stages/stage-3/stage-3'
import Stage2PlanPage from './student/stages/stage-2/plan-of-glenclas'
import Stage2HousingPage from './student/stages/stage-2/affordable-housing-scheme'
import Stage2PlaySkate from './student/stages/stage-2/playpark-skatepark'
import Stage2ShopPostOffice from './student/stages/stage-2/shop-and-post-office'
import Stage2MicroHydro from './student/stages/stage-2/micro-hydro'
import Stage2WindTurbine from './student/stages/stage-2/wind-turbine'
import Stage2BusinessHub from './student/stages/stage-2/business-hub'
import Stage2ForestryScheme from './student/stages/stage-2/forestry-scheme'
import Stage2CampsiteCabin from './student/stages/stage-2/campsite-cabin'
import Stage2MarketScheme from './student/stages/stage-2/market-scheme'
import Stage4Page from './student/stages/stage-4/stage-4'
import Stage4SwotOne from './student/stages/stage-4/swot-study-one'
import Stage4FeasibilityOne from './student/stages/stage-4/feasibility-study-one'
import Stage5Page from './student/stages/stage-5/stage-5'
import BusinessPlanPage from './student/stages/stage-5/business-plan'
import Stage6Page from './student/stages/stage-6/stage-6'
import Stage7Page from './student/stages/stage-7/stage-7'
import Stage8Page from './student/stages/stage-8/stage-8'

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
                path="/stage-1/research-page"
                component={Stage1ResearchPage}
            />
            <LoggedInRoute
                path="/stage-1/complete"
                component={Stage1Complete}
            />

            <LoggedInRoute path="/stage-2" component={Stage2Page} />
            <LoggedInRoute path="/stage-2/the-roles" component={RolesPage} />
            <LoggedInRoute
                path="/stage-2/plan-of-glenclas"
                component={Stage2PlanPage}
            />
            <LoggedInRoute
                path="/stage-2/about-glenclas-people"
                component={AboutGlenclasPeoplePage}
            />
            <LoggedInRoute
                path="/stage-2/about-glenclas-area"
                component={AboutGlenclasAreaPage}
            />
            <LoggedInRoute
                path="/stage-2/affordable-housing-scheme"
                component={Stage2HousingPage}
            />
            <LoggedInRoute
                path="/stage-2/shop-and-post-office"
                component={Stage2ShopPostOffice}
            />
            <LoggedInRoute
                path="/stage-2/playpark-skatepark"
                component={Stage2PlaySkate}
            />
            <LoggedInRoute
                path="/stage-2/micro-hydro"
                component={Stage2MicroHydro}
            />
            <LoggedInRoute
                path="/stage-2/wind-turbine"
                component={Stage2WindTurbine}
            />
            <LoggedInRoute
                path="/stage-2/business-hub"
                component={Stage2BusinessHub}
            />
            <LoggedInRoute
                path="/stage-2/forestry-scheme"
                component={Stage2ForestryScheme}
            />
            <LoggedInRoute
                path="/stage-2/campsite-cabin"
                component={Stage2CampsiteCabin}
            />
            <LoggedInRoute
                path="/stage-2/market-scheme"
                component={Stage2MarketScheme}
            />

            <LoggedInRoute path="/stage-3" component={Stage3Page} />

            <LoggedInRoute path="/stage-4" component={Stage4Page} />
            <LoggedInRoute
                path="/stage-4/swot-study-one"
                component={Stage4SwotOne}
            />
            <LoggedInRoute
                path="/stage-4/feasibility-study-one"
                component={Stage4FeasibilityOne}
            />

            <LoggedInRoute path="/stage-5" component={Stage5Page} />
            <LoggedInRoute
                path="/stage-5/business-plan"
                component={BusinessPlanPage}
            />
            <LoggedInRoute path="/stage-6" component={Stage6Page} />
            <LoggedInRoute path="/stage-7" component={Stage7Page} />
            <LoggedInRoute path="/stage-8" component={Stage8Page} />
        </Router>
    )
}

export default Routes
