import * as React from "react"
import { Link } from 'gatsby'

import '../../scss/index.scss'
const AccountFooter = () => {
    return (
        <footer className="footer">
            <section className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li><Link to="/account/tutor-hub/">Tutor Hub</Link></li>
                        </ul>

                        <p>Copyright 2021. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default AccountFooter