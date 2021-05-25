import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage5Page = () => {
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
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Business Plan
                            </h2>

                            <p className="sm-type-lead mb-3">
                                The teams will complete a Business Plan that
                                will show how much money is required to be
                                raised to buy the land and to provide the
                                Capital Costs to get the 3 options off the
                                ground and it will include a list of funders who
                                ‘will’ provide those funds.
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-lead mb-3">
                                The Business Plan will also require the Groups
                                to show estimates of the costs and income
                                expected over the first 4 years of operations.
                                In some cases the figures required will be found
                                in the information provided for the Options, but
                                in some cases the Groups will need to make their
                                own ‘best estimates’ of either costs or income.
                            </p>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <p className="sm-type-lead mb-2">
                                    Complete the first section below, then move
                                    onto your business plan for each of your
                                    options.
                                </p>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-holder-border">
                                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                                1. Cost of the Land
                                            </p>
                                            <p className="sm-type-amp mb-2">
                                                <span className="sm-type-amp--medium redorange-highlight">
                                                    NOTE:
                                                </span>{' '}
                                                In this section you will need to
                                                refer to the{' '}
                                                <Link to="/student/stage-2/plan-of-glenclas">
                                                    map of Glenclas
                                                </Link>{' '}
                                                and using the scale, calculate
                                                the Asking Price of the area of
                                                land for sale. Then show how the
                                                sale will be funded.
                                            </p>

                                            <div className="row side-grey mb-2">
                                                <div className="col-lg-12">
                                                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                                                        Costs
                                                    </p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Area of land (ha)
                                                    </label>
                                                    <input className="form-control" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Price (£/ha)
                                                    </label>
                                                    <input className="form-control" />
                                                </div>

                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Asking price (£)
                                                    </label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row side-grey mb-2">
                                                <div className="col-lg-12">
                                                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                                                        How will the asking
                                                        price be funded?
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label className="form-label sm-type-amp">
                                                        Name of funder
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        value="Scottish Land Fund"
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <label className="form-label sm-type-amp">
                                                        Amount of funding (£)
                                                    </label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                            <p className="sm-type-amp sm-type-amp--medium mb-2">
                                                <span className="sm-type-amp--medium redorange-highlight">
                                                    NOTE:
                                                </span>{' '}
                                                Save your "Cost of the Land"
                                                then move onto step 2.
                                            </p>
                                            <div className="mb-2 mt-2">
                                                <button className="btn-solid-lg mt-4">
                                                    Save costs
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-holder-border">
                                    <p className="sm-type-lead sm-type-lead--medium mb-2">
                                        2. Complete your business plans.
                                    </p>
                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-5/business-plan">
                                                XXXXXX Business Plan
                                            </Link>
                                        </li>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-5/business-plan">
                                                XXXXXX Business Plan
                                            </Link>
                                        </li>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-5/business-plan">
                                                XXXXXX Business Plan
                                            </Link>
                                        </li>
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
                                        You have completed the Business Plan
                                        that will show how much money is
                                        required.
                                    </label>
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

export default Stage5Page
