import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../components/_header'
import Footer from '../../../components/_footer'

import HelpIcon from '../../../assets/help-icon.svg'
import TickSheet from '../../../assets/tick-sheet.svg'

import '../../../scss/index.scss'

const QuestPage = () => {
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
                        <div className="col-lg-12">
                            <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Quest 1 - Research
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-4">
                                The legitimate place of people in the landscape:
                                renewing and repopulating rural Scotland
                            </p>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <ul>
                                    <li>
                                        <p className="sm-type-lead">
                                            Contact Community Land Scotland
                                            (CLS)
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Find out about what funding is
                                            available
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Get in touch with the agencies that
                                            can support you through the journey
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Look into options: Protocol or CRTB
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                CLS has a ‘Protocol for
                                                Negotiated Sales of Land with
                                                Scottish Land and Estates’
                                                (SLE), which provide guidance
                                                for sales between SLE and CLS
                                                members
                                            </li>
                                            <li>
                                                'Community Right To Buy' (CRTB)
                                                is a statutory route that allows
                                                communities the right to buy
                                                land when it comes up for sale.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className="sm-type-lead">
                                            Identify who the landowner is
                                        </p>
                                        <ul className="mb-4">
                                            <li className="mb-2">
                                                Some information to help you
                                                here
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
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
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land Scotland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.communitylandscotland.org.uk/about-us/what-we-do/"
                                            rel="external"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Community Land About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Check all task here:
                                </p>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        Contact Community Land Scotland (CLS)
                                    </label>
                                </div>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id2"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id2">
                                        Find out about what funding is available
                                    </label>
                                </div>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id3"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id3">
                                        Get in touch with the agencies that can
                                        support you through the journey
                                    </label>
                                </div>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id4"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id4">
                                        Look into options: Protocol or CRTB
                                    </label>
                                </div>
                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id5"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id5">
                                        Identify who the landowner is
                                    </label>
                                </div>
                                <p className="sm-type-amp">
                                    <Link to="/student/your-notes-submit">
                                        You can now submit your findings.
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
