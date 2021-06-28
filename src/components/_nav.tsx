import React, { useState } from 'react'
import { Link } from 'gatsby'

import '../scss/index.scss'

const Nav = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <nav
            className={`${expanded ? 'show ' : ''} navbar navbar-expand-md navbar-dark `}
        >
            <div className="navbar--inner">
                <div className="beaner"></div>

                <button
                    type="button"
                    className="navbar-toggler"
                    aria-label="Button for navigation menu"
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                >
                    <div className="hamburger hamburger--spin js-hamburger ">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarsExampleDefault"
                >
                    <nav className="nav">
                        <ul>
                            <li className="dropdown">
                                <Link to="/student/team-hub/" className="dropbtn">
                                    Team hub
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/student/team-hub/" className="dropbtn">
                                    Current stage
                                    {/*<span className="nav-links-notification"></span>*/}
                                </Link>
                                <div className="dropdown-content">
                                    <Link to="/student/stage-1">
                                        Stage 1
                                    </Link>
                                </div>
                            </li>

                            <li className="dropdown">
                                <Link to="/information" className="dropbtn">Information</Link>
                                <div className="dropdown-content">
                                    <Link to="/information/about-glenclas-area">
                                        About the area
                                    </Link>
                                    <Link to="/information/community">
                                        Community
                                    </Link>
                                    <Link to="/information/about-the-roles">
                                        Team roles
                                    </Link>
                                    <Link to="/information/development-options">
                                        Development options
                                    </Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <Link to="/help" className="dropbtn">Help</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Nav
