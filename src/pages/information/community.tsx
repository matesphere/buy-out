import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'

import { slickSettings } from '../../utils/slicksettings'

import HelpIcon from '../../assets/help-icon.svg'

import '../../scss/index.scss'
import {IntroInfo} from "../../components/student/IntroInfo";
import {SliderM} from "../../components/student/Slider";
import {Helpful} from "../../components/student/Helpful";

const InfoCommunityPage = ({ data }) => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - {data.content.info.title}</title>
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
                                currentDisplayName="Community & Experts"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {data.content.info.title}
                            </h2>
                            <IntroInfo items={data.content.info.intro} />
                            <SliderM items={data.content.info.slider} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={data.content.info.helpfulInfo.info.raw} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default InfoCommunityPage

export const query = graphql`
    query AboutCommunityQuery {
        content {
        info(where: { slug: "community" }) {
          title
          intro {
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
    }
`