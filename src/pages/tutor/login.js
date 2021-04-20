import React from 'react'
import { Helmet } from 'react-helmet'
import { withAuthenticator } from '@aws-amplify/ui-react'

import LoginHeader from './_header'
import AccountFooter from './_footer'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'

// const signUp = async (username, password, email) => {
//     try {
//         const { user } = await Auth.signUp({
//             username,
//             password,
//             attributes: {
//                 email,
//             },
//         })
//         console.log(user)
//     } catch (error) {
//         console.log('error signing up:', error)
//     }
// }

const signIn = async (username, password) => {
    try {
        const user = await Auth.signIn(username, password)
    } catch (error) {
        console.log('error signing in', error)
    }
}

const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = e.target.elements
    await signIn(username.value, password.value)
}

const TutorLogin = ({ login }) => {
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
                                Enter your username and password
                            </h2>

                            <form
                                className="login-form mb-4"
                                id="form-login"
                                // action="/tutor/hub"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-2">
                                    <label className="form-label sm-type-amp">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label sm-type-amp">
                                        Password
                                    </label>
                                    <input
                                        id="password"
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

export default withAuthenticator(TutorLogin)
