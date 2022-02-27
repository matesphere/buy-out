import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { InfoBlock } from '../../components/student/InfoBlock'
import { Helpful } from '../../components/student/Helpful'

// import { AboutSWOTQuery } from '../../gql/types/'

import '../../scss/index.scss'

const AboutSwotPage: FC = ({ data }) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Information - About SWOT</title>
        </Helmet>
        <main className="the-quest">
            <Header headerText="Information" />
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-9">
                        <Breadcrumbs
                            previous={[
                                {
                                    displayName: 'Team Hub',
                                    url: '/student/team-hub/',
                                },
                                {
                                    displayName: 'Info Hub',
                                    url: '/student/information',
                                },
                            ]}
                            currentDisplayName="About SWOT"
                        />
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            {data.content.info.title}
                        </h2>

                        <Intro item={data.content.info.intro} />

                        <div className="mt-4 mb-4 image-holder">
                            <GatsbyImage
                                alt=""
                                image={
                                    data.image1.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>

                        <InfoBlock items={data.content.info.infoBlock} />
                    </div>
                    <div className="col-lg-3">
                        <Helpful content={data.content.info.helpfulInfo.info} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    </>
)

export default AboutSwotPage

export const query = graphql`
    query AboutSWOTQuery {
        content {
            info(where: { slug: "about-swot" }) {
                title
                intro {
                    raw
                }
                infoBlock {
                    raw
                }
                slider {
                    raw
                }
                helpfulInfo {
                    info {
                        raw
                    }
                }
            }
        }
        image1: file(relativePath: { eq: "swot.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`
