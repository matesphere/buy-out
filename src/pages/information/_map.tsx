import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import InfoShop from '../../assets/info-shop.svg'
import InfoHouse from '../../assets/info-house.svg'
import InfoHydro from '../../assets/info-hydro.svg'
import InfoWind from '../../assets/info-wind.svg'
import InfoForest from '../../assets/info-forest.svg'
import InfoBusiness from '../../assets/info-business.svg'
import InfoCamp from '../../assets/info-camp.svg'
import InfoGarden from '../../assets/info-garden.svg'
import InfoSkate from '../../assets/info-skate.svg'

const MapOptions = () => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "map-zoom.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <>
            <p className="sm-type-bigamp mb-3 mt-2">
                Shown below is a map of Glenclas, with the
                locations of proposed development opportunities
                marked. Your task is to investigate each of the
                opportunities and produce a SWOT analysis for
                each option.
            </p>
            <div className="image-map mb-4 mt-4">
                <div className="image-map-holder">
                    <div>
                        <GatsbyImage
                            alt=""
                            image={data.image5.childImageSharp.gatsbyImageData}
                        />
                    </div>
                    <div className="hover-pins">
                        <p className="sm-type-amp">
                            Hover over the pins to see more information
                        </p>
                    </div>
                    <div className="outer-grid">
                        <div className="outer-square">
                            <div className="inner-grid inner-grid-1">
                                <span className="info-icon">
                                    <InfoShop />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>Shop and Post Office</strong>
                                            <br />
                                            A mini supermarket and post office, to
                                            service the local community and
                                            visitors.
                                            <br />
                                            <Link to="/information/shop-and-post-office">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-2">
                                <span className="info-icon">
                                    <InfoSkate />
                                    <div className="info-icon-show info-icon-show-c">
                                        <p className="sm-type-amp">
                                            <strong>Play park / Skate park</strong>
                                            <br />
                                            A new purpose-built facility with
                                            distinct areas which could be used by
                                            both primary school age and older
                                            children.
                                            <br />
                                            <Link to="/information/playpark-skatepark">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-3">
                                <span className="info-icon">
                                    <InfoHouse />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>
                                                Affordable Housing Scheme
                                            </strong>
                                            <br />
                                            Space for 3 pairs of semi-detached
                                            houses behind a row of existing houses.
                                            Affordable rent charged and low running
                                            costs.
                                            <br />
                                            <Link to="/information/affordable-housing-scheme">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-4">
                                <span className="info-icon">
                                    <InfoHydro />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>Micro-hydro Scheme</strong>
                                            <br />
                                            A small water-driven power plant making
                                            use of the stream coming off the hill
                                            behind the village, providing both power
                                            for the community and an income from
                                            electricity sold on to the grid.
                                            <br />
                                            <Link to="/information/micro-hydro">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-5">
                                <span className="info-icon">
                                    <InfoBusiness />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>Business Hub Scheme</strong>
                                            <br />
                                            A new build business centre that could
                                            be divided into units for offices and/or
                                            workshops.
                                            <br />
                                            <Link to="/information/business-hub">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-6">
                                <span className="info-icon">
                                    <InfoGarden />
                                    <div className="info-icon-show info-icon-show-r">
                                        <div className="sm-type-amp">
                                            <strong>Market Garden Scheme</strong>
                                            <br />
                                            A commercial operation to grow
                                            year-round fruit and vegetables for the
                                            local community and local businesses.
                                            <br />
                                            <Link to="/information/market-scheme">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-7">
                                <span className="info-icon">
                                    <InfoWind />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>Wind Turbine Scheme</strong>
                                            <br />
                                            A turbine situated on the hill behind
                                            the village, providing both power for
                                            the community and an income from
                                            electricity sold on to the grid.
                                            <br />
                                            <Link to="/information/wind-turbine">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-8">
                                <span className="info-icon">
                                    <InfoForest />
                                    <div className="info-icon-show info-icon-show-c">
                                        <div className="sm-type-amp">
                                            <strong>Forestry Scheme</strong>
                                            <br />
                                            On the extensive hill behind the
                                            village, an area of some 15 acres to be
                                            planted as mixed woodland.
                                            <br />
                                            <Link to="/information/forestry-scheme">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="inner-grid inner-grid-9">
                                <span className="info-icon">
                                    <InfoCamp />
                                    <div className="info-icon-show info-icon-show-r">
                                        <div className="sm-type-amp">
                                            <strong>
                                                Campsite & Cabins Scheme
                                            </strong>
                                            <br />
                                            Potential for a community owned campsite
                                            and areas for caravans, campervans and
                                            Cabins.
                                            <br />
                                            <Link to="/information/campsite-cabin">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapOptions
