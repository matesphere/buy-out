import * as React from 'react'
import LoginHeader from './_header'
import AccountFooter from './_footer'
import '../../scss/index.scss'
import Tick from '../../assets/tick.svg'
import Cross from '../../assets/cross.svg'
import { Helmet } from 'react-helmet'

const TutorPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Your teams</title>
                <meta name="description" content="The description" />
                <meta property="og:url" content="url" />
                <meta property="og:title" content="Quest 1" />
                <meta property="og:description" content="The description" />
            </Helmet>
            <main className="notes">
                <LoginHeader headerText="Your teams" />
                <section className="container" id="main">
                    <div className="row tutor mt-4">
                        <div className="col-lg-4">
                            <div className="quest-step quest-step-complete step">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">1</span>
                                    Team one name
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="sm-type-amp">Johnny D</p>
                                <p className="sm-type-amp">Jane D</p>
                                <p className="sm-type-amp">Johnny D</p>
                                <p className="sm-type-amp">Jane D</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ul className="steps">
                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 1
                                    </p>
                                    <div>
                                        <Tick />
                                        <span>Completed</span>
                                        <span>
                                            <a href="#">team work</a>
                                        </span>
                                        <span>
                                            <a href="#">tutor notes</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 2
                                    </p>
                                    <div>
                                        <Tick />
                                        <span>Completed</span>
                                        <span>
                                            <a href="#">team work</a>
                                        </span>
                                        <span>
                                            <a href="#">tutor notes</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 3
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>Submitted</span>
                                        <span>
                                            <a href="#">team work</a>
                                        </span>
                                        <span>
                                            <a href="#">add tutor notes</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 4
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>LOCKED</span>
                                        <span>
                                            <a href="#">unlock step</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 5
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>LOCKED</span>
                                        <span>
                                            <a href="#">unlock step</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 6
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>LOCKED</span>
                                        <span>
                                            <a href="#">unlock step</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 7
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>LOCKED</span>
                                        <span>
                                            <a href="#">unlock step</a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <p className="steps-step sm-type-lead sm-type-lead--medium">
                                        Step 8
                                    </p>
                                    <div>
                                        <Cross />
                                        <span>LOCKED</span>
                                        <span>
                                            <a href="#">unlock step</a>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default TutorPage
