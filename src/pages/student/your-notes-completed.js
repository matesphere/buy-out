import React from 'react'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import '../../scss/index.scss'
import Tick from '../../assets/tick.svg'
import { Link } from 'gatsby'
import HelpIcon from '../../assets/help-icon.svg'

const YourNotesPage = () => {
    return (
        <main className="notes">
            <Header headerText="The quest" />
            <section className="container" id="main">
                <div className="row" id="guest-1">
                    <div className="col-lg-8">
                        <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            Team notes
                        </h1>
                        <ol className="completed-nav">
                            <li className="sm-type-lead">
                                <Link
                                    to="/student/your-notes-completed"
                                    className="completed-nav-completed"
                                >
                                    Research
                                </Link>{' '}
                                <Tick />
                            </li>
                            <li className="sm-type-lead">
                                <Link to="/student/your-notes-inprogress">
                                    Consult{' '}
                                    <span className="notification"></span>
                                </Link>
                            </li>
                        </ol>
                        <div className="side-grey">
                            <div className="quest-step quest-step-page quest-step-complete">
                                <div className="quest-step-text">
                                    <span className="quest-step-number">1</span>
                                    RESEARCH
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <h3 className="sm-type-guitar mb-2">
                                    Team notes
                                </h3>

                                <p className="sm-type-lead mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec ex mi, sollicitudin
                                    in mauris et, consequat dapibus sapien.
                                    Proin varius luctus sapien in rhoncus.
                                    Quisque sed cursus eros. Morbi viverra
                                    faucibus est laoreet imperdiet. Donec ac
                                    blandit felis, eu sagittis justo. Quisque a
                                    erat fringilla, fermentum velit eget,
                                    lobortis nibh. Suspendisse dolor sem,
                                    scelerisque quis volutpat et, elementum
                                    consequat lectus. Mauris id ullamcorper est,
                                    quis consectetur sem. Morbi eget ipsum
                                    elementum, lacinia velit sed, accumsan quam.
                                    Curabitur sed ligula rutrum, hendrerit erat
                                    ut, porttitor diam. Phasellus vestibulum
                                    lacus est. Aliquam erat volutpat. In pretium
                                    sed orci in cursus.
                                </p>
                                <p className="sm-type-lead mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec ex mi, sollicitudin
                                    in mauris et, consequat dapibus sapien.
                                    Proin varius luctus sapien in rhoncus.
                                    Quisque sed cursus eros. Morbi viverra
                                    faucibus est laoreet imperdiet. Donec ac
                                    blandit felis, eu sagittis justo. Quisque a
                                    erat fringilla, fermentum velit eget,
                                    lobortis nibh. Suspendisse dolor sem,
                                    scelerisque quis volutpat et, elementum
                                    consequat lectus. Mauris id ullamcorper est,
                                    quis consectetur sem. Morbi eget ipsum
                                    elementum, lacinia velit sed, accumsan quam.
                                    Curabitur sed ligula rutrum, hendrerit erat
                                    ut, porttitor diam. Phasellus vestibulum
                                    lacus est. Aliquam erat volutpat. In pretium
                                    sed orci in cursus.
                                </p>
                                <h3 className="sm-type-guitar mb-2">
                                    Tutor notes
                                </h3>
                                <p className="sm-type-lead mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec ex mi, sollicitudin
                                    in mauris et, consequat dapibus sapien.
                                    Proin varius luctus sapien in rhoncus.
                                    Quisque sed cursus eros. Morbi viverra
                                    faucibus est laoreet imperdiet. Donec ac
                                    blandit felis, eu sagittis justo. Quisque a
                                    erat fringilla, fermentum velit eget,
                                    lobortis nibh. Suspendisse dolor sem,
                                    scelerisque quis volutpat et, elementum
                                    consequat lectus. Mauris id ullamcorper est,
                                    quis consectetur sem. Morbi eget ipsum
                                    elementum, lacinia velit sed, accumsan quam.
                                    Curabitur sed ligula rutrum, hendrerit erat
                                    ut, porttitor diam. Phasellus vestibulum
                                    lacus est. Aliquam erat volutpat. In pretium
                                    sed orci in cursus.
                                </p>
                                <p className="sm-type-lead mb-4">
                                    <ul className="completed-nav">
                                        <li className="sm-type-lead">
                                            Completed <Tick />
                                        </li>
                                    </ul>
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
                            <p className="sm-type-guitar">
                                <span className="side-icon">
                                    <Tick />
                                </span>
                                Congratulations
                            </p>
                            <p className="sm-type-amp">
                                You have completed Quest 1 Research.
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
