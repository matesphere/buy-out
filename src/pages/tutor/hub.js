import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import HelpIcon from '../../assets/help-icon.svg'
import '../../scss/index.scss'

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="Tutor Hub" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Welcome back Tutor Name
                            </h2>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                Your Quests
                            </p>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Previous Quests
                                </p>
                                <ul>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.04.2019 - Class 4B 2019
                                        </Link>
                                    </li>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.10.2019 - Class 4A 2019
                                        </Link>
                                    </li>
                                    <li className="sm-type-amp mb-2">
                                        <Link to="/login">
                                            03.05.2020 - Class 4B 2020
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Current Quest
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/tutor/current-quest">
                                        Your current Quest
                                    </Link>{' '}
                                    <span className="sm-type-amp--medium">
                                        Class 4B 2021
                                    </span>{' '}
                                    started on 03.05.2021
                                </p>
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Start New Quest
                                </p>
                                <p className="sm-type-amp">
                                    Start a new{' '}
                                    <Link to="/tutor/add-students">
                                        Quest here
                                    </Link>
                                    .
                                </p>
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
                                <p className="sm-type-amp">
                                    Here you can see your previous and current
                                    Quests. You can also start a new Quest
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default IndexPage
