import React from 'react'
import { Link } from 'gatsby'

import '../../scss/index.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-links">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                    <Link to="/tutor/hub">Tutor hub</Link>
                </li>
                <li className="nav-links">
                    <Link to="/tutor/current-quests/">Current Quests</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
