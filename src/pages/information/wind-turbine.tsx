import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'

import HelpIcon from '../../assets/help-icon.svg'
import TickSheet from '../../assets/tick-sheet.svg'

import '../../scss/index.scss'

const InfoWindTurbine = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "wind-turbine.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "micro-hydro-figures.jpg" }) {
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
                <title>Wind turbine Scheme</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Information" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Wind turbine Scheme
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
                                On the hill behind the village there is an ideal
                                site for the potential installation of a wind
                                turbine, to generate electricity that could
                                power properties and businesses in the
                                community, sell power to the Grid at times of
                                low consumption and provide an income to
                                community projects.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                The construction of a wind turbine is relatively
                                expensive and it is not easy to find the funding
                                required. Bank loans and share schemes are often
                                needed for schemes like this.
                            </p>

                            <h3 className="sm-type-drum sm-type-drum--medium mb-4">
                                What follows is a transcript form an interview
                                with an industry expert, with questions relating
                                directly to the Glenclas site:
                            </h3>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                What size and make of turbine would be
                                appropriate for the Glenclas site?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Barra has a population of about 1000 and has one
                                900kW turbine. Enercon would still be
                                appropriate as they have a service base in Skye
                                and lots of turbines on the West Coast. Enercon
                                are happy to supply small projects still, unlike
                                other makes such as Vestas. Saying that, it can
                                be hard to get turbines of 1MW size these days
                                as manufacturers are concentrating on larger and
                                larger turbines. Enercon may also do their 500kW
                                turbines which are called Enercon E33. Gigha has
                                3 2nd hand turbines and one Enercon E33.
                            </p>

                            <p className="sm-type-guitar lead sm-type-bigamp--medium mb-2">
                                What would the maximum output of the turbine be?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                At top speed wind an Enercon such as the Barra
                                one would do 900kW. The capacity factor for
                                Barra is say 40%, so it will generate 40% of
                                900kW on average over a year. So, I would
                                estimate 40% x 900 X 365days X 24hrs =
                                3153600kWh. You can do the same calculation for
                                Glenclas but use a capacity factor of 35%, I
                                estimate. It might be good to look at an Enercon
                                900kW versus an Enercon 500kW.
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-bigamp mb-4">
                                    Using the same assumption as we used for the
                                    Hydro Scheme - The average house in the UK
                                    uses about 5000kWh/year, we can calculate
                                    how many houses could be powered by the wind
                                    turbine (if they used electricity at a
                                    constant consumption throughout the day and
                                    night).
                                </p>
                                <p className="sm-type-bigamp mb-4">
                                    Glenclas wind turbine: 35% x 900 x 365days x
                                    24hrs = XKwh
                                </p>
                                <p className="sm-type-bigamp">
                                    The number of houses that could be powered
                                    by the system = X/5000 houses
                                </p>
                            </div>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                What would the average output be likely to be
                                for a west-coast mainland location at about
                                105ft altitude?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                I'm guessing a capacity factor of 35% as Barra
                                turbine is quite high on Gob Sgurrival hill,
                                perhaps about 105 ft, and Barra generates the
                                most, I think, followed by Tiree. I think you're
                                safe to go with 35%. Usually you can look up
                                NOABL wind data to get an idea of the wind
                                speed, and then if it looks good a community
                                group would put up a 10m met mast for a year and
                                use the data to look at wind speed, direction
                                and turbulence.
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                What would the construction costs be likely to
                                be?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                An estimate of £1.2m for a standard site,
                                however with the length of the road to Glenclas
                                and the likely weak grid which would need
                                upgraded I'd say more like £1.5m.
                            </p>

                            <p className="sm-type-guitar mb-2">
                                <span className=" sm-type-bigamp--medium">
                                    Given we don't have FiTs anymore, what
                                    returns might be expected?
                                </span>{' '}
                                (I'm assuming that it is better to sell the
                                power to locals in preference to selling to the
                                grid as much as possible.)
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Yes, no FiTs (
                                <a
                                    href="https://www.ofgem.gov.uk/environmental-programmes/fit"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://www.ofgem.gov.uk
                                </a>
                                ) and now we only have ‘Contracts for
                                Difference’ which are competitive and only work
                                out for large companies with lots of capital.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                I think electricity still sells at 4.5p per kWh
                                (
                                <a
                                    href="https://www.ofgem.gov.uk/data-portal/all-charts/policy-area/electricity-wholesale-markets"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://www.ofgem.gov.uk
                                </a>
                                ). You're correct about selling locally. Best to
                                look at if there is a big user of energy in the
                                area and sell direct to them. E.g. a school,
                                factory etc. Environmentally it could be a great
                                project if say, there is a swimming pool which
                                is heated with oil and it is swapped to electric
                                heating via a turbine. Then you could look at a
                                good price for both, e.g. 10p/kWh. Instead of
                                householders paying 17.5p/kWh for heating they
                                pay 10p. And instead of being paid 4.5p/kWh for
                                generation from the turbine the community would
                                get 10p. Win-win!
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                Do we assume a lifespan of about 20 years?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Yes, stick with 20 years.
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                Where would the funding for such a project come
                                from these days?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Triodos Bank are still interested in loan
                                finance, other banks are not interested at such
                                small scale. Funders such as the BIG Lottery are
                                still interested in funding renewables projects,
                                it's just that all the best turbine sites have
                                been cherry picked by developers in Scotland so
                                there aren't many financially viable ones left.
                                Therefore, if they wanted to go for grant
                                funding, creating a renewables project which
                                helps with fuel poverty (e.g. supplies people's
                                storage heaters like with the ACCESS project in
                                Mull or REFLEX in Orkney) or has environmental
                                benefits such as switching from oil to renewable
                                electricity is much more interesting for current
                                funders. We can't go to Europe for funding
                                anymore so we've been going to UKRI (
                                <a
                                    href="https://www.ukri.org/apply-for-funding"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://www.ukri.org
                                </a>
                                ) and also BEIS (
                                <a
                                    href="https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://www.gov.uk
                                </a>
                                ).
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                Is it possible to get 100% funding and if not
                                how do other communities find the difference?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                It isn't possible to get 100% funding like in
                                the old days, unless there were amazing side
                                benefits for fuel poverty like I mention above.
                                It's just too difficult to get it all to stack
                                up without FiTs. North Uist Development Company
                                are the most recent community turbine project to
                                do a share holding that I know of. They got in
                                before FiT closed and their project is not great
                                for returns. The shares certainly made the
                                difference for raising the mezanine finance
                                which brought the banks in.
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                How much would you expect the running costs to
                                be for such a turbine?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Servicing of a 900kw turbine would come to about
                                £18k, £12k for rates, £14k for staff, £5k for
                                imported electricity for work on the turbine.
                                So, with a few extra odds and ends, in year 1 it
                                would come to around £24k and by year 6 that
                                would rise to £70k due to extra servicing
                                required.
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                What would the insurance costs be?
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Insurance would cost £11k.
                            </p>

                            <p className="sm-type-guitar sm-type-bigamp--medium mb-2">
                                Is there anything else that you can think of
                                that is of vital importance?
                            </p>
                            <p className="sm-type-bigamp mb-2">
                                You may want to consider some of the aspects of
                                a feasibility study-
                            </p>
                            <ul>
                                <li className="mb-2">Wind regime</li>
                                <li className="mb-2">
                                    Access- how will the turbine get there? Is
                                    the road too narrow and twisty to take the
                                    trucks with the large blades on it? And can
                                    you build a road to the site (is it a bog or
                                    on a cliff). In Barra the turbine landed on
                                    the beach on a landing craft then was driven
                                    up the hill!
                                </li>
                                <li className="mb-2">Planning permission</li>
                                <li className="mb-2">Noise</li>
                                <li className="mb-2">Flicker</li>
                                <li className="mb-2">
                                    Environmental designations...
                                </li>
                            </ul>

                            <p className="sm-type-bigamp mb-2">
                                Using the figures provided by the industry
                                expert, here are the projections over 6 years.
                                The first table is based on selling the
                                electricity at 5p per unit and the second is if
                                the electricity is sold at 10p per unit. There
                                is a row in both tables for Community Projects –
                                this has been left blank as there will only be
                                money for these projects once the Running
                                Balance is positive (it would then be shown in
                                green).
                            </p>

                            <p className="sm-type-bigamp mb-2">
                                Clearly, if funding was found from other sources
                                for part of the scheme then the bank loan would
                                be reduced and the Running Balance would become
                                positive quicker, allowing funds to be available
                                for the Community Projects. The same would be
                                true if a Community Share Scheme was used to
                                raise money.
                            </p>

                            <a
                                target="_blank"
                                href="/static/e546e23c9bfc64e4b2736e8cd188628a/f7607/micro-hydro-figures.webp"
                            >
                                <GatsbyImage
                                    image={
                                        data.image2.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </a>
                            <p className="sm-type-bigamp mb-4">
                                <a
                                    target="_blank"
                                    href="/static/e546e23c9bfc64e4b2736e8cd188628a/f7607/micro-hydro-figures.webp"
                                >
                                    View larger figures image.
                                </a>
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Funding Options
                                </p>
                                <p className="sm-type-bigamp">
                                    Situated on the hill behind the village.
                                    Providing both power for the community and
                                    an income from electricity sold onto the
                                    grid
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
                                                href="https://www.foundationscotland.org.uk/set-up-fund/fund-management-for-communities"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Foundation Scotland
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
                                        You have read the information for Wind
                                        turbine Scheme.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have seen the funding options for
                                        Wind turbine Scheme.
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

export default InfoWindTurbine
