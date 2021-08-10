import React from 'react'
import { Link } from 'gatsby'
import { AmplifySignOut } from '@aws-amplify/ui-react'

import Squiggle from '../../assets/squiggle.svg'

const TutorFooter = () => (
    <footer className="footer">
        <Squiggle className="squiggle" />
        <section className="container">
            <div className="row">
                <div className="col-lg-4 mt-1">
                    <ul>
                        <li>
                            <Link to="/tutor/hub/">Tutor Hub</Link>
                        </li>
                        {/* <li>
                                <button onClick={() => resetDB()}>
                                    Reset DB
                                </button>
                            </li> */}
                        {/* {resetDBResponse.data && <span> DB reset!</span>} */}
                    </ul>
                </div>
                <div className="col-lg-4 mt-1"></div>
                <div className="col-lg-4 mt-1">
                    <AmplifySignOut />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-align-center mt-2">
                    <p>
                        &copy; Copyright MateSphere 2021. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    </footer>
)

export default TutorFooter
