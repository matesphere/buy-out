import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from 'react-slick'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { CheckList } from '../../components/common/Checklist'
import { Helpful } from '../../components/common/Helpful'

import { slickSettings } from '../../utils/slicksettings'

import '../../scss/index.scss'

import {
    stage2CheckListEng,
    stage2HelpfulEng,
    stage2DataTitleEng,
    stage2DataSubTitleEng,
    stage2DataTextEng,
} from './_roles.data'
import {Link} from "gatsby";

const Stage2TaskPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - About the roles</title>
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
                                    About The Roles
                                </span>
                            </div>

                            {stage2DataTitleEng.map((text, i) => (
                                <h2
                                    key={i}
                                    className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4"
                                >
                                    {text}
                                </h2>
                            ))}

                            {stage2DataSubTitleEng.map((text, i) => (
                                <p key={i} className="sm-type-guitar mb-4">
                                    {text}
                                </p>
                            ))}

                            {stage2DataTextEng.map((text, i) => (
                                <p key={i} className="sm-type-lead mb-4">
                                    {text}
                                </p>
                            ))}

                            <Slider {...slickSettings}>
                                <div className="side-grey">
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
                                </div>
                                <div className="side-grey">
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
                                </div>
                                <div className="side-grey">
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
                                </div>
                                <div className="side-grey">
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
                                </div>
                            </Slider>
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

export default Stage2TaskPage
