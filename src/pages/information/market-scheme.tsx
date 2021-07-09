import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import HelpIcon from '../../assets/help-icon.svg'
import TickSheet from '../../assets/tick-sheet.svg'
import '../../scss/index.scss'
import InfoMarket from "../../assets/info-garden.svg";

const InfoMarketScheme = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "market-scheme.jpg" }) {
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
                <title>Market Scheme</title>
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
                                    Market Scheme
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoMarket />
                                </span>
                                Market scheme
                            </h2>

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                Scotland is well known for its food and drink
                                production, although the food, on the whole, is
                                either beef, lamb, salmon and soft fruit, but
                                not vegetables. In fact, over the years, the
                                lack of fresh vegetables, particularly through
                                the winter months, has sometimes been blamed for
                                various health issues in Scottish people.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The inclement weather, particularly in the west
                                of the country, creates challenging growing
                                conditions for fruit and vegetables. The
                                development of methods of ‘protected growing’
                                has led to a new movement of horticulture up and
                                down the west coast. However, other than one or
                                two greenhouses in the gardens of local
                                residents, there is little horticultural growing
                                and therefore, local food production (food grown
                                for local consumption) in this glen.
                            </p>

                            <p className="sm-type-bigamp mb-4">
                                At the eastern end of the land for sale is a
                                3-hectare plot which could be divided up to
                                provide 1 hectare of land for a Market Garden
                                Scheme. This could take the form of a mixture of
                                outside plots and completely protected growing
                                areas inside greenhouses or polytunnels. With
                                the use of low-powered LED lighting (and
                                potentially heating) this could provide
                                year-round growing of fruit and vegetables.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                One of the problems with both greenhouses and
                                polytunnels in the west of Scotland is that they
                                are susceptible to damage from high winds.
                                However, a community group on Shetland have
                                developed a design for an extremely strong
                                polytunnel, called the Polycrub, which has been
                                sold throughout the west of Scotland and even as
                                far away as the Falkland Islands.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Polycrubs are sold in a variety of sizes, but
                                the 4m width configuration is most appropriate
                                for a commercial setting. A 4x12m Polycrub would
                                cost £7500, including installation.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                Initially, the scheme could start with one
                                Polycrub and sell produce through the Village
                                Shop (if the shop is still open) as well as
                                ‘from the gate’. It would also be able to supply
                                local businesses such as the Glenclas Inn and
                                the Glenclas Lodge. In the future, if the
                                business was successful it could expand with
                                further Polycrubs and maybe a ‘veg box’ delivery
                                scheme.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The Scheme would require a manager to be
                                employed, although it might also attract
                                volunteers to help with certain aspects of the
                                business.
                            </p>

                            <div className="table table-proposal-two">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Setup costs</p>
                                    </div>
                                    <div className="cell">
                                        <p>£</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>4x12m Polycrub</p>
                                    </div>
                                    <div className="cell">
                                        <p>£7,500</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Tools, equipment</p>
                                    </div>
                                    <div className="cell">
                                        <p>£4,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Fencing</p>
                                    </div>
                                    <div className="cell">
                                        <p>£3,750</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Seeds, soil, compost</p>
                                    </div>
                                    <div className="cell">
                                        <p>£3,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Total</p>
                                    </div>
                                    <div className="cell">
                                        <p>£18,250</p>
                                    </div>
                                </div>
                            </div>

                            <div className="table table-proposal-two">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Running costs</p>
                                    </div>
                                    <div className="cell">
                                        <p>£/yr</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Manager</p>
                                    </div>
                                    <div className="cell">
                                        <p>£24,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Power and water</p>
                                    </div>
                                    <div className="cell">
                                        <p>£2,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Insurance</p>
                                    </div>
                                    <div className="cell">
                                        <p>£1,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Publicity</p>
                                    </div>
                                    <div className="cell">
                                        <p>£500</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Total</p>
                                    </div>
                                    <div className="cell">
                                        <p>£27,500</p>
                                    </div>
                                </div>
                            </div>

                            <p className="sm-type-bigamp mb-4">
                                Funding for a scheme like this could come from
                                Scottish Rural Development Programme (SRDP) the
                                Small Farms Grant Scheme, the Community Growing
                                Fund. The scheme will also attract funding from
                                agencies seeking to support schemes tackling
                                Climate Change as production of local food for
                                local consumption reduces food miles and
                                therefore carbon emissions.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                It is likely that 100% of the capital costs
                                would be funded. The business is likely to take
                                time to develop and so it is to be expected that
                                it would only ‘break even’ (income = costs) by
                                the third year. You will need to estimate income
                                over the first 4 years of the Scheme for
                                completion of the Business Plan.
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Funding Options
                                </p>
                                <p className="sm-type-bigamp">
                                    A commercial operation to grow year-round
                                    fruit and vegetables for the local community
                                    and for local businesses such as the Glancas
                                    Hotel and Lodge
                                </p>
                                <ul>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://forestryandland.gov.scot/business-and-services"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Forestry and Land Scotland
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://esmeefairbairn.org.uk/our-aims/our-natural-world/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Esmée Fairbairn Foundation
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.tnlcommunityfund.org.uk/funding/programmes/climate-action-fund-round-1"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Big Lottery - Climate Action
                                                Fund
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
                                        You have read the information for Market
                                        Garden Scheme.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have seen the funding options for
                                        Market Garden Scheme.
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

export default InfoMarketScheme
