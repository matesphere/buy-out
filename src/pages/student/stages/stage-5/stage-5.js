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
import CKEditor from "ckeditor4-react";

const Stage5Page = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "business-plans.jpg" }) {
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
        <title>Stage 5 - Business Plan</title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 5" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Business Plan
              </h2>

              <p className="sm-type-lead mb-3">
                The teams will complete a Business Plan that will show how
                much money is required to be raised to buy the land and to
                provide the Capital Costs to get the 3 options off the ground
                and it will include a list of funders who ‘will’ provide those
                funds.
              </p>

              <div className="mt-4 mb-2 image-holder">
                <GatsbyImage
                    image={data.image1.childImageSharp.gatsbyImageData}
                />
              </div>

              <p className="sm-type-lead mb-3">
                The Business Plan will also require the Groups to show
                estimates of the costs and income expected over the first 4
                years of operations. In some cases the figures required will
                be found in the information provided for the Options, but in
                some cases the Groups will need to make their own ‘best
                estimates’ of either costs or income.
              </p>

              <div className="side-grey">
                <h3 className="task ticker mb-2">
                  <span className="ticker-sheet">
                      <TickSheet/>
                  </span>
                  <span className="sm-type-drum">
                      Task to complete:
                  </span>
                </h3>
                <p className="sm-type-lead mb-2">
                  Complete a Business Plan that will show how much money is required.
                </p>

                <div className="form-holder-border">
                  <div id="more-detail-hint">
                    <h4 className="sm-type-guitar mb-2">
                      Business Plan
                    </h4>
                    <p className="sm-type-amp mb-1">
                      Paste your Business Plan below.
                    </p>
                  </div>
                  <div className="ck-textarea">
                    <CKEditor
                        name="editorOne"
                        config={ {
                          toolbar: [ [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', '-', 'Format' ] ]
                        } }
                    />
                  </div>
                </div>

                <button className="btn-solid-lg mt-4">
                  Submit Work
                </button>
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
                <p className="sm-type-amp mb-4">
                  Complete a Business Plan that will show how
                  much money is required.
                </p>

                <p className="sm-type-amp">
                  Show estimates of the costs and income expected over the first 4
                  years of operations.
                </p>
              </div>

              <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                Your checklist
              </p>
              <div className="side-grey">
                <div className="multiple-choice">
                  <input
                      className="form-control"
                      id="id1"
                      type="checkbox"
                  />
                  <label className="form-label" htmlFor="id1">
                    You have completed the Business Plan that will show how much money is required.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Stage5Page;
