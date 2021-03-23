import * as React from "react"

import '../scss/index.scss'
import {Link} from "gatsby";
const Footer = () => {
    return (
        <footer className="footer">
            <section className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/the-quest/">Team hub</Link></li>
                        </ul>

                        <p>Copyright 2021. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
