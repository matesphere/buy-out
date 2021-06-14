import React from 'react'
import { Link } from 'gatsby'

import '../scss/index.scss'
const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-links">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                    <Link to="/help">Help</Link>
                </li>
                <li className="nav-links">
                    <Link to="/student/information">Information</Link>
                </li>
                <li className="nav-links">
                    <Link to="/student/team-hub/">
                        Team hub
                        {/*<span className="nav-links-notification"></span>*/}
                    </Link>
                </li>
                {/* <li className="nav-links">
                    <Link to="/tutor/hub">
                        Tutor hub
                        <span className="nav-links-notification"></span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav
