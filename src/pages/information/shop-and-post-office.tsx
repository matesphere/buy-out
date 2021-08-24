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
import InfoShop from '../../assets/info-shop.svg'

import '../../scss/index.scss'

const InfoShopPostOffice = ({ data }) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         image1: file(relativePath: { eq: "shop-post-office.jpg" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: CONSTRAINED)
    //             }
    //         }
    //     }
    // `)

    console.log(data)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Shop and Post Office</title>
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
                                currentDisplayName="Shop & Post Office"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoShop />
                                </span>
                                Shop and Post Office
                            </h2>

                            <ReadQuesty
                                text="A purpose-built mini-supermarket and post office,
                                    to service the local community and visitors.
                                    Could be situated just off the 'High
                                    Street'."
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

                            <p className="sm-type-bigamp mb-4">
                                The Glenclas Village Shop and Post Office has
                                been run by the current shop keepers for some 23
                                years. However, they have been looking to retire
                                for several years, but have been unable to find
                                anyone to take on the lease from the local
                                Landowner, who owns the property. The Landowner
                                would therefore look to lease the property as a
                                residential home unless the Community wish to
                                include the purchase of the property together
                                with the Community Buyout of the land.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The shop is relatively small and currently many
                                local people only use it to purchase weekly
                                ‘essentials’, preferring to do their main
                                shopping in the large supermarket at the nearest
                                town some 26 miles away. However, this is far
                                from satisfactory for the more elderly members
                                of the community who rely on the Village Shop
                                and also the Post Office.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The Plunkett Foundation (a UK national charity
                                that supports rural communities to tackle the
                                issues they face through community business)
                                published a revised edition of its ‘Community
                                Shops: A better form of business’ in 2019 (
                                <a
                                    href="https://plunkett.co.uk/wp-content/uploads/PF_BB_SHOPS19_web-version-1.pd"
                                    target="_blank"
                                    rel="external"
                                >
                                    https://plunkett.co.uk/wp-content/uploads/PF_BB_SHOPS19_web-version-1.pdf
                                </a>
                                ). In the ‘Key Facts’ is states:
                            </p>

                            <ul>
                                <li className="mb-2">
                                    Community shops have an average turnover of
                                    £153,000 per year
                                </li>
                                <li className="mb-2">
                                    The majority of community shops have between
                                    100 and 300 members/shareholders
                                </li>
                                <li className="mb-2">
                                    Community shops average at around 20
                                    volunteers per shop
                                </li>
                                <li className="mb-2">
                                    The majority of community shops cost between
                                    £26,000 - £50,000 to set up, with community
                                    shares making up the majority of that
                                </li>
                                <li className="mb-2">
                                    Post Offices within Community Shops are
                                    increasingly seen as a service to the
                                    community rather than an income generator
                                    with many shops now just acting as a
                                    drop-off facility for parcels and a place to
                                    buy stamps
                                </li>
                                <li className="mb-2">
                                    The long-term survival rate of community
                                    shops was 94%
                                </li>
                            </ul>

                            <p className="sm-type-bigamp mb-4">
                                The sale price for the property would be
                                £170,000 which would include the shop floor and
                                a small kitchen area on the ground floor and on
                                the first floor, a 2 bedroomed flat with
                                kitchen, living room, study and bathroom.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The purchase of the shop would be funded by the
                                Scottish Land Fund.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The aim would be to run the shop with
                                volunteers, overseen by a ‘live-in’ Shop
                                Manager.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The salary for the Shop Manager would be £20,000
                                per year together with the accommodation
                                provided by the 2 bedroomed flat.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The start-up costs for setting up the business
                                would be £30,000 (including the expected initial
                                loss from the first year of trading), which it
                                would be hoped would be covered by the Community
                                buying shares in the business. There would be no
                                dividends paid to the shareholders (no annual
                                return to those who buy shares), but the
                                Community would benefit from securing the future
                                of the shop.
                            </p>
                            <p className="sm-type-bigamp mb-4">
                                The table below shows the projected cashflow
                                over the first 4 years of trading, based on
                                figures from similar community shops in rural
                                areas of the west of Scotland.
                            </p>

                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                Funding for either parks would come from:
                            </p>

                            <div className="table table-pricing">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Cashflow projection</p>
                                    </div>
                                    <div className="cell">
                                        <p>Year 1</p>
                                    </div>
                                    <div className="cell">
                                        <p>Year 2</p>
                                    </div>
                                    <div className="cell">
                                        <p>Year 3</p>
                                    </div>
                                    <div className="cell">
                                        <p>Year 4</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Projected income</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;76,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;101,285</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;116,678</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;120,994</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Projected cost of goods for sale</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;59,280</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;69,974</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;79,003</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;89,378</p>
                                    </div>
                                </div>
                                <div className="heading">
                                    <div className="cell">
                                        <p>Overheads</p>
                                    </div>
                                    <div className="cell">
                                        <p> </p>
                                    </div>
                                    <div className="cell">
                                        <p> </p>
                                    </div>
                                    <div className="cell">
                                        <p> </p>
                                    </div>
                                    <div className="cell">
                                        <p> </p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Salary of Manager</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;20,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;20,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;20,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;20,000</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Rates</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;500</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;525</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;551</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;579</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Water</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;500</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;525</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;551</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;579</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Insurance</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;3,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;3,100</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;3,150</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;3,200</p>
                                    </div>
                                </div>
                                <div className="roww">
                                    <div className="cell">
                                        <p>Heat and light</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;1,000</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;1,100</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;1,200</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;1,300</p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>Balance</p>
                                    </div>
                                    <div className="cell">
                                        <p>-&pound;8,280</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;6,061</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;12,223</p>
                                    </div>
                                    <div className="cell">
                                        <p>&pound;5,958</p>
                                    </div>
                                </div>
                            </div>

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
                                                href="https://esmeefairbairn.org.uk/our-aims/creative-confident-communities/community-ownership-and-regeneration/"
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
                                                href="https://plunkett.co.uk/support-for-early-stages/"
                                                target="_blank"
                                                rel="external"
                                            >
                                                Plunkett Foundation
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
                        <DevOptionsChecklist optionName="Shop and Post Office" />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default InfoShopPostOffice

export const query = graphql`
    query ShopAndPostOfficeQuery {
        image1: file(relativePath: { eq: "shop-post-office.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
        content {
            developmentOption(where: { slug: "shop-and-post-office" }) {
                title
                intro
                mainText {
                    raw
                }
            }
        }
    }
`
