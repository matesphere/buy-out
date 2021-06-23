import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Helpful } from '../../components/common/Helpful'


import '../../scss/index.scss'

import {
    stage2CheckListEng,
    stage2HelpfulEng,
    stage2DataTitleEng,
    stage2DataSubTitleEng,
    stage2DataTextEng,
} from './_aboutswot.data'

const AboutSwotPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "swot.jpg" }) {
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
                <title>Information - About the roles</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Information" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            {stage2DataTitleEng.map((text, i) => (
                                <h2
                                    key={i}
                                    className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4"
                                >
                                    {text}
                                </h2>
                            ))}

                            {stage2DataSubTitleEng.map((text, i) => (
                                <p key={i} className="sm-type-guitar mb-4">
                                    {text}
                                </p>
                            ))}

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            {stage2DataTextEng.map((text, i) => (
                                <p key={i} className="sm-type-lead mb-4">
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div className="col-lg-3">
                            <Helpful items={stage2HelpfulEng} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default AboutSwotPage
