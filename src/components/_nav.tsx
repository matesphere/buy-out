import React from 'react'
import { Link } from 'gatsby'

import '../scss/index.scss'

const Nav = () => (
    <nav className="nav">
        <ul>
            <li className="nav-links">
                <Link to="/help">Help</Link>
            </li>
            <li className="nav-links">
                <Link to="/information">Information</Link>
            </li>
            <li className="nav-links">
                <Link to="/student/team-hub/">
                    Team hub
                    {/*<span className="nav-links-notification"></span>*/}
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav
