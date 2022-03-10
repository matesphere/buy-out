import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../components/student/ReadQuesty'
import { CheckList } from '../../components/student/Checklist'
import { FundingOptions } from '../../components/student/FundingOptions'
import { DevOpsRenderer } from '../../components/student/RichTextRenderers'

import InfoHouse from '../../assets/info-house.svg'
import '../../scss/index.scss'

const InfoHousingPage = ({
    data: {
        graphCmsDevelopmentOption: {
            title,
            intro,
            mainText,
            checklist,
            fundingOptions,
            informationMainImage,
        },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Affordable Housing Scheme</title>
        </Helmet>
        <main className="the-quest">
            <Header headerText="Development Options" />

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
                            currentDisplayName={title}
                        />

                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            <span className="page-icon">
                                <InfoHouse />
                            </span>
                            {title}
                        </h2>

                        <ReadQuesty text={intro} />

                        <div className="mt-4 mb-4 image-holder">
                            <GatsbyImage
                                alt=""
                                image={informationMainImage.gatsbyImageData}
                            />
                        </div>

                        <DevOpsRenderer content={mainText.raw} />

                        {fundingOptions && (
                            <FundingOptions content={fundingOptions.raw} />
                        )}

                        <p className="sm-type-bigamp mb-4">
                            <Link to="/information/development-options">
                                Back to the the options
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-4">
                        {checklist && <CheckList items={checklist.item} />}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    </>
)

export default InfoHousingPage

export const query = graphql`
    query AffordableHousingQuery {
        graphCmsDevelopmentOption(slug: { eq: "affordable-housing-scheme" }) {
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
            informationMainImage {
                gatsbyImageData
            }
        }
    }
`
