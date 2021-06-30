import React, { useState } from 'react'
import { Link } from 'gatsby'

import '../../scss/index.scss'

const Nav = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <nav
            className={`${
                expanded ? 'show ' : ''
            } navbar navbar-expand-md navbar-dark `}
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
                                <Link to="/tutor/hub" className="dropbtn">
                                    Tutor hub
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link
                                    to="/tutor/current-quests"
                                    className="dropbtn"
                                >
                                    Current Quests
                                </Link>
                            </li>
                            <li className="dropdown">
                                <p className="dropbtn">Assessment Help</p>
                                <div className="dropdown-content">
                                    <Link to="/tutor/assessment">
                                        Assessment
                                    </Link>
                                    <Link to="/tutor/team-assessment">
                                        Team Assessment
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Nav
