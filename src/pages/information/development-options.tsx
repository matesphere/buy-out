import React, { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import MapOptions from './_map'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'

import HelpIcon from '../../assets/help-icon.svg'
import TickSheet from '../../assets/tick-sheet.svg'

import '../../scss/index.scss'

export const DevOptionsChecklist: FC<{ optionName: string }> = ({
    optionName,
}) => (
    <div className="col-lg-4">
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
                    Read the information for the {optionName}.
                </p>
            </div>
            <div className="checklist">
                <div className="tick"></div>
                <p className="sm-type-lead">
                    Make a note of the funding options, following the links if
                    necessary.
                </p>
            </div>
        </div>
    </div>
)

const InfoDevOptions: FC = () => {
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
                                ]}
                                currentDisplayName="Development Options"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Development Options
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
                                    Each development option is presented here in
                                    detail.
                                </p>
                                <p className="sm-type-amp">
                                    Remember you'll need to pick five options at
                                    this stage, so try to compare and contrast
                                    them.
                                </p>
                                <p className="sm-type-amp">
                                    Make sure you look at the funding
                                    information for each option.
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
                                        <p>1. Affordable Housing Scheme</p>
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
                                        <p>2. Play Park / Skate Park</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A new purpose-built facility with
                                            distinct areas which could be used
                                            by both primary school age and older
                                            children.
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
                                        <p>3. Shop and Post Office</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A mini supermarket and post office,
                                            to service the local community and
                                            visitors.
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
                                        <p>4. Micro-hydro Scheme</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A small water-driven power plant
                                            providing both power for the
                                            community and an income from
                                            electricity sold on to the grid.
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
                                        <p>5. Wind Turbine Scheme</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A turbine providing both power for
                                            the community and an income from
                                            electricity sold on to the grid.
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
                                        <p>6. Business Hub Scheme</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A new build business centre that
                                            could be divided into units for
                                            offices and/or workshops.
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
                                        <p>7. Forestry Scheme</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            On the extensive hill behind the
                                            village, an area of some 15 acres to
                                            be planted as mixed woodland.
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
                                        <p>8. Campsite and Cabins Scheme</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Potential for a community owned
                                            campsite and areas for caravans,
                                            campervans and Cabins. The shower
                                            toilet block could be made available
                                            to public use (for a fee), allowing
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
                                        <p>9. Market Garden Scheme</p>
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
