import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../components/student/ReadQuesty'
import { DevOptionsChecklist } from './development-options'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'
import InfoForest from '../../assets/info-forest.svg'

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
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Info Hub',
                                        url: '/student/information',
                                    },
                                    {
                                        displayName: 'Development Options',
                                        url: '/information/development-options',
                                    },
                                ]}
                                currentDisplayName="Forestry Scheme"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoForest />
                                </span>
                                Forestry Scheme
                            </h2>
                            <ReadQuesty
                                text="Planting of 15 acres of mixed woodland. Potential for income from
                                    softwood, amenity value (woodland
                                    walks) and habitat creation as well
                                    as climate mitigation."
                            />

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
                                    Funding Options links
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
                                    Back to the options
                                </Link>
                            </p>
                        </div>
                        <DevOptionsChecklist optionName="Forestry Scheme" />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default InfoForestryScheme
