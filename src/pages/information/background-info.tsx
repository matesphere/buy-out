import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

const BackgroundInformationPage: FC = () => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Background Information</title>
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
                            currentDisplayName="Background Information"
                        />
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            Background Information
                        </h2>

                        <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                            All the information is listed below to help you on
                            your quest.
                        </p>

                        <h3 className="sm-type-drum">General links</h3>

                        <p className="sm-type-bigamp mb-1">
                            Follow these links to discover more about the
                            communities and the wider area the Quest is based
                            on.
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

                        <h3 className="sm-type-drum">
                            Community Land Scotland
                        </h3>

                        <p className="sm-type-bigamp mb-3">
                            The CLS site contains everything you'll ever need to
                            know about community land buy-outs!
                        </p>
                        <p className="sm-type-bigamp mb-3">
                            <a
                                href="https://www.communitylandscotland.org.uk/"
                                target="_blank"
                                rel="external"
                            >
                                Community Land Scotland
                            </a>
                        </p>

                        <h3 className="sm-type-drum">Scottish Government</h3>

                        <p className="sm-type-bigamp mb-3">
                            The land reform section of the Scottish Government
                            site gives some background to the community 'right
                            to buy' policy.
                        </p>
                        <p className="sm-type-bigamp mb-3">
                            <a
                                href="https://www.gov.scot/policies/land-reform/community-right-to-buy/"
                                target="_blank"
                                rel="external"
                            >
                                Scottish Government right to buy
                            </a>
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
                                This is all handy background info for your
                                upcoming Quest.
                            </p>
                            <p className="sm-type-amp">
                                Make sure you have a good look around and
                                familiarise yourself - especially with the
                                previous successful buyouts which can be seen on
                                the CLS site!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
            </section>
            <Footer />
        </main>
    </>
)

export default BackgroundInformationPage
