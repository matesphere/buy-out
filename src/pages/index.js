import React from 'react'
import '../scss/index.scss'

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Squiggle from '../assets/squiggle.svg'
import PinLogo from '../assets/pin-logo.svg'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    const data1 = useStaticQuery(graphql`
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
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Community Land Quest</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
            </Helmet>
            <section className="container top-section">
                <Squiggle className="squiggle" />
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="main-header">
                            <PinLogo />
                            <span>Community Land Quest</span>
                        </h1>
                    </div>
                    <div className="col-lg-4">
                        <div className="cls-logo">
                            <GatsbyImage
                                alt=""
                                image={
                                    data1.file.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
            <main className="homepage">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 text-align-center">
                                Make your community a landowner!
                            </h2>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <a className="btn-outline-lg" href="/login">Login</a>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default IndexPage
