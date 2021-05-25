import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { TextEditor } from '../../../../components/common/TextEditor'

import HelpIcon from '../../../../assets/help-icon.svg'
import '../../../../scss/index.scss'

const Stage4SwotOne = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - Progress Your Plans (SWOT Analysis)</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 4" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                SWOT Analysis 1
                            </h2>
                            <p className="sm-type-amp">
                                Use the SWOT Analysis to gather information in
                                order to complete the Feasibility Study
                                template.{' '}
                            </p>
                            <div className="mb-2">
                                <label className="form-label sm-type-amp">
                                    What Development Options is this SWOT for?
                                </label>
                                <input className="form-control" />
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
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/student/stage-4">
                                        Back to Stage 4
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 red-highlight">
                                        Strengths
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Areas of advantage
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 greendark-highlight">
                                        Weaknesses
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Areas of challenge
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1 green-highlight">
                                        Opportunities
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Positive influences outside your control
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-holder-border">
                                <div id="more-detail-hint">
                                    <h4 className="sm-type-drum sm-type-drum--medium mb-1">
                                        Threats
                                    </h4>
                                    <p className="sm-type-amp mb-1">
                                        Negative influences outside your control
                                    </p>
                                </div>
                                <div className="ck-textarea">
                                    <TextEditor />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button className="btn-solid-lg mt-4">
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

export default Stage4SwotOne
