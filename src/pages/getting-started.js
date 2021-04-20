import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import { eng } from "./_index.data"
import {graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import {Helmet} from "react-helmet";
import HelpIcon from "../assets/help-icon.svg";
import TickSheet from "../assets/tick-sheet.svg";
import DogVideo from "../assets/the-quest.mp4"

const IndexPage = () => {

  return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Getting started</title>
          <meta name="description" content="The description" />
          {/*<meta name="image" content={image} />*/}
          <meta property="og:url" content="url" />
          <meta property="og:title" content="Quest 1" />
          <meta property="og:description" content="The description" />
          {/*<meta property="og:image" content={image} />*/}
        </Helmet>

        <main className="the-quest">
          <Header headerText="Getting started" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Quest Research.</h2>
                <p className="sm-type-guitar mb-4">Before embarking on the Quest, it is important to gain some background knowledge about community land ownership in Scotland and also to think about some of the important concepts and issues.</p>
                <div className="homepage-image mb-4">
                  <video controls>
                    <source src={DogVideo} type="video/mp4" />
                  </video>
                </div>
                <p className="sm-type-guitar mb-4">Here are a series of questions to help you to do some preliminary exploration. This is your first opportunity to work together as a team, so the answers that you provide should be the product of discussions between each of the team members.</p>

                <h3 className="sm-type-drum sm-type-drum--medium">Questions</h3>
                <ol>
                {eng.map(eng => (
                    <li key={eng.text}>
                      <p className="sm-type-guitar">
                        {eng.text}
                      </p>
                      <p className="sm-type-amp mb-4">
                        {eng.description}
                      </p>
                    </li>
                    )
                )}
                </ol>
              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp">When communities purchase the land on which their people live and work, they are freed to reinvigorate their areas and improve the prospects of future generations.</p>
                </div>

                <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-green"><TickSheet /></span>Your checklist</p>
                <div className="side-grey">
                  <p className="sm-type-amp">Check all task here:</p>
                  <div className="multiple-choice">
                    <input className="form-control" id="id1" type="checkbox"/>
                    <label className="form-label" htmlFor="id1">Did you answer all the 12 questions?</label>
                  </div>
                </div>

                <button
                    className="btn-solid-lg mt-4" disabled="disabled"
                >
                  Submit Work
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </>
  )
}

export default IndexPage
