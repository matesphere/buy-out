import React from "react";
import { Router } from "@reach/router";

import Login from "./student/login";
import TeamHub from "./student/team-hub";
import Stage1Complete from "./student/stages/stage-1/stage-1-complete";
import Stage1ResearchPage from "./student/stages/stage-1/research-page";
import Stage1 from "./student/stages/stage-1/stage-1";
import RolesPage from "./student/stages/stage-2/the-roles";
import Stage2Page from "./student/stages/stage-2/stage-2";
import AboutGlenclasPeoplePage from "./student/stages/stage-2/about-glenclas-people";
import AboutGlenclasAreaPage from "./student/stages/stage-2/about-glenclas-area";
import Stage3Page from "./student/stages/stage-3/stage-3";
import Stage2PlanPage from "./student/stages/stage-2/plan-of-glenclas";
import Stage2HousingPage from "./student/stages/stage-2/affordable-housing-scheme";
import Stage2PlaySkate from "./student/stages/stage-2/playpark-skatepark";
import Stage2ShopPostOffice from "./student/stages/stage-2/shop-and-post-office";
import Stage2MicroHydro from "./student/stages/stage-2/micro-hydro";
import Stage2WindTurbine from "./student/stages/stage-2/wind-turbine";
import Stage2BusinessHub from "./student/stages/stage-2/business-hub";
import Stage2ForestryScheme from "./student/stages/stage-2/forestry-scheme";
import Stage2CampsiteCabin from "./student/stages/stage-2/campsite-cabin";
import Stage2MarketScheme from "./student/stages/stage-2/market-scheme";
import Stage4Page from "./student/stages/stage-4/stage-4";
import Stage4SwotOne from "./student/stages/stage-4/swot-study-one";
import Stage4FeasibilityOne from "./student/stages/stage-4/feasibility-study-one";
import Stage5Page from "./student/stages/stage-5/stage-5";
import Stage6Page from "./student/stages/stage-6/stage-6";
import Stage7Page from "./student/stages/stage-7/stage-7";
import Stage8Page from "./student/stages/stage-8/stage-8";

// import YourNotesSubmit from './student/your-notes-submit'
// import YourNotesInProgress from './student/your-notes-inprogress'
// import YourNotesCompleted from './student/your-notes-completed'

const Routes = () => {
  return (
    <Router basepath="/student">
        <Login path="/login" />
        <TeamHub path="/team-hub" />

        <Stage1 path="/stage-1" />
        <Stage1ResearchPage path="/stage-1/research-page" />
        <Stage1Complete path="/stage-1/complete" />

        <Stage2Page path="/stage-2" />
        <RolesPage path="/stage-2/the-roles" />
        <Stage2PlanPage path="/stage-2/plan-of-glenclas" />
        <AboutGlenclasPeoplePage path="/stage-2/about-glenclas-people" />
        <AboutGlenclasAreaPage path="/stage-2/about-glenclas-area" />
        <Stage2HousingPage path="/stage-2/affordable-housing-scheme" />
        <Stage2ShopPostOffice path="/stage-2/shop-and-post-office" />
        <Stage2PlaySkate path="/stage-2/playpark-skatepark" />
        <Stage2MicroHydro path="/stage-2/micro-hydro" />
        <Stage2WindTurbine path="/stage-2/wind-turbine" />
        <Stage2BusinessHub path="/stage-2/business-hub" />
        <Stage2ForestryScheme path="/stage-2/forestry-scheme" />
        <Stage2CampsiteCabin path="/stage-2/campsite-cabin" />
        <Stage2MarketScheme path="/stage-2/market-scheme" />

        <Stage3Page path="/stage-3" />


        <Stage4Page path="/stage-4" />
        <Stage4SwotOne path="/stage-4/swot-study-one" />
        <Stage4FeasibilityOne path="/stage-4/feasibility-study-one" />

        <Stage5Page path="/stage-5" />
        <Stage6Page path="/stage-6" />
        <Stage7Page path="/stage-7" />
        <Stage8Page path="/stage-8" />
    </Router>
  );
};

export default Routes;
