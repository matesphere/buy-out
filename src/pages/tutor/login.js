import React from 'react'
import LoginHeader from './_header'
import AccountFooter from './_footer'
import '../../scss/index.scss'

import { Helmet } from 'react-helmet'
import HelpIcon from '../../assets/help-icon.svg'

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Login</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <LoginHeader headerText="Tutor Login" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Enter your email and password
                            </h2>

                            <form
                                className="login-form mb-4"
                                id="form-login"
                                action="/tutor/hub"
                            >
                                <div className="mb-2">
                                    <label className="form-label sm-type-amp">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label sm-type-amp">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <button
                                    className="btn-solid-lg"
                                    to="/introduction"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Use your email address and password
                                    provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <AccountFooter />
            </main>
        </>
    )
}

export default IndexPage