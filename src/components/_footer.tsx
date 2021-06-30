import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Link } from 'gatsby'

import '../scss/index.scss'

const Footer = () => (
    <footer className="footer">
        <section className="container">
            <div className="row">
                <div className="col-lg-4 mt-1">
                    <p>
                        <Link to="/student/team-hub/">Team hub</Link>
                        <br />
                        <Link to="/acknowledgements">
                            Creators and Acknowledgements
                        </Link>
                    </p>
                </div>
                <div className="col-lg-4 mt-1">

                </div>
                <div className="col-lg-4">
                    <AmplifySignOut />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-align-center mt-2">
                    <p>&copy; Copyright MateSphere 2021. All rights reserved.</p>
                </div>
            </div>
        </section>
    </footer>
)
export default Footer
