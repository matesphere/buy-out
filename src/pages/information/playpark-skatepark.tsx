import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../components/student/ReadQuesty'
import { DevOptionsChecklist } from './development-options'

import InfoSkate from '../../assets/info-skate.svg'

import '../../scss/index.scss'
import { DevOpsRenderer } from "../../components/student/RichTextRenderers";
import { FundingOptions } from "../../components/student/FundingOptions";
import {CheckList} from "../../components/student/Checklist";

const InfoPlaySkate = ({ data }) => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Play park / Skate park</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Information" />
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
                                        displayName: 'Info Hub',
                                        url: '/student/information',
                                    },
                                    {
                                        displayName: 'Development Options',
                                        url: '/information/development-options',
                                    },
                                ]}
                                currentDisplayName={data.content.developmentOption.title}
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoSkate />
                                </span>
                                {data.content.developmentOption.title}
                            </h2>
                            <ReadQuesty
                                text={data.content.developmentOption.intro}
                            />
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                            <DevOpsRenderer content={data.content.developmentOption.mainText.raw} />
                            <FundingOptions content={data.content.developmentOption.fundingOptions.raw} />
                            <p className="sm-type-bigamp mb-4">
                                <Link to="/information/development-options">
                                    Back to the options
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            {data.content.developmentOption.checklist &&
                            <CheckList items={data.content.developmentOption.checklist.item} />
                            }
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default InfoPlaySkate
export const query = graphql`
    query PlayParkQuery {
        image1: file(relativePath: { eq: "skate-park.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
        content {
            developmentOption(where: { slug: "playpark-skatepark" }) {
                title
                intro
                mainText {
                    raw
                }
                checklist {
                    item
                }
                fundingOptions {
                  raw
                }
            }
        }
    }
`