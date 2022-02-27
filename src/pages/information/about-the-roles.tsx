import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import '../../scss/index.scss'
import { graphql } from 'gatsby'
import { Helpful } from '../../components/student/Helpful'
import { CheckList } from '../../components/student/Checklist'
import { SliderM } from '../../components/student/Slider'
import { InfoBlock } from '../../components/student/InfoBlock'

const Stage2TaskPage = ({ data }) => {
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
                                currentDisplayName="About the Roles"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {data.content.info.title}
                            </h2>
                            <InfoBlock items={data.content.info.infoBlock} />
                            <SliderM items={data.content.info.slider} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful
                                content={data.content.info.helpfulInfo.info.raw}
                            />
                            <CheckList
                                items={data.content.info.checklist.item}
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage2TaskPage

export const query = graphql`
    query AboutRolesQuery {
        content {
            info(where: { slug: "about-the-roles" }) {
                title
                infoBlock {
                    raw
                }
                slider {
                    raw
                }
                checklist {
                    item
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
