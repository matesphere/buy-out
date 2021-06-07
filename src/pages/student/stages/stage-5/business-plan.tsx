import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'
import SaveIcon from '../../../../assets/save-icon.svg'

import '../../../../scss/index.scss'

const Stage5BusinessPlanPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "business-plans.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 5 - Business Plan</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 5" />

                <div className="save-icon">
                    <SaveIcon /> Save progress
                </div>
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Business Plan
                            </h2>

                            <p className="sm-type-lead mb-2">
                                Complete the following form to submit your
                                business plan.
                            </p>
                            <h3 className="sm-type-drum sm-type-drum--medium mb-2 redorange-highlight">
                                Option 1: Affordable Housing Scheme
                            </h3>
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
                                    Show estimates of the costs and income
                                    expected over the first 4 years of
                                    operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-holder-border">
                                <p className="sm-type-lead sm-type-lead--medium mb-2">
                                    2. Capital costs of Development Options
                                </p>
                                <p className="sm-type-amp mb-2">
                                    <span className="sm-type-amp--medium redorange-highlight">
                                        NOTES:
                                    </span>{' '}
                                    In this section you should include all of
                                    the known capital costs (the set-up costs)
                                    of each development option, giving a total
                                    at the end. You must then show what funders
                                    you are going to use to meet the total for
                                    each option. The Amount of Funding Total
                                    should equal the Capital Costs Total for
                                    each option.
                                </p>

                                <div className="side-grey mb-2">
                                    <div className="row mb-4">
                                        <div className="col-lg-8">
                                            <label className="form-label sm-type-guitar">
                                                Details of Capital Costs
                                            </label>
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-4">
                                            <label className="form-label sm-type-amp">
                                                Capital Costs (£)
                                            </label>
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-5"></div>
                                        <div className="col-lg-4">
                                            <label className="form-label sm-type-amp">
                                                Total (£)
                                            </label>
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                                How will the capital costs be
                                                funded?
                                            </p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                                Name of Funder
                                            </p>
                                            <p className="sm-type-lead mb-4">
                                                Funder 1
                                            </p>
                                            <p className="sm-type-lead mb-4">
                                                Funder 2
                                            </p>
                                            <p className="sm-type-lead mb-4">
                                                Funder 3
                                            </p>
                                            <p className="sm-type-lead mb-4">
                                                Funder 4
                                            </p>
                                        </div>
                                        <div className="col-lg-5">
                                            <label className="form-label sm-type-amp">
                                                Name of Funder
                                            </label>
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-4">
                                            <label className="form-label sm-type-amp">
                                                Amount of Funding (£)
                                            </label>
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-5"></div>
                                        <div className="col-lg-4">
                                            <label className="form-label sm-type-amp">
                                                Total (£)
                                            </label>
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-holder-border">
                                <p className="sm-type-lead sm-type-lead--medium mb-2">
                                    3. Running costs
                                </p>
                                <p className="sm-type-amp mb-2">
                                    <span className="sm-type-amp--medium redorange-highlight">
                                        NOTES:
                                    </span>{' '}
                                    In this section you should detail the annual
                                    running costs for each option, for four
                                    years, giving a total for each year.
                                </p>
                                <div className="side-grey mb-2">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <p className="sm-type-amp mb-2">
                                                Details of annual running costs
                                            </p>
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <p className="sm-type-amp mb-2">
                                                Year 1
                                            </p>
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <p className="sm-type-amp mb-2">
                                                Year 2
                                            </p>
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <p className="sm-type-amp mb-2">
                                                Year 3
                                            </p>
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <p className="sm-type-amp mb-2">
                                                Year 4
                                            </p>
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-lg-4">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-lg-4">
                                            <p className="text-align-right">
                                                Total
                                            </p>
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-holder-border">
                                <p className="sm-type-lead sm-type-lead--medium mb-2">
                                    4. Annual Cash Flow
                                </p>

                                <p className="sm-type-amp mb-2">
                                    <span className="sm-type-amp--medium redorange-highlight">
                                        NOTES:
                                    </span>{' '}
                                    In the Cash Flow section, you should add the
                                    expected income for each year, subtract the
                                    costs you have just calculated, to give a
                                    final balance for each of the four years.
                                    This should then be totalled down the 3
                                    options to give a Project Balance for each
                                    of the four years.
                                </p>

                                <div className="side-grey mb-2">
                                    <div className="row mb-2">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2">Year 1</div>
                                        <div className="col-lg-2">Year 2</div>
                                        <div className="col-lg-2">Year 3</div>
                                        <div className="col-lg-2">Year 4</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2">Income</div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2">Costs</div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2">Balance</div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2">
                                            <p className="sm-type-lead sm-type-lead--medium redorange-highlight">
                                                Project Balance
                                            </p>
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                        <div className="col-lg-2">
                                            <input className="form-control mb-2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2 mt-2">
                                    <button className="btn-solid-lg mt-4">
                                        Submit Work
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage5BusinessPlanPage
