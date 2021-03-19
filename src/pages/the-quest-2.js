import * as React from "react"

import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Submit from "../assets/submit.svg";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import HelpIcon from "../assets/help-icon.svg";
import TickSheet from "../assets/tick-sheet.svg";

const QuestPage = () => {
  return (
  <>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Quest 1</title>
          <meta name="description" content="The description" />
          {/*<meta name="image" content={image} />*/}
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
          {/*<meta property="og:image" content={image} />*/}
      </Helmet>
        <main className="the-quest">
          <Header headerText="the Quest" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-12">
                  <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Quest 2 - Consult</h1>
              </div>
            </div>
              <div className="row">
                  <div className="col-lg-8">
                      <div className="side-grey">
                          <h3 className="task ticker mb-2">
                              <span className="ticker-sheet"><TickSheet /></span>
                              <span className="sm-type-drum">Task to complete:</span>
                          </h3>
                          <ul>
                              <li><p className="sm-type-lead">Hold a community meeting to explore the options.</p>
                                  <ul className="mb-4">
                                      <li className="mb-2">Some information to help you here.</li>
                                  </ul>
                              </li>
                              <li><p className="sm-type-lead">If there is community support, elect a Steering Group to take forward a possible purchase.</p>
                                  <ul className="mb-4">
                                      <li className="mb-2">Some information to help you here.</li>
                                  </ul>
                              </li>


                          </ul>
                      </div>
                  </div>

                  <div className="col-lg-4">
                      <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                      <div className="side-grey">
                          <p className="sm-type-amp ticker">You will need to work together and decided who will do the following.</p>
                      </div>

                      <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-green"><TickSheet /></span>Your checklist</p>
                      <div className="side-grey">
                          <p className="sm-type-amp">Check all task here:</p>
                          <div className="multiple-choice">
                              <input className="form-control" id="id1" type="checkbox"/>
                              <label className="form-label" htmlFor="id1">Hold a community meeting to explore the options.</label>
                          </div>
                          <div className="multiple-choice">
                              <input className="form-control" id="id2" type="checkbox"/>
                              <label className="form-label" htmlFor="id2">If there is community support, elect a Steering Group to take forward a possible purchase.</label>
                          </div>

                          <p className="sm-type-amp"><Link to="/the-roles">Move onto choosing your Steering Group.</Link></p>
                      </div>

                      {/*<div className="side-grey">*/}
                      {/*    <span className="submit-icon">*/}
                      {/*      <Submit />*/}
                      {/*    </span>*/}
                      {/*    <p className="sm-type-guitar">Have you gathered enough information?</p>*/}
                      {/*    <p className="sm-type-amp mb-4">No move on to submitting your findings.</p>*/}
                      {/*    <Link to="/your-notes" className="btn-solid-lg">*/}
                      {/*        <Submit />*/}
                      {/*        Submit*/}
                      {/*    </Link>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </section>
          <Footer />
        </main>
      </>
  )
}

export default QuestPage
