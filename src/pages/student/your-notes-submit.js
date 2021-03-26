import React from 'react'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import '../../scss/index.scss'
import Submit from '../../assets/submit.svg'
import Tick from '../../assets/tick.svg'
import HelpIcon from '../../assets/help-icon.svg'
import { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link } from 'gatsby'

const YourNotesPage = () => {
    const [showFilters, setShowFilters] = useState(false)
    return (
        <main className="notes">
            <Header headerText="the Quest" />
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            Your notes submission
                        </h1>
                    </div>
                </div>

                <div className="row" id="guest-3">
                    <div className="col-lg-8 quest-notes">
                        <div className="quest-step quest-step-page quest-step-complete">
                            <div className="quest-step-text">
                                <span className="quest-step-number">1</span>
                                RESEARCH
                            </div>
                        </div>
                        <div className="mt-4 mb-4">
                            <div
                                className={`filters-container${
                                    showFilters ? ' show' : ''
                                }`}
                            >
                                <div className="form-holder">
                                    <label
                                        className="sm-type-lead"
                                        htmlFor="notes-1"
                                    >
                                        Enter your notes here
                                    </label>
                                    <textarea
                                        id="notes-1"
                                        className="notes-textarea"
                                    ></textarea>
                                    <button
                                        onClick={() => {
                                            setShowFilters(!showFilters)
                                            scrollTo('#filter-container')
                                        }}
                                        className="btn-solid-lg"
                                    >
                                        <Submit />
                                        Submit
                                    </button>
                                </div>

                                <div
                                    className="success-holder mb-4 mt-4"
                                    id="filter-container"
                                >
                                    <h4 className="sm-type-bigdrum sm-type-bigdrum--medium">
                                        <span className="side-icon">
                                            <Tick />
                                        </span>{' '}
                                        Success
                                    </h4>
                                    <p>Your notes have been submitted.</p>
                                    <p>
                                        <Link to="/student/your-notes-inprogress">
                                            You will see your feedback here
                                        </Link>
                                    </p>
                                </div>
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
                            <p className="sm-type-amp">
                                Dont forget to complete all the required tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default YourNotesPage
