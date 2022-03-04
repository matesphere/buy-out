import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../components/_header'
import Footer from '../components/_footer'
import { Intro } from '../components/student/Intro'
import { InfoBlock } from '../components/student/InfoBlock'
import { Helpful } from '../components/student/Helpful'

import '../scss/index.scss'
import { CheckList } from '../components/student/Checklist'

const HelpPage = ({
    data: {
        graphCmsInfo: {
            title,
            intro,
            infoBlock,
            helpfulInfo,
            checklist,
            image,
        },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{title}</title>
            <meta name="description" content="The description" />
            {/*<meta name="image" content={image} />*/}
        </Helmet>

        <main>
            <Header headerText={title} />
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-8">
                        <Intro item={intro} />
                        <InfoBlock items={infoBlock} />
                    </div>
                    <div className="col-lg-4">
                        <Helpful content={helpfulInfo.info} />
                        <CheckList items={checklist.item} />
                    </div>
                </div>
                <Link to="/student/team-hub">Go to Team Hub</Link>
            </section>
            <Footer />
        </main>
    </>
)

export default HelpPage

export const query = graphql`
    query HelpQuery {
        graphCmsInfo(slug: { eq: "help" }) {
            title
            intro {
                raw
            }
            infoBlock {
                raw
            }
            helpfulInfo {
                info {
                    raw
                }
            }
            checklist {
                item
            }
            image {
                gatsbyImageData
            }
        }
    }
`
