import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import HelpIcon from "../../../../assets/help-icon.svg";

import "../../../../scss/index.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import TickSheet from "../../../../assets/tick-sheet.svg";

const Stage7Page = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "community-feedback.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stage 7 - Receive Feedback from the Community</title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 7" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Receive Feedback from the Community
              </h2>

              <p className="sm-type-lead mb-3">
                In this case, the teams will receive feedback from the teacher on their presentations and also the likelihood of the success of their ventures.
              </p>

              <div className="mt-4 mb-2 image-holder">
                <GatsbyImage
                  image={data.image1.childImageSharp.gatsbyImageData}
                />
              </div>


              <div className="side-grey">
                <h4 className="task ticker mb-2">
                  <span className="ticker-sheet">
                      <TickSheet/>
                  </span>
                  <span className="sm-type-drum">
                      Task to complete:
                  </span>
                </h4>
                <div className="form-holder-border">
                <ul>
                  <li className="sm-type-guitar">Check feedback <a href="#">from your tutor here</a>.</li>
                </ul>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <p className="sm-type-guitar mb-2">
                <span className="side-icon side-icon-orange">
                  <HelpIcon />
                </span>
                Helpful information
              </p>
              <div className="side-grey">
                <p className="sm-type-amp">
                    Check your feedback.
                </p>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Stage7Page;