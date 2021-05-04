import React, { Component } from 'react';
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import CKEditor from 'ckeditor4-react';
import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import HelpIcon from "../../../../assets/help-icon.svg";
import "../../../../scss/index.scss";
const Stage5Plan = () => {

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Stage 5 - Business Plan
        </title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 5" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Business Plan
              </h2>

              <div className="form-holder-border">
                <div id="more-detail-hint">
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
                <p className="sm-type-amp">
                  <Link href="/student/stage-5">Back to Stage 5</Link>
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

export default Stage5Plan;
