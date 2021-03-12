import * as React from "react"

import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'
import Submit from "../assets/submit.svg";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"

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
    <main className="the-quest">
        <Helmet>
            <title>Quest 1</title>
            <meta name="description" content="The description" />
            {/*<meta name="image" content={image} />*/}
            <meta property="og:url" content="url" />
            <meta property="og:title" content="Quest 1" />
            <meta property="og:description" content="The description" />
            {/*<meta property="og:image" content={image} />*/}
        </Helmet>
      <Header headerText="the Quest" />
      <section className="container" id="main">
        <div className="row">
          <div className="col-lg-12">
              <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Quest 2 - Consult</h1>
          </div>
        </div>
          <div className="row">
              <div className="col-lg-8">
                  <p className="sm-type-guitar sm-type-guitar--medium mt-4 mb-4"></p>
                  <p className="sm-type-amp mb-4">Hold a community meeting to explore the options</p>
                  <p className="sm-type-amp mb-4">If there is community support, elect a Steering Group to take forward a possible purchase</p>

                  <h2 className="sm-type-drum">Useful links</h2>

                  <ul>
                      <li>
                          <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank">Community Land Scotland About Us</a>
                      </li>
                      <li>
                          <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank">Community Land Scotland About Us</a>
                      </li>
                      <li>
                          <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank">Community Land Scotland About Us</a>
                      </li>
                      <li>
                          <a href="https://www.communitylandscotland.org.uk/about-us/what-we-do/" rel="external" target="_blank">Community Land Scotland About Us</a>
                      </li>
                  </ul>
              </div>

              <div className="col-lg-4">
                  <div className="side-color">
                      <div className="side-color-text">
                          <span className="submit-icon">
                            <Submit />
                          </span>
                          <p className="sm-type-guitar">Have you gathered enough information?</p>
                          <p className="sm-type-amp mb-4">No move on to submitting your findings.</p>
                          <Link to="/your-notes" className="btn-solid-lg">
                              <Submit />
                              Submit
                          </Link>
                      </div>
                  </div>
              </div>
          </div>




      </section>
      <Footer />
    </main>
  )
}

export default QuestPage
