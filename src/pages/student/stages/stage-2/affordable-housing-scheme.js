import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import InfoPick from '../../../../assets/info-pick.svg'

const Stage2HousingPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "modular-house.jpg" }) {
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
                <title>
                    Stage 2 - Lay The Foundations - Affordable Housing
                </title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Affordable Housing Scheme
                            </h2>

                            <p className="sm-type-bigamp mb-4">
                                A site is available for the construction of 3
                                pairs of semi-detached houses behind an existing
                                row of houses.
                            </p>
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image5.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                The Wee Housing Company
                                (www.theweehousecompany.co.uk), constructs
                                modular houses which are 95% built in their
                                Ayrshire factory, with the benefit of economies
                                of scale normally reserved for larger housing
                                developments. Materials are bulk ordered and
                                trades move between houses as required. The
                                factory setting also promotes a high quality of
                                build; tradesmen work in standardised conditions
                                and materials are stored in a warm, dry
                                environment rather than being exposed to the
                                elements. Modular build allows the homes to be
                                built much quicker than traditional building
                                methods. Wee Houses are completed to ceiling
                                height, with kitchens, bathrooms, plumbing and
                                electrics already fitted before they leave the
                                factory. They are fully complete and ready to
                                move in within 3 weeks of being delivered to
                                site.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                The Wee House Company, working with Mull and
                                Iona Community Trust (MICT), and Ulva School
                                Community Association (USCA), designed and built
                                four affordable houses for two locations on the
                                Isle of Mull; Oskamull and Acharonich. Homes
                                were constructed in the company’s Ayrshire
                                factory before being transported to site with
                                ready-fitted kitchens, bathrooms, plumbing and
                                electrics. The housing is a mix of two- and
                                three-bedroom houses.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                Delivering affordable long-term rental homes
                                will have a real positive impact for the local
                                community at Ulva Ferry, including an increase
                                in the primary school roll, and the number of
                                working age adults to work locally which will
                                boost the fragile local economy.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                For the tenants, after years of moving from one
                                private let to another, they now have a secure
                                home which ensures stability for their families.
                                The Passive House style has enabled heating
                                bills of just £350 per year, which along with
                                social rent levels, ensures the homes are truly
                                affordable to live in.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                MICT Convenor, Sandy Brunton, added, “affordable
                                housing is consistently a priority issue across
                                Mull and Iona and this project is a really good
                                example of community powered regeneration”.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                The projected cost of the development in
                                Glenclas would be £1,080,000 for 6
                                semi-detached, 3-bedroom houses.
                            </p>

                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                Grants would be available from:
                            </p>

                            <div className="table table-proposal-two">
                                <div className="roww">
                                    <div className="cell">
                                        <p>Highland Council:</p>
                                    </div>
                                    <div className="cell">
                                        <p>£50,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Trusthouse Foundation:</p>
                                    </div>
                                    <div className="cell">
                                        <p>£200,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Quaker Housing Trust:</p>
                                    </div>
                                    <div className="cell">
                                        <p>£150,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Rural Housing Fund:</p>
                                    </div>
                                    <div className="cell">
                                        <p>£600,000</p>
                                    </div>
                                </div>
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                Leaving a remaining £80,000 to be obtained via a
                                bank mortgage, this would result in monthly
                                repayments of £380 per month over 25 years, at
                                an interest rate of 3%.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                The tenants would pay a rent of £500 each per
                                month, giving a total of £3000 per month.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                <Link href="/student/stage-3">
                                    Back to Stage 3
                                </Link>
                            </p>
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
                                    <Link href="/student/stage-2">
                                        Back to Stage 2
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage2HousingPage
