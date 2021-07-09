import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'

import HelpIcon from '../../assets/help-icon.svg'
import TickSheet from '../../assets/tick-sheet.svg'

import '../../scss/index.scss'
import InfoForest from "../../assets/info-forest.svg";

const InfoForestryScheme = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "forestry-scheme.jpg" }) {
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
                <title>Forestry Scheme</title>
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
                                    Forestry Scheme
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoForest />
                                </span>
                                Forestry Scheme
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

                            <p className="sm-type-bigamp mb-2">
                                On the hill behind, and to the south west, of
                                the village of Glenclas is an area of land of
                                approximately 3 hectares which is currently
                                rough grazing.
                            </p>
                            <p className="sm-type-bigamp mb-2">
                                The forestry proposal is for this are to be
                                planted with native broadleaved trees, such as
                                hazel, oak and birch. This would recreate a
                                native forest which would provide valuable
                                habitat for a wide range of species. It would
                                contribute to national climate mitigation
                                strategies and the storage of carbon in the soil
                                would exceed that sored in softwood plantations.
                                From the community’s point of view the forest
                                would provide the potential of woodland walks
                                and enhance the scenic beauty of the area for
                                generations to come.
                            </p>
                            <p className="sm-type-bigamp mb-2">
                                There is also the possibility of grazing cattle
                                amongst the trees, thereby continuing with the
                                agricultural productivity of the land.
                            </p>
                            <p className="sm-type-bigamp mb-2">
                                The forest would be eligible for two grant
                                schemes:
                            </p>

                            <p className="sm-type-bigamp mb-2">
                                The Woodland Creation part of the Forestry Grant
                                Scheme (
                                <a
                                    href="https://www.forestry.gov.scot/support-regulations/woodland-creation"
                                    target="_blank"
                                    rel="external"
                                >
                                    www.forestry.gov.scot/support-regulations/woodland-creation
                                </a>
                                ), which is provided to support the creation of
                                native broadleaved woodland (up to a maximum of
                                5 hectares).
                            </p>
                            <p className="sm-type-bigamp sm-type-bigamp--medium mb-2">
                                The funding available for this 3ha site would
                                be:
                            </p>

                            <div className="table table-proposal-two">
                                <div className="roww">
                                    <div className="cell">
                                        <p>Initial Planting</p>
                                    </div>
                                    <div className="cell">
                                        <p>£5,520</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Fencing and crop protection</p>
                                    </div>
                                    <div className="cell">
                                        <p>£4,014</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>5 years crop maintenance</p>
                                    </div>
                                    <div className="cell">
                                        <p>£4,080</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Total grant (5 years)</p>
                                    </div>
                                    <div className="cell">
                                        <p>£13,614</p>
                                    </div>
                                </div>
                            </div>

                            <p className="sm-type-bigamp mb-2">
                                Future Woodlands Scotland (
                                <a
                                    href="https://www.futurewoodlands.org.uk"
                                    target="_blank"
                                    rel="external"
                                >
                                    www.futurewoodlands.org.uk
                                </a>
                                ) is a fund to develop and enhance native
                                woodland and payments of £100/ha per year for 20
                                years are available.
                            </p>

                            <p className="sm-type-bigamp mb-2">
                                If volunteers were used to plant the trees, it
                                would be possible to fund this scheme 100% with
                                grants, including maintenance payments for up to
                                20 years.
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar sm-type-guitar--medium">
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                    Funding Options
                                </p>
                                <p className="sm-type-bigamp">
                                    On the extensive hill behind the village, an
                                    area of some 15 acres to be planted as mixed
                                    woodland. Potential for income from the
                                    softwood, amenity value (woodland walks) and
                                    habitat creation as well as climate
                                    mitigation.
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
                                                href="https://www.tnlcommunityfund.org.uk/funding/programmes/grants-for-community-led-activity"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Community Fund - Community Led
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
                                                Community Fund - Climate Action
                                                Fund
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="sm-type-bigamp">
                                            <a
                                                href="https://www.nature.scot/professional-advice/land-and-sea-management/managing-land/scottish-rural-development-programme"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Scottish Rural Development
                                                Programme - Forestry Grant
                                                Scheme{' '}
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
                                        Forestry Scheme.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        You have seen the funding options for
                                        Forestry Scheme.
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

export default InfoForestryScheme
