import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import HelpIcon from "../../../../assets/help-icon.svg";

import "../../../../scss/index.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import Ticklr from '../../../../assets/tick-lr.svg'
import Ticklr2 from '../../../../assets/tick-lr2.svg'
const Stage4FeasibilityOne = () => {
  const data = useStaticQuery(graphql`
    query {
      image5: file(relativePath: { eq: "micro-hydro.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image1: file(relativePath: { eq: "micro-hydro-figures.jpg" }) {
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
        <title>
          Stage 4 - Feasibility Study 1
        </title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 4" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Feasibility Study 1
              </h2>
                <form>
                    <ol>
                        <li className="mb-4">
                            <div id="more-detail-hint">
                            <h2 className="sm-type-bigamp mb-1">
                              Why does the Community want to buy this land? (You should not refer to specific schemes but rather explain what it would mean to the community to own this land.)
                            </h2>
                            <p className="sm-type-amp mb-1">
                              Enter your finding on the text box below.
                            </p>
                            </div>

                            <textarea className="form-textarea" id="more-detail" name="more-detail" rows="15" aria-describedby="more-detail-hint"></textarea>

                        </li>
                        <li className="mb-4">
                            <div id="option-detail-hint">
                                <h2 className="sm-type-bigamp mb-1">
                                    List the 3 Development Options that you have selected
                                </h2>
                                <div className="mb-2">
                                    <input
                                        aria-describedby="option-detail-hint"
                                        type="email"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        aria-describedby="option-detail-hint"
                                        type="email"
                                        className="form-control"
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        aria-describedby="option-detail-hint"
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </li>

                        <li className="mb-4">
                            <h2 className="sm-type-bigamp mb-2">
                                For each Development Option, describe the expected benefits to the community, the reasons that the Scheme is likely to succeed and the risks that might cause it to fail.
                            </h2>

                            <div className="form-holder-border">
                                <h4 className="sm-type-drum mb-2">Development Option 1:</h4>


                                <div id="more-detail-hint11">
                                    <p className="sm-type-bigamp mb-1 redorange-highlight">
                                        Benefits to the Community
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint11"></textarea>

                                <div id="more-detail-hint22">
                                    <p className="sm-type-bigamp mb-1 green-highlight">
                                        Reasons the Scheme is likely to succeed
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint22"></textarea>

                                <div id="more-detail-hin33">
                                    <p className="sm-type-bigamp mb-1 red-highlight">
                                        Risks that might cause the Scheme to fail
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint33"></textarea>
                            </div>


                            <div className="form-holder-border">
                                <h4 className="sm-type-drum mb-2">Development Option 2:</h4>


                                <div id="more-detail-hint11">
                                    <p className="sm-type-bigamp mb-1 redorange-highlight">
                                        Benefits to the Community
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint11"></textarea>

                                <div id="more-detail-hint22">
                                    <p className="sm-type-bigamp mb-1 green-highlight">
                                        Reasons the Scheme is likely to succeed
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint22"></textarea>

                                <div id="more-detail-hin33">
                                    <p className="sm-type-bigamp mb-1 red-highlight">
                                        Risks that might cause the Scheme to fail
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint33"></textarea>
                            </div>


                            <div className="form-holder-border">
                                <h4 className="sm-type-drum mb-2">Development Option 3:</h4>


                                <div id="more-detail-hint11">
                                    <p className="sm-type-bigamp mb-1 redorange-highlight">
                                        Benefits to the Community
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint11"></textarea>

                                <div id="more-detail-hint22">
                                    <p className="sm-type-bigamp mb-1 green-highlight">
                                        Reasons the Scheme is likely to succeed
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint22"></textarea>

                                <div id="more-detail-hin33">
                                    <p className="sm-type-bigamp mb-1 red-highlight">
                                        Risks that might cause the Scheme to fail
                                    </p>
                                </div>

                                <textarea className="form-textarea" id="more-detail" name="more-detail" rows="10" aria-describedby="more-detail-hint33"></textarea>
                            </div>


                        </li>

                        <button className="btn-solid-lg mt-4">
                            Submit Work
                        </button>
                    </ol>
                </form>

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
                  Use your SWOT analysis to determine which 3 Schemes you would like to proceed with.
                </p>
                <p className="sm-type-amp">
                  <Link href="/student/stage-4">Back to Stage 4</Link>
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

export default Stage4FeasibilityOne;
