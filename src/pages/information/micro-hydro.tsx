import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'

import HelpIcon from '../../assets/help-icon.svg'
import Ticklr from '../../assets/tick-lr.svg'
import Ticklr2 from '../../assets/tick-lr2.svg'
import TickSheet from '../../assets/tick-sheet.svg'

import '../../scss/index.scss'
import InfoHydro from "../../assets/info-hydro.svg";

const InfoMicroHydro = () => {
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
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Micro Hydro</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Information" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">Team Hub</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="crumb">
                                    <Link to="/information">Information</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Micro-hydro
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoHydro />
                                </span>

                                Micro-hydro scheme
                            </h2>

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image5.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                At 150m above the village of Glenclas is a loch
                                which is a reserve of water from an area of
                                approximately 3 km2.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The outflow from this loch, Loch na Lochain,
                                comes down the hill behind the village of
                                Glenclas, to the south, and the water passes
                                under the road before it spills into the sea.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                A small weir and intake would be built at the
                                outflow from Loch na Lochain and water can then
                                be channelled to a ‘forebay’ tank by a small
                                canal or ’leat’. The forebay acts as a settling
                                tank, in which the water is slowed sufficiently
                                for suspended particles to settle out. The
                                forebay is protected by a rack of metal bars (a
                                ’trash rack’) which filters out water-borne
                                debris. A pressure pipe, or ‘penstock’, carries
                                the water from the forebay directly down to the
                                turbine, which is enclosed in the powerhouse
                                together with the generator and control
                                equipment. After leaving the turbine, the water
                                is discharged into a ‘tailrace’ canal back into
                                the watercourse.
                            </p>
                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                The system therefore requires:
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                Weir
                                <span className="ticktrbl hydro-tick">
                                    <Ticklr />
                                </span>
                                Leat
                                <span className="ticktrbl hydro-tick">
                                    <Ticklr2 />
                                </span>
                                Forebay
                                <span className="ticktrbl hydro-tick">
                                    <Ticklr />
                                </span>
                                Penstock
                                <span className="ticktrbl hydro-tick">
                                    <Ticklr2 />
                                </span>
                                Powerhouse
                                <span className="ticktrbl hydro-tick">
                                    <Ticklr />
                                </span>
                                Tailrace
                            </p>

                            <p className="sm-type-bigamp sm-type-bigamp--medium mb-2">
                                The Power of the turbine (P) depends on a number
                                of factors:
                            </p>
                            <ul className="mb-4">
                                <li className="mb-2">
                                    The Head H (m) – the vertical fall of the
                                    water (the higher the better), in this case
                                    150m
                                </li>
                                <li className="mb-2">
                                    The Flow Rate Q (m3/s) – the volume of water
                                    passing through the turbine per second
                                </li>
                                <li className="mb-2">
                                    The ‘water-to-wire’ efficiency – small hydro
                                    system tend to have an efficiency of about
                                    70%
                                </li>
                            </ul>

                            <p className="sm-type-bigamp sm-type-bigamp--medium mb-2">
                                These factors can be expressed in the formula:
                            </p>
                            <p className="sm-type-lead mb-4">
                                <span className="sm-type-amp--medium">P</span>{' '}
                                (kW) = 7 x{' '}
                                <span className="sm-type-amp--medium">Q</span>{' '}
                                (m3/s) x{' '}
                                <span className="sm-type-amp--medium">H</span>{' '}
                                (m)
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                We know the Head (150m) and the efficiency of a
                                small system (70%) but we must calculate the
                                expected flow rate. This is dependent on the
                                volume of water passing through the system each
                                second.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                By studying a map it is possible to estimate
                                that the catchment area (the area of land that
                                drains water into Loch na Lochain) is
                                approximately 3.4km2 or 3,400,000m2. Studying
                                the SEPA rainfall data for the nearest weather
                                station (Killilan), gives us the following
                                figures for annual rainfall figures over the
                                past 5 years:
                            </p>

                            <div className="table table-pricing">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Year</p>
                                    </div>
                                    <div className="cell">
                                        <p>Total Annual Rainfall (m)</p>
                                    </div>
                                    <div className="cell">
                                        <p>Average Annual Rainfall</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>2016</p>
                                    </div>
                                    <div className="cell">
                                        <p>2.0752</p>
                                    </div>
                                    <div className="cell">
                                        <p>?</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>2017</p>
                                    </div>
                                    <div className="cell">
                                        <p>2.2250</p>
                                    </div>
                                    <div className="cell">
                                        <p>?</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>2018</p>
                                    </div>
                                    <div className="cell">
                                        <p>1.9418</p>
                                    </div>
                                    <div className="cell">
                                        <p>?</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>2019</p>
                                    </div>
                                    <div className="cell">
                                        <p>2.1436</p>
                                    </div>
                                    <div className="cell">
                                        <p>?</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>2020</p>
                                    </div>
                                    <div className="cell">
                                        <p>2.6550</p>
                                    </div>
                                    <div className="cell">
                                        <p>?</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="task ticker mb-2">
                                <span className="ticker-sheet">
                                    <TickSheet />
                                </span>
                                <span className="sm-type-lead">
                                    Task to complete:
                                </span>
                            </h3>
                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                Calculate the Average Annual Rainfall (m):
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Calculate the Average Annual Volume of rain
                                falling on the catchment area of Loch na Lochain
                                (m3):
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                (Catchment area (m2) x 5 Year Annual Rainfall
                                (m))
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                Some water will be lost by evaporation and
                                transpiration (evaporation through plants,
                                however, we will assume that 100% of this water
                                flows into the loch and then through our
                                turbine.
                            </p>

                            <p className="sm-type-bigamp sm-type-bigamp--medium mb-4">
                                Now calculate the flow rate (Q) through our
                                turbine (m3/s) – to do this you need to work out
                                how many seconds there are in a year and divide
                                that number into your average annual volume of
                                rain:
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Seconds in a year: 365 days x 24 hours x 60
                                minutes x 60 seconds =
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                You now have enough information to calculate the
                                size of turbine (Power) and would be suitable
                                for this site:
                            </p>

                            <p className="sm-type-lead mb-4">
                                <span className="sm-type-amp--medium">P</span>{' '}
                                (kW) = 7 x{' '}
                                <span className="sm-type-amp--medium">Q</span>{' '}
                                (m3/s) x{' '}
                                <span className="sm-type-amp--medium">H</span>{' '}
                                (m)
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                It is estimated that turbines of different sizes
                                at this site would cost the following:
                            </p>

                            <div className="table table-proposal">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Turbine size (kW)</p>
                                    </div>
                                    <div className="cell">
                                        <p>Cost (£m)</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>150</p>
                                    </div>
                                    <div className="cell">
                                        <p>0.75</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>200</p>
                                    </div>
                                    <div className="cell">
                                        <p>0.85</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>250</p>
                                    </div>
                                    <div className="cell">
                                        <p>1.0</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>400</p>
                                    </div>
                                    <div className="cell">
                                        <p>2.0</p>
                                    </div>
                                </div>
                            </div>

                            <p className="sm-type-lead sm-type-lead--medium mb-4">
                                Estimated cost for a micro-hydro scheme at
                                Glenclas:
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                The cost of insurance for a scheme like this,
                                which includes public liability and mechanical
                                breakdown, would cost £10,000/year.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The maintenance costs for a system like this are
                                very low and would be about £1000/year.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The average house in the UK uses about
                                5000kWh/year (that is equivalent to 5000 hours
                                of 1kW of electricity, or 2500 hours of 2kW of
                                electricity).
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Our micro-hydro scheme will produce 250kW of
                                energy for every hour of a year. There are 24 x
                                365 = 2,190,000kWh, however, this is reduced by
                                about 50% through efficiency losses, hence a
                                figure of 1,095,000kWh is to be expected.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The number of houses that could be powered by
                                the system = 1095000/5000 = 219 houses.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                However, the power produced will be very
                                consistent and will not be able to take account
                                of high demand times (morning) or low demand
                                times (night) and so the houses will still be
                                connected to the Grid and will take some power
                                from there, during high demand. Also, the scheme
                                will sell to the grid at low demand times.
                                Unfortunately, the Grid buys electricity at a
                                much lower level than it sells it.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                It can be assumed that the whole village would
                                be powered by the scheme, even though, they
                                would have to buy from the Grid at high demand
                                times. The villagers would pay for their
                                electricity from the scheme but could be charged
                                only 5p per unit rather than 17.5p per unit from
                                one of the large energy companies from the grid.
                                These payments would cover the running costs of
                                the hydro scheme, as well as repayments to the
                                bank.
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <a
                                    target="_blank"
                                    href="/static/e546e23c9bfc64e4b2736e8cd188628a/c580c/micro-hydro-figures.jpg"
                                >
                                    <GatsbyImage
                                        alt=""
                                        image={
                                            data.image1.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </a>
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                <a
                                    target="_blank"
                                    href="/static/e546e23c9bfc64e4b2736e8cd188628a/c580c/micro-hydro-figures.jpg"
                                >
                                    View larger figures image.
                                </a>
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                If, however, the electricity purchased from the
                                scheme by the homeowners was charged at 10p per
                                unit (still at 57% the cost of electricity
                                purchased from the Grid), then the Running
                                Balance falls much more quickly and there would
                                be funds available for Community projects.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Another option would be to raise funds for the
                                construction of the scheme through a Community
                                Share Option, inviting all those who would
                                benefit from cheaper electricity to purchase
                                share in the scheme. This could reduce the bank
                                loan by 25% to 50%, depending on the success of
                                the Share Option.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Yet another option would be to find funding from
                                other sources to reduce the bank loan further.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                There is a row in both tables for Community
                                Projects – this has been left blank as there
                                will only be money for these projects once the
                                Running Balance is positive (it would then be
                                shown in green).
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Funding Options
                                </p>
                                <p className="sm-type-bigamp">
                                    Making use of the stream coming off the hill
                                    behind the village. Providing both power for
                                    the community and an income from electricty
                                    sold onto the grid
                                </p>
                                <ul>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.communityenergyscotland.org.uk/community-support/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Community Energy Scotland
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.localenergy.scot/funding/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Community and Renewable Energy
                                                Scheme (CARES)
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.keepscotlandbeautiful.org/ccaf"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Community Climate Asset Fund
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                <Link to="/information/development-options">
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
                                    <Link to="/information/development-options">
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
                                        Micro-hydro Scheme.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have seen the funding options for
                                        Micro-hydro Scheme.
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

export default InfoMicroHydro
