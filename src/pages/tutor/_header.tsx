import React, { FC } from 'react'
import '../../scss/index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Nav from './_tutor-nav'

import Squiggle from '../../assets/squiggle.svg'
import PinLogo from '../../assets/pin-logo.svg'

const LoginHeader = ({
    headerText,
    hideLinks,
}: {
    headerText: string
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
        <>
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <section className="container top-section">
                <Squiggle className="squiggle" />
                <div className="row">
                    <div className="col-lg-8">
                        {!hideLinks && <Nav />}
                        <h1 className="main-header mt-4">
                            <PinLogo />
                            <span>{headerText}</span>
                        </h1>
                    </div>
                    <div className="col-lg-4">
                        <div className="cls-logo">
                            <GatsbyImage
                                alt=""
                                image={
                                    data.file.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginHeader
