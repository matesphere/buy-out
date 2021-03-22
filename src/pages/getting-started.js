import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import HomeOne from "../assets/home-icon-1.svg";
import HomeTwo from "../assets/home-icon-2.svg";
import HomeThree from "../assets/home-icon-3.svg";
import Slash from "../assets/slash.svg";
import { eng } from "./_index.data"
import {graphql, Link, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import {Helmet} from "react-helmet";
import HelpIcon from "../assets/help-icon.svg";
import TickSheet from "../assets/tick-sheet.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cls-ppt3-no-text-crop-1024x322.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

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

        <main className="homepage">
          <Header headerText="Getting started" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">You are about to embark on the community buy out quest.</h2>
                <p className="sm-type-guitar mb-4">Can you make it through the 8 steps and emerge victorious?</p>
                <div className="homepage-image">
                  <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
                </div>
                <h3 className="sm-type-drum sm-type-drum--medium">Overview</h3>
                {eng.map(eng => (
                    <div key={eng.text}>
                      <p className="sm-type-guitar">
                        {eng.text}
                      </p>
                      <p className="sm-type-amp">
                        {eng.description}
                      </p>
                    </div>

                    )
                )}
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
                    <label className="form-label" htmlFor="id1">Did you read the overview section?</label>
                  </div>

                  <p className="sm-type-amp"><Link to="/the-quest-1">You can now move onto the next stage.</Link></p>

                </div>
              </div>
            </div>
          </section>
          {/*<div className="fullbg-black">*/}
          {/*  <section className="container">*/}
          {/*    <div className="row">*/}
          {/*      <div className="col-lg-8">*/}
          {/*        <div className="getting-started">*/}
          {/*          <h4 className="sm-type-drum sm-type-drum--medium">Now it’s your turn</h4>*/}
          {/*          <p className="sm-type-amp">Work through the community land buyout process to find out if you have what it takes to help your community - for a better, brighter tomorrow!</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="col-lg-4 button-center">*/}
          {/*        <Link className="btn-solid-lg" to="/the-quest-1">Get started</Link>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </section>*/}
          {/*</div>*/}
          <Footer />
        </main>
      </>
  )
}

export default IndexPage