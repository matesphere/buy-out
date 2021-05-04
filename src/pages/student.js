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
import Stage3Page from "./student/stages/stage-3/stage-3";
import Stage3HousingPage from "./student/stages/stage-3/affordable-housing-scheme";
import Stage3PlaySkate from "./student/stages/stage-3/playpark-skatepark";
import Stage3ShopPostOffice from "./student/stages/stage-3/shop-and-post-office";
import Stage3MicroHydro from "./student/stages/stage-3/micro-hydro";
import Stage3WindTurbine from "./student/stages/stage-3/wind-turbine";
import Stage3BusinessHub from "./student/stages/stage-3/business-hub";
import Stage3ForestryScheme from "./student/stages/stage-3/forestry-scheme";
import Stage3CampsiteCabin from "./student/stages/stage-3/campsite-cabin";
import Stage3MarketScheme from "./student/stages/stage-3/market-scheme";
import Stage4Page from "./student/stages/stage-4/stage-4";
import Stage4SwotOne from "./student/stages/stage-4/swot-study-one";
import Stage4FeasibilityOne from "./student/stages/stage-4/feasibility-study-one";
import Stage5Page from "./student/stages/stage-5/stage-5";
import Stage5Plan from "./student/stages/stage-5/business-plan";
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
      <AboutGlenclasPeoplePage path="/stage-2/about-glenclas" />

      <Stage3Page path="/stage-3" />
      <Stage3HousingPage path="/stage-3/affordable-housing-scheme" />
      <Stage3ShopPostOffice path="/stage-3/shop-and-post-office" />
      <Stage3PlaySkate path="/stage-3/playpark-skatepark" />
      <Stage3MicroHydro path="/stage-3/micro-hydro" />
      <Stage3WindTurbine path="/stage-3/wind-turbine" />
      <Stage3BusinessHub path="/stage-3/business-hub" />
      <Stage3ForestryScheme path="/stage-3/forestry-scheme" />
      <Stage3CampsiteCabin path="/stage-3/campsite-cabin" />
      <Stage3MarketScheme path="/stage-3/market-scheme" />

      <Stage4Page path="/stage-4" />
      <Stage4SwotOne path="/stage-4/swot-study-one" />
      <Stage4FeasibilityOne path="/stage-4/feasibility-study-one" />

      <Stage5Page path="/stage-5" />
      <Stage5Plan path="/stage-5/business-plan" />
      <Stage6Page path="/stage-6" />
      <Stage7Page path="/stage-7" />
      <Stage8Page path="/stage-8" />
    </Router>
  );
};

export default Routes;
