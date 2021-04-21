import React from 'react'
import '../scss/index.scss'

import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Squiggle from "../assets/squiggle.svg";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "cls-ppt3-no-text-crop-1024x322.jpg" }) {
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
                        <div className="col-lg-6">
                            <a className="btn-outline-lg" href="/tutor/login">Tutor login</a>
                        </div>

                        <div className="col-lg-6">
                            <a className="btn-outline-lg" href="/student/login">Student login</a>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default IndexPage
