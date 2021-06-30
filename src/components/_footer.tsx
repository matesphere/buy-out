import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Link } from 'gatsby'

import '../scss/index.scss'

const Footer = () => (
    <footer className="footer">
        <section className="container">
            <div className="row">
                <div className="col-lg-8">
                    <ul>
                        <li>
                            <Link to="/student/team-hub/">Team hub</Link>
                        </li>
                        {/* <li>
                            <AmplifySignOut />
                        </li> */}
                    </ul>

                    <p>Copyright MateSphere 2021. All rights reserved.</p>
                </div>
                <div className="col-lg-4 mt-2">
                    <p>
                        <Link to="/acknowledgements">
                            Creators and Acknowledgements
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    </footer>
)
export default Footer
