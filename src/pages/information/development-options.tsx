import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'

import HelpIcon from '../../assets/help-icon.svg'

import MapOptions from './_map'

import '../../scss/index.scss'

const InfoDevOptions = () => {
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
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Development Options</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Information" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
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
                                    Glenclas Map
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Map of options in Glenclas
                            </h2>
                            <p className="sm-type-lead mb-3">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities, and consult with experts and
                                local residents to familiarise yourselves with
                                what each option entails. Think about how each
                                might benefit the community!
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                                <p className="sm-type-amp">
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                                <p className="sm-type-amp">
                                    Look at Funding Options on each Option.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <MapOptions />

                            <div className="table table-proposal">
                                <div className="heading">
                                    <div className="cell">
                                        <p>Options</p>
                                    </div>
                                    <div className="cell">
                                        <p>Notes</p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            1. Affordable Housing Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Space for 3 pairs of semi-detached
                                            houses behind a row of existing
                                            houses. Affordable rent charged and
                                            low running costs.
                                        </p>
                                        <p>
                                            <Link to="/information/affordable-housing-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            2. Play Park and/or Skate Park
                                            Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be located behind the school
                                            and provide a facility for the
                                            primary school children as well as
                                            for older children.
                                        </p>
                                        <p>
                                            <Link to="/information/playpark-skatepark">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            3. Shop and PO
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be situated just of the ‘High
                                            Street’ a purpose-built mini
                                            supermarket and shop, to service the
                                            local community and visitors.
                                        </p>
                                        <p>
                                            <Link to="/information/shop-and-post-office">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            4. Micro-hydro Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Making use of the stream coming off
                                            the hill behind the village.
                                            Providing both power for the
                                            community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/information/micro-hydro">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            5. Wind turbine Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated on the hill behind the
                                            village. Providing both power for
                                            the community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/information/wind-turbine">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            6. Business hub Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated off the main thoroughfare,
                                            a new build that could be divided
                                            into units for offices and/or
                                            workshops.
                                        </p>
                                        <p>
                                            <Link to="/information/business-hub">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            7. Forestry Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            On the extensive hill behind the
                                            village, an area of some 15 acres to
                                            be planted as mixed woodland.
                                            Potential for income from the
                                            softwood, amenity value (woodland
                                            walks) and habitat creation as well
                                            as climate mitigation
                                        </p>
                                        <p>
                                            <Link to="/information/forestry-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            8. Campsite and Cabins Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Potential for a community owned
                                            campsite and areas for caravans,
                                            campervans and Cabins. The shower
                                            toilet block could be made available
                                            to public use (for a fee) to allow
                                            campervan and other tourists to use
                                            the facilities.
                                        </p>
                                        <p>
                                            <Link to="/information/campsite-cabin">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            9. Market Garden Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A commercial operation to grow
                                            year-round fruit and vegetables for
                                            the local community and for local
                                            businesses such as the Glenclas
                                            Hotel and Lodge.
                                        </p>
                                        <p>
                                            <Link to="/information/market-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>10. Team Choice</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Your Team can develop your own idea.
                                            You will need to carry out a SWOT
                                            analysis, determine your Capital
                                            Costs and Running Costs and also
                                            find out where the funding to both
                                            start and keep your scheme running
                                            would come from.
                                        </p>
                                    </div>
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

export default InfoDevOptions
