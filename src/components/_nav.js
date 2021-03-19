import * as React from "react"
import { Link } from "gatsby"

import '../scss/index.scss'
const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/about-glenclas">About Glenclas</Link></li>
                <li className="nav-links"><Link to="/the-quest/">The quests</Link></li>
                <li className="nav-links">
                    <Link to="/your-notes">Your notes
                        <span className="nav-links-notification"></span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
