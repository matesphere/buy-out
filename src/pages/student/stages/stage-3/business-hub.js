import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import Ticklr from '../../../../assets/tick-lr.svg'
import Ticklr2 from '../../../../assets/tick-lr2.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
const Stage3BusinessHub = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "business-hub.jpg" }) {
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
                <title>Stage 3 - Business Hub</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 3" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Business hub Scheme
                            </h2>

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                There are currently no facilities available for
                                any new businesses to move into the area. This
                                therefore restricts the possibility of new
                                businesses moving into the area. When a property
                                does come onto the market, it is often a
                                traditional, stone-built house that is difficult
                                to convert into useable spaces and is also
                                energy inefficient.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The answer is to go for a new build that is
                                relatively open plan in design, that can be
                                reconfigured internally according to need and is
                                highly energy efficient.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The area of land behind the Village Shop would
                                provide convenient access to the centre of the
                                village and be close to local amenities. If the
                                Hydro or Wind Turbine schemes were to go ahead,
                                then the Hub would potentially benefit from the
                                favourable electricity rates.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The Wee House Company (
                                <a
                                    href="https://theweehousecompany.co.uk"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://theweehousecompany.co.uk/
                                </a>
                                ), which is being considered for the possible
                                Affordable Housing Scheme could also be used for
                                this scheme. The buildings produced by this
                                company are based on modular designs that can be
                                reconfigured into a wide variety of designs.{' '}
                            </p>

                            <p className="sm-type-bigamp sm-type-bigamp--medium">
                                The advantages of modular design are as follows:
                            </p>
                            <ul>
                                <li className="mb-2">
                                    It’s a cost-effective method of creating a
                                    custom home for your plot.
                                </li>
                                <li className="mb-2">
                                    By building 95% of your home in our Ayrshire
                                    factory, you benefit from the economies of
                                    scale normally reserved for larger housing
                                    developments.
                                </li>
                                <li className="mb-2">
                                    Materials are bulk ordered and trades move
                                    between houses as required.
                                </li>
                                <li className="mb-2">
                                    The factory setting also promotes a high
                                    quality of build; tradesmen work in
                                    standardised conditions and materials are
                                    stored in a warm, dry environment rather
                                    than being exposed to the elements.
                                </li>
                                <li className="mb-2">
                                    Modular build allows your home to be built
                                    much quicker than traditional building
                                    methods.
                                </li>
                                <li className="mb-2">
                                    Wee Houses are completed to ceiling height,
                                    with kitchens, bathrooms, plumbing and
                                    electrics already fitted before they leave
                                    the factory.
                                </li>
                                <li className="mb-2">
                                    They are fully complete and ready to move in
                                    within 3 weeks of being delivered to site.
                                </li>
                            </ul>
                            <p className="sm-type-bigamp mb-4">
                                Initially it would be anticipated to create a
                                building, equivalent to a pair of semi-detached
                                houses that would provide a total of 4 units of
                                space, with each pair having shared kitchen and
                                toilet facilities. The beauty of the modular
                                design is that this initial structure could be
                                added to, making further units available if
                                required.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Each unit could be an open plan office space, or
                                it could be used as a studio of workshop by
                                artists.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The cost of building the initial 4-unit Hub
                                would be £300,000.
                            </p>
                            <p className="sm-type-bigamp sm-type-bigamp--medium">
                                Funding would be available from:
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Funding would be available from: Scottish Land
                                Fund, Ecology Building Society and/or the
                                Robertson Trust.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The tenants would pay a rent of £600 each per
                                month, giving a total of £2400 per month.
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Funding Options
                                </p>
                                <p className="sm-type-bigamp">
                                    Siutated off the main thoroughfare, a new
                                    build that could be divided into units for
                                    offices and / or workshops
                                </p>
                                <ul>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.tnlcommunityfund.org.uk/funding/programmes/scottish-land-fund#section-1"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Scottish Land Fund
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.ecology.co.uk/mortgages/community-and-commercial-mortgages/sustainable-business/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Ecology Building Society
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.therobertsontrust.org.uk/funding/community-building-grants/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Robertson Trust
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                <Link to="/student/stage-3/glenclas-map-options">
                                    Back to the map
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
                                    <Link to="/student/stage-3/glenclas-map-options">
                                        Back to the map
                                    </Link>
                                </p>
                            </div>

                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                            <div className="side-grey">
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have read the information for
                                        Business hub Scheme.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have seen the funding options for
                                        Business hub Scheme.
                                    </p>
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

export default Stage3BusinessHub
