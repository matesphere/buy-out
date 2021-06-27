import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Location } from '@reach/router'

import Nav from './_tutor-nav'

import Squiggle from '../../assets/squiggle.svg'
import PinLogo from '../../assets/pin-logo.svg'

import '../../scss/index.scss'

const HEADER_TEXT: { [pathname: string]: string } = {
    '/tutor/hub': 'Tutor Hub',
    '/tutor/current-quests': 'Current Quests',
    '/tutor/add-students': 'Add Students',
    '/tutor/add-students': 'Create Teams',
    '/tutor/stage-1/submitted': 'Stage 1',
    '/tutor/stage-2/submitted': 'Stage 2',
    '/tutor/stage-3/submitted': 'Stage 3',
    '/tutor/stage-4/submitted': 'Stage 4',
    '/tutor/stage-5/submitted': 'Stage 5',
}

const HIDE_LINKS: Array<string> = ['/tutor/add-students', '/tutor/add-students']

const TutorHeader = ({
    headerText,
    hideLinks,
}: {
    headerText?: string
    hideLinks?: boolean
}) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <Location>
            {({ location }) => (
                <>
                    <a href="#main" className="skip-link">
                        Skip to content
                    </a>
                    <section className="container top-section">
                        <Squiggle className="squiggle" />
                        <div className="row">
                            <div className="col-lg-8">
                                {!HIDE_LINKS.includes(location.pathname) && (
                                    <Nav />
                                )}
                                <h1 className="main-header mt-4">
                                    <PinLogo />
                                    <span>
                                        {headerText ||
                                            HEADER_TEXT[location.pathname]}
                                    </span>
                                </h1>
                            </div>
                            <div className="col-lg-4">
                                <div className="cls-logo">
                                    <GatsbyImage
                                        alt=""
                                        image={
                                            data.file.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </Location>
    )
}

export default TutorHeader
