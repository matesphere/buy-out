import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

const Stage7TipsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "present-findings.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 7 - Presentation Tips</title>
            </Helmet>
            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 7',
                                        url: '/student/stage-7/',
                                    },
                                ]}
                                currentDisplayName="Presentation Tips - Delivery"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Presentation Tips - Delivery
                            </h2>

                            <p className="sm-type-lead sm-type-lead--medium mb-3">
                                Delivering the Presentation
                            </p>
                            <ul>
                                <li className="mb-2">
                                    Decide who is going to actually deliver the
                                    presentation – although the Chair is
                                    ultimately responsible for the Presentation
                                    (s)he must not be the only person doing the
                                    delivery.
                                </li>
                                <li className="mb-2">
                                    You may decide that each member of the team
                                    will deliver different parts of the
                                    presentation or you may decide that one
                                    person should be operating the computer.
                                </li>
                                <li className="mb-2">
                                    What appears on the screen does not need to
                                    be what is spoken by the Presenter. If fact,
                                    it is often better if this is not the case.
                                    It is best not to read out what appears on
                                    the screen – the audience can read what is
                                    on the screen and then they can listen to
                                    further explanation or clarification by the
                                    Presenter.
                                </li>
                                <li className="mb-2">
                                    At the start, explain the purpose of the
                                    presentation and the aims of your
                                    organisation (remember that you are
                                    play-acting a role). Show something that
                                    grabs attention – a pictures or even a piece
                                    of music.
                                </li>
                                <li className="mb-2">
                                    Remember to sound interested and excited
                                    about the project as people are then more
                                    likely to listen to you.
                                </li>
                                <li className="mb-2">
                                    Provide as many facts and figures as you
                                    can.
                                </li>
                                <li className="mb-2">
                                    Make sure that you speak directly to the
                                    audience and that they speak slowly and
                                    clearly.
                                </li>
                                <li className="mb-2">
                                    Rehearsing the whole presentation
                                    before-hand is a very good idea so that
                                    everyone knows what they are doing and also
                                    so that you have got the timing right.
                                </li>
                                <li className="mb-2">
                                    You are likely to feel nervous but don’t be
                                    put off by this, nerves can help us to
                                    perform at our best if we can keep them
                                    under control.
                                </li>
                                <li className="mb-2">
                                    Take a deep breath and smile!
                                </li>
                                <li className="mb-2">
                                    Make sure that you keep an eye on the clock
                                    and stay within the time allowed.
                                </li>
                                <li className="mb-2">
                                    Have a conclusion and final remarks fully
                                    prepared so that your presentation has a
                                    clear ending.
                                </li>
                            </ul>
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
                                    Hints – suggestions only, you don’t HAVE to
                                    do it like this
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/student/stage-7">Back to Stage 7</Link>
                </section>
            </main>
        </>
    )
}

export default Stage7TipsPage
