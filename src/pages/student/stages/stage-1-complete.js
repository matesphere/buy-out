import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Header from '../../../components/_header'
import Footer from '../../../components/_footer'

import Tick from '../../../assets/tick.svg'
import HelpIcon from '../../../assets/help-icon.svg'

import '../../../scss/index.scss'

const QuestPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "fairer-scotland.jpg" }) {
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
                <title>Quest 1</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
                <meta property="og:url" content="url" />
                <meta property="og:title" content="Quest 1" />
                <meta property="og:description" content="The description" />
                {/*<meta property="og:image" content={image} />*/}
            </Helmet>
            <main className="the-quest">
                <Header headerText="the Quest" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Quest 1 - Research
                            </h1>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-4">
                                The legitimate place of people in the landscape:
                                renewing and repopulating rural Scotland
                            </p>
                            <ul>
                                <li>
                                    <p className="sm-type-lead">
                                        Contact Community Land Scotland (CLS)
                                    </p>
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            Some information to help you here
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="sm-type-lead">
                                        Find out about what funding is available
                                    </p>
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            Some information to help you here
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="sm-type-lead">
                                        Get in touch with the agencies that can
                                        support you through the journey
                                    </p>
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            Some information to help you here
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="sm-type-lead">
                                        Look into options: Protocol or CRTB
                                    </p>
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            CLS has a ‘Protocol for Negotiated
                                            Sales of Land with Scottish Land and
                                            Estates’ (SLE), which provide
                                            guidance for sales between SLE and
                                            CLS members
                                        </li>
                                        <li>
                                            'Community Right To Buy' (CRTB) is a
                                            statutory route that allows
                                            communities the right to buy land
                                            when it comes up for sale.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="sm-type-lead">
                                        Identify who the landowner is
                                    </p>
                                    <ul className="mb-4">
                                        <li className="mb-2">
                                            Some information to help you here
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="mb-4">
                                <GatsbyImage
                                    image={
                                        data.file.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>

                            <div className="side-grey">
                                <p className="sm-type-guitar">
                                    <span className="side-icon">
                                        <Tick />
                                    </span>
                                    Congratulations?
                                </p>
                                <p className="sm-type-amp mb-4">
                                    You have completed Quest 1.
                                </p>
                                <p>
                                    <Link
                                        className="dark-link"
                                        to="/student/your-notes-completed"
                                    >
                                        Your Quest 1 notes
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        className="dark-link"
                                        to="/the-quest-2"
                                    >
                                        Move onto Quest 2
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default QuestPage
