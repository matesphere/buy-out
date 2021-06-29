import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

const InformationPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - Community</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Information
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Useful links
                            </h2>

                            <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                                All the information is listed below to help you
                                on your quest.
                            </p>
                            <h3 className="sm-type-drum">
                                Here are some useful links.
                            </h3>

                            <p className="sm-type-bigamp mb-1">
                                They link off to wikipedia and will help you understand more about the area.
                            </p>
                            <ul className="mt-1">
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Civil parish
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Loch_Alsh"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Lochalsh
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Highland_council_area"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Highland
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Inverness-shire"
                                        target="_blank"
                                        rel="external"
                                    >
                                        Inverness-shire
                                    </a>
                                </li>
                            </ul>
                            <h3 className="sm-type-drum mt-4">
                                Read about the Glenclas area.
                            </h3>

                            <p className="sm-type-bigamp mb-3">
                                Here you will find a description of Glenclas
                                village and its community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/about-glenclas-area">
                                    Read about the area
                                </Link>
                            </p>
                            <h3 className="sm-type-drum mt-4">
                                Listen to the experts and the community.
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Consult with the people about development
                                options that could help the community.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/community">
                                    See what the experts and the community have
                                    to say
                                </Link>
                            </p>
                            <h3 className="sm-type-drum mt-4">
                                What are each roles responsibilities.
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Find out what each role is responsible for and
                                elect a steering group.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/about-the-roles">
                                    Read about the roles
                                </Link>
                            </p>

                            <h3 className="sm-type-drum mt-4">
                                Development options.
                            </h3>
                            <p className="sm-type-bigamp mb-3">
                                Look at the map and see what options are
                                available to help you choose.
                            </p>
                            <p className="sm-type-bigamp mb-3">
                                <Link to="/information/development-options">
                                    Read about the development options
                                </Link>
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
                                    Use the links to help you on your Quest.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default InformationPage
