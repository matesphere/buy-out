import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../components/student/ReadQuesty'
import { DevOptionsChecklist } from './development-options'

import HelpIcon from '../../assets/help-icon.svg'
import InfoHouse from '../../assets/info-house.svg'

import '../../scss/index.scss'
import {DevOpsRenderer} from "../../components/student/RichTextRenderers";
import {FundingOptions} from "../../components/student/FundingOptions";

const InfoHousingPage = ({ data }) => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Affordable Housing Scheme</title>
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
                                currentDisplayName="Affordable Housing Scheme"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                <span className="page-icon">
                                    <InfoHouse />
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
                            {data.content.developmentOption.fundingOptions &&
                                <FundingOptions content={data.content.developmentOption.fundingOptions.raw}/>
                            }

                            <p className="sm-type-bigamp mb-4">
                                <Link to="/information/development-options">
                                    Back to the the options
                                </Link>
                            </p>
                        </div>
                        <DevOptionsChecklist optionName="Affordable Housing Scheme" />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default InfoHousingPage

export const query = graphql`
    query AffordableHousingQuery {
        image1: file(relativePath: { eq: "modular-house.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
        content {
            developmentOption(where: { slug: "affordable-housing-scheme" }) {
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

