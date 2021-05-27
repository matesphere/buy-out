import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import CheckList from '../../../../components/common/checklist'
import Helpful from '../../../../components/common/helpful'

import '../../../../scss/index.scss'

import { stage2CheckListEng, stage2HelpfulEng, stage2DataTitleEng, stage2DataSubTitleEng, stage2DataTextEng } from './_stage2.data'

const RolesPage = ({items}) => {
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
                        <div className="col-lg-9">
                            {stage2DataTitleEng.map((check) => (
                                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4" key={check.title}>
                                    {check.title}
                                </h2>
                            ))}

                            {stage2DataSubTitleEng.map((check) => (
                                <p className="sm-type-guitar mb-4" key={check.subtitle}>
                                    {check.subtitle}
                                </p>
                            ))}

                            {stage2DataTextEng.map((check) => (
                                <p className="sm-type-lead mb-4" key={check.text}>
                                    {check.text}
                                </p>
                            ))}

                            <Tabs>
                                <TabList>
                                    <Tab>
                                        <h6 className="sm-type-amp">Chair</h6>
                                    </Tab>
                                    <Tab>
                                        <h6 className="sm-type-amp">
                                            Vice-chair
                                        </h6>
                                    </Tab>
                                    <Tab>
                                        <h6 className="sm-type-amp">
                                            Secretary
                                        </h6>
                                    </Tab>
                                    <Tab>
                                        <h6 className="sm-type-amp">
                                            Treasurer
                                        </h6>
                                    </Tab>
                                </TabList>
                                <TabPanel className="react-tabs--information">
                                    <div className="react-tabs--information--inner">
                                        <h2 className="sm-type-guitar mb-2">
                                            Chair
                                        </h2>
                                        <p className="sm-type-lead mb-2">
                                            To chair the Board meetings, keep
                                            the members ‘on track’, ensuring
                                            that all members are involved in the
                                            tasks and in the decision making.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To have the ’casting vote’ over any
                                            decisions.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To lead the long- and short-listing
                                            of the Development Options.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To lead the feedback presentation to
                                            the Community.
                                        </p>
                                    </div>
                                </TabPanel>
                                <TabPanel className="react-tabs--information">
                                    <div className="react-tabs--information--inner">
                                        <h2 className="sm-type-guitar mb-2">
                                            Vice-chair
                                        </h2>
                                        <p className="sm-type-lead mb-2">
                                            To deputise for the Chair, as
                                            necessary.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To oversee the choice of the Group
                                            name and the design of the logo.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To lead the SWOT analysis.
                                        </p>
                                        <p className="sm-type-lead mb-24">
                                            To assist the Chair in the
                                            presentation to the Community.
                                        </p>
                                    </div>
                                </TabPanel>
                                <TabPanel className="react-tabs--information">
                                    <div className="react-tabs--information--inner">
                                        <h2 className="sm-type-guitar mb-2">
                                            Secretary
                                        </h2>
                                        <p className="sm-type-lead mb-2">
                                            To enter the text and data into the
                                            Quest forms.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To record decisions made at
                                            ‘meetings’.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To lead the writing of the
                                            Feasibility Study which will be
                                            presented to the Community, together
                                            with the Business Plan.
                                        </p>
                                    </div>
                                </TabPanel>
                                <TabPanel className="react-tabs--information">
                                    <div className="react-tabs--information--inner">
                                        <h2 className="sm-type-guitar mb-2">
                                            Treasurer
                                        </h2>
                                        <p className="sm-type-lead mb-2">
                                            To oversee any calculations that
                                            need to be competed.
                                        </p>
                                        <p className="sm-type-lead mb-2">
                                            To build the Business Plan which
                                            will detail costs, income and
                                            funding streams for the purchase of
                                            the land and for setting up and
                                            running the Development Schemes.
                                        </p>
                                    </div>
                                </TabPanel>
                            </Tabs>

                            <div
                                className={`filters-container${
                                    showFilters ? ' show' : ''
                                }`}
                            >
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
                                        You will need to work together and
                                        decided who will do the following.
                                    </p>

                                    <div className="form-holder-border">
                                        <div className="form-holder">
                                            <h4 className="sm-type-guitar mb-2">
                                                Enter the names for the roles
                                                below:
                                            </h4>
                                            <div id="form-roles">
                                                <ul>
                                                    <li className="mb-2">
                                                        <label className="form-label sm-type-amp">
                                                            Chair
                                                        </label>
                                                        <input type="text" class="form-control" />
                                                    </li>
                                                    <li className="mb-2">
                                                        <label className="form-label sm-type-amp">
                                                            Vice-chair
                                                        </label>
                                                        <input type="text" class="form-control" />
                                                    </li>
                                                    <li className="mb-2">
                                                        <label className="form-label sm-type-amp">
                                                            Secretary
                                                        </label>
                                                        <input type="text" class="form-control" />
                                                    </li>
                                                    <li className="mb-2">
                                                        <label className="form-label sm-type-amp">
                                                            Treasurer
                                                        </label>
                                                        <input type="text" class="form-control" />
                                                    </li>
                                                </ul>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setShowFilters(!showFilters)
                                                    scrollTo(
                                                        '#filter-container'
                                                    )
                                                }}
                                                className="btn-solid-lg"
                                                to="/introduction"
                                            >
                                                Submit names
                                            </button>
                                        </div>

                                        <div
                                            className="success-holder"
                                            id="filter-container"
                                        >
                                            <h4 className="sm-type-bigdrum sm-type-bigdrum--medium">
                                                <span class="side-icon">
                                                    <Tick />
                                                </span>{' '}
                                                Success
                                            </h4>
                                            <p>
                                                Your roles have been submitted.
                                            </p>
                                            <p>
                                                <Link to="/student/your-notes-inprogress">
                                                    You will see your feedback
                                                    here
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Helpful items={stage2HelpfulEng} />
                            <CheckList items={stage2CheckListEng} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default RolesPage
