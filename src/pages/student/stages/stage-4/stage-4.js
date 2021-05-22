import React, {useState} from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import TickSheet from "../../../../assets/tick-sheet.svg";


const Stage4Page = () => {
    const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "progress-plans.jpg" }) {
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
                <title>Stage 4 - Progress Your Plans</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 4" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Progress Your Plans
                            </h2>

                            <p className="sm-type-lead mb-3">NEED TEXT??? The teams are required to carry out a Feasibility Study on a short list of 3 Options. In order to narrow down their long list they are asked to complete a SWOT Analysis on each of the 5 Options in their Long List. Once they have their short list of 3, they will complete the Feasibility Study template, which asks them to consider the benefits of each Option to the Community, reasons why they feel that each of the three Options is likely to succeed and finally to identify the risks that might cause each Option to fail.</p>
                            <p className="sm-type-lead mb-3">They should use their SWOT Analysis and also the information provided about each Option to complete the Feasibility Study template.</p>



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
                                <p className="sm-type-lead mb-2">
                                    Once you have completed your SWOT analysis proceed to submitting your findings.
                                </p>
                                <div className="form-holder-border">
                                <ul>
                                    <li className="sm-type-guitar">Complete your <Link to="/student/stage-4/feasibility-study-one">Feasibility Study Options here</Link>.</li>
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
                                    Use the SWOT templates to help you decide.
                                </p>

                                <p className="sm-type-amp">
                                    Your team is required to carry out a Feasibility Study on a short list of 3 Options
                                </p>
                            </div>
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage4Page
