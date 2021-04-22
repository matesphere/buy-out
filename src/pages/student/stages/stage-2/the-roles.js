import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const RolesPage = () => {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - Consult - Team Roles</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 2" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Elect your steering group
                            </h2>

                            <p className="sm-type-guitar mb-4">
                                You are going to work as the board of a
                                community group who will lead the purchase of
                                some land that has come up for sale.
                            </p>

                            <p className="sm-type-lead mb-4">
                                You will each adopt a specific role within the
                                board, but throughout, you will need to work as
                                a team. Each decision that you make must take
                                into account the views of everyone in the team.
                                That does not mean that you will agree on
                                everything, in fact it is inevitable that you
                                will disagree at times. However, you must work
                                out how you will reach decisions when there is
                                disagreement amongst the team.
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
                                <p className="sm-type-amp mb-2">
                                    You will need to work together and decided
                                    who will do the following.
                                </p>
                                <ol className="sm-type-guitar">
                                    <li className="mb-2">Chair</li>
                                    <li className="mb-2">Vice-chair</li>
                                    <li className="mb-2">Secretary</li>
                                    <li className="mb-2">Treasurer.</li>
                                </ol>
                            </div>

                            <div className="side-grey">
                                <h2 className="sm-type-guitar mb-2">Chair</h2>
                                <p className="sm-type-lead mb-2">
                                    To chair the Board meetings, keep the
                                    members ‘on track’, ensuring that all
                                    members are involved in the tasks and in the
                                    decision making.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To have the ’casting vote’ over any
                                    decisions.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To lead the long- and short-listing of the
                                    Development Options.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To lead the feedback presentation to the
                                    Community.
                                </p>
                            </div>
                            <div className="side-grey">
                                <h2 className="sm-type-guitar mb-2">
                                    Vice-chair
                                </h2>
                                <p className="sm-type-lead mb-2">
                                    To deputise for the Chair, as necessary.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To oversee the choice of the Group name and
                                    the design of the logo.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To lead the SWOT analysis.
                                </p>
                                <p className="sm-type-lead mb-24">
                                    To assist the Chair in the presentation to
                                    the Community.
                                </p>
                            </div>
                            <div className="side-grey">
                                <h2 className="sm-type-guitar mb-2">
                                    Secretary
                                </h2>
                                <p className="sm-type-lead mb-2">
                                    To enter the text and data into the Quest
                                    forms.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To record decisions made at ‘meetings’.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To lead the writing of the Feasibility Study
                                    which will be presented to the Community,
                                    together with the Business Plan.
                                </p>
                            </div>
                            <div className="side-grey">
                                <h2 className="sm-type-guitar mb-2">
                                    Treasurer
                                </h2>
                                <p className="sm-type-lead mb-2">
                                    To oversee any calculations that need to be
                                    competed.
                                </p>
                                <p className="sm-type-lead mb-2">
                                    To build the Business Plan which will detail
                                    costs, income and funding streams for the
                                    purchase of the land and for setting up and
                                    running the Development Schemes.
                                </p>
                            </div>

                            <div
                                className={`filters-container${
                                    showFilters ? ' show' : ''
                                }`}
                            >
                                <div className="form-holder">
                                    <h4 className="sm-type-guitar mb-2 mt-4">
                                        Enter the names for the roles below:
                                    </h4>
                                    <div className="mb-4" id="form-roles">
                                        <ul>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Chair
                                                </label>
                                                <input class="form-control" />
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Vice-chair
                                                </label>
                                                <input class="form-control" />
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Secretary
                                                </label>
                                                <input class="form-control" />
                                            </li>
                                            <li className="mb-2">
                                                <label className="form-label sm-type-amp">
                                                    Treasurer
                                                </label>
                                                <input class="form-control" />
                                            </li>
                                        </ul>

                                        <button
                                            onClick={() => {
                                                setShowFilters(!showFilters)
                                                scrollTo('#filter-container')
                                            }}
                                            className="btn-solid-lg"
                                            to="/introduction"
                                        >
                                            Submit names
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="success-holder mb-4 mt-4"
                                    id="filter-container"
                                >
                                    <h4 className="sm-type-bigdrum sm-type-bigdrum--medium">
                                        <span class="side-icon">
                                            <Tick />
                                        </span>{' '}
                                        Success
                                    </h4>
                                    <p>Your roles have been submitted.</p>
                                    <p>
                                        <Link to="/student/your-notes-inprogress">
                                            You will see your feedback here
                                        </Link>
                                    </p>
                                </div>
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
                                <p className="sm-type-amp ticker">
                                    You will need to work together and decided
                                    who will do the following.
                                </p>
                                <ul className="sm-type-amp">
                                    <li>Chair</li>
                                    <li>Vice-chair</li>
                                    <li>Secretary</li>
                                    <li>Treasurer</li>
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
                                        You have read the information about the
                                        roles.
                                    </label>
                                </div>

                                <div className="multiple-choice">
                                    <input
                                        className="form-control"
                                        id="id1"
                                        type="checkbox"
                                    />
                                    <label className="form-label" htmlFor="id1">
                                        You have chosen who will do which role.
                                    </label>
                                </div>

                                <p className="sm-type-amp">
                                    You can submit your roles.
                                </p>
                                <p className="sm-type-amp">
                                    <Link href="/student/stage-2">
                                        Back to Stage 2
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

export default RolesPage
