import * as React from "react"

import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import Tick from '../assets/tick.svg'

const QuestPage = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fairer-scotland.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
      <>
          <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Quest 1</title>
              <meta name="description" content="The description" />
              {/*<meta name="image" content={image} />*/}
              <meta property="og:url" content="url" />
              <meta property="og:title" content="Quest 1" />
              <meta property="og:description" content="The description" />
              {/*<meta property="og:image" content={image} />*/}
          </Helmet>
            <main className="the-quest">

              <Header headerText="the Quest" />
              <section className="container" id="main">
                <div className="row">
                  <div className="col-lg-12">
                      <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Quest 1 - Research</h1>
                  </div>
                </div>
                  <div className="row">
                      <div className="col-lg-8">
                          <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-4">The legitimate place of people in the landscape: renewing and repopulating rural Scotland</p>
                          <p className="sm-type-lead mb-4">Contact Community Land Scotland (CLS)</p>
                          <p className="sm-type-lead mb-4">Find out about what funding is available</p>
                          <p className="sm-type-lead mb-4">Get in touch with the agencies that can support you through the journey</p>
                          <p className="sm-type-lead mb-4">Look into options: Protocol or CRTB</p>

                          <div className="sm-type-amp mb-4">
                              <ul>
                                  <li className="mb-2">CLS has a ‘Protocol for Negotiated Sales of Land with Scottish Land and Estates’ (SLE), which provide guidance for sales between SLE and CLS members</li>
                                  <li>'Community Right To Buy' (CRTB) is a statutory route that allows communities the right to buy land when it comes up for sale.</li>
                              </ul>
                          </div>

                          <p className="sm-type-lead mb-4">Identify who the landowner is</p>
                          <div className="mb-4">
                              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
                          </div>
                          <h2 className="sm-type-drum">Useful links</h2>

                          <ul>
                              <li>
                                  <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank" rel="noreferrer">Community Land Scotland About Us</a>
                              </li>
                              <li>
                                  <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank" rel="noreferrer">Community Land Scotland About Us</a>
                              </li>
                              <li>
                                  <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank" rel="noreferrer">Community Land Scotland About Us</a>
                              </li>
                              <li>
                                  <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank" rel="noreferrer">Community Land Scotland About Us</a>
                              </li>
                          </ul>
                      </div>

                      <div className="col-lg-4">
                          <div className="side-color">
                              <div className="side-color-text">
                                  <p className="sm-type-guitar">Congratulations?</p>
                                  <p className="sm-type-amp mb-4">You have completed Quest 1.</p>
                                  <Tick />
                                  <p><Link className="dark-link" to="/your-notes#guest-1">Your Quest 1 notes</Link></p>
                                  <p><Link className="dark-link" to="/the-quest-2">Move onto Quest 2</Link></p>
                              </div>
                          </div>
                      </div>
                  </div>




              </section>
              <Footer />
            </main>
          </>
  )
}

export default QuestPage
