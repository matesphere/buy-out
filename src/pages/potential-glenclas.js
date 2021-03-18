import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import InfoPick from "../assets/info-pick.svg";

import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";

const IntroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image5: file(relativePath: { eq: "map-zoom.jpg" }) {
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
            <main className="homepage">
              <Header headerText="Introduction" />
              <section className="container" id="main">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Development Options:</h2>
                    <div className="image-map mb-4 mt-4">
                      <div className="image-map-holder">
                        <div>
                          <GatsbyImage image={data.image5.childImageSharp.gatsbyImageData} />
                        </div>
                        <div className="hover-pins">
                          <p className="sm-type-amp">Hover over the pins to see more information</p>
                        </div>
                        <div className="outer-grid">
                          <div className="outer-square">
                            <div className="inner-grid inner-grid-1">
                              <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-c">
                                   <p className="sm-type-amp">Shop and Post Office.</p>
                                   <p className="sm-type-amp">Heritage Centre.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-2">
                               <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-c">
                                   <p className="sm-type-amp">Affordable Housing area.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-3">
                               <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-r">
                                   <p className="sm-type-amp">Campsite / Cabins.</p>
                                   <p className="sm-type-amp">Market gardening.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-4">
                              <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-c">
                                   <p className="sm-type-amp">Play park / Skate park.</p>
                                   <p className="sm-type-amp">Wind turbine.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-5">
                              <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-c">
                                   <p className="sm-type-amp">Business hub.</p>

                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-6">
                               <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-r">
                                   <p className="sm-type-amp">Forest area.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-7">

                            </div>
                            <div className="inner-grid inner-grid-8">
                              <span className="info-icon">
                                <InfoPick />
                                 <div className="info-icon-show info-icon-show-c">
                                   <p className="sm-type-amp">Micro Hydro.</p>
                                 </div>
                              </span>
                            </div>
                            <div className="inner-grid inner-grid-9">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div className="table">
                          <div className="heading">
                              <div className="cell">
                                  <p>Options</p>
                              </div>
                              <div className="cell">
                                  <p>Notes</p>
                              </div>
                          </div>


                          <div className="roww">
                              <div className="cell">
                                  <p>Affordable housing</p>
                              </div>
                              <div className="cell">
                                  <p>Space for 3 pairs of semi-detached houses behind a row of existing houses.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Play park / skate park</p>
                              </div>
                              <div className="cell">
                                  <p>Could be located behind the school and provide a facility for the primary school children as well as for older children.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Shop and PO</p>
                              </div>
                              <div className="cell">
                                  <p>Could be situated just of the ‘High Street’ a purpose-built mini supermarket and shop, to service the local community and visitors.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Micro-hydro</p>
                              </div>
                              <div className="cell">
                                  <p>Making use of the stream coming off the hill behind the village. Providing both power for the community and an income from electricity sold onto the grid.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Wind turbine</p>
                              </div>
                              <div className="cell">
                                  <p>Situated on the hill behind the village. Providing both power for the community and an income from electricity sold onto the grid.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Business hub</p>
                              </div>
                              <div className="cell">
                                  <p>Situated off the main thoroughfare, a new build that could be divided into units for offices and/or workshops.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Forest</p>
                              </div>
                              <div className="cell">
                                  <p>On the extensive hill behind the village, an area of some 15 acres to be planted as mixed woodland. Potential for income from the softwood, amenity value (woodland walks) and habitat creation as well as climate mitigation</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Campsite / cabins / glamping</p>
                              </div>
                              <div className="cell">
                                  <p>Potential for a community owned campsite and area for cabins or wigwams. The shower toilet block could be made available to public use (for a fee) to allow campervan and other tourists to use the facilities.
                                  </p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Local heritage centre</p>
                              </div>
                              <div className="cell">
                                  <p>A ‘Learning Centre’ focussed on the lives of people in the area over the past 200 years. This would be a focus for local residents but also for people returning to the area and wanting to research their roots, possibly from abroad.</p>
                              </div>
                          </div>

                          <div className="roww">
                              <div className="cell">
                                  <p>Market garden</p>
                              </div>
                              <div className="cell">
                                  <p>A commercial operation to grow year-round fruit and vegetables for the local community and for local businesses such as the Glenclas Hotel and Lodge.</p>
                              </div>
                          </div>
                      </div>

                    <p className="sm-type-amp"><Link to="/about-glenclas-people">Hear from the people of Glenclas</Link></p>
                  </div>
                  <div className="col-lg-4">
                    <p className="sm-type-guitar mb-2">Helpful information</p>
                    <div className="side-grey">
                      <p className="sm-type-amp">Read all about Glenclas and find out what you need to move on to the next quest.</p>
                      <p className="sm-type-amp">Make notes of the amenities and the opportunities.</p>
                      <p className="sm-type-amp"><Link to="/about-glenclas-people">Hear from the people of Glenclas</Link></p>

                    </div>
                  </div>
                </div>
              </section>

              <Footer />
            </main>
          </>
  )
}

export default IntroPage
