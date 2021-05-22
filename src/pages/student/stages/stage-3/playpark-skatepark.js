import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import InfoPick from '../../../../assets/info-pick.svg'
import TickSheet from "../../../../assets/tick-sheet.svg";

const Stage3PlaySkate = () => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "skate-park.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)
    return (
      <>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Stage 3 - Play park / Skate park</title>
        </Helmet>
        <main className="the-quest">
          <Header headerText="Stage 3" />
          <section className="container" id="main">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                  Playpark / Skatepark
                </h2>

                <div className="mt-4 mb-4 image-holder">
                  <GatsbyImage
                    image={data.image5.childImageSharp.gatsbyImageData}
                  />
                </div>

                <p className="sm-type-bigamp mb-4">
                  Facilities for children in the Glen are limited and this, unfortunately, is a reason why some families move out of the area and why very few families are trying to move in. A playpark would be a valuable asset for the school, so that the children could make use of it during their down time and it would also be open to the public so that children of visitors could play in it.
                </p>

                <p className="sm-type-bigamp mb-4">
                  There really are no facilities for teenagers in the Glen at all and children of secondary school age have to travel by bus to school in the town 26 miles away. A skate park could give young people a focus and provide them with a facility that would also help them to be physically active.
                </p>
                <p className="sm-type-bigamp mb-4">
                  Both of these facilities could encourage visitors with children to come to the Glen.
                </p>
                <p className="sm-type-bigamp mb-4">
                    There is ample land available for both a Playpark and Skatepark to the southeast of the potential areas for Affordable Housing. The westerly site would be preferable as this is closer to the school, which would make it easier for the school pupils to use it during break and lunchtimes.
                </p>
                <p className="sm-type-bigamp mb-4">
                  There are many companies in Scotland (such as:  <a
                    href="https://www.scotplay.co.uk"
                    target="_blank"
                    rel="etxernal"
                >
                  https://www.scotplay.co.uk
                </a>) that provide and install equipment for parks and schools, and a typical playpark for a small primary school or small village, complete with rubber Safety Surfacing would cost £25,000.
                </p>
                <p className="sm-type-bigamp mb-4">
                  A skatepark is a more expensive proposition and a small sized facility would cost £50,000, assuming the ground would have to be prepared from scratch and it is constructed from poured concrete.
                </p>

                <p className="sm-type-bigamp mb-4">
                  Skateboard: Scotland provide excellent advice on their website  (<a
                    href="https://skateboardscotland.com/guidelines-for-building-a-community-skatepark/"
                    target="_blank"
                    rel="external"
                >
                  https://skateboardscotland.com/guidelines-for-building-a-community-skatepark/
                </a>) about the whole process for building a skatepark.
                </p>

                <p className="sm-type-lead sm-type-lead--medium mb-2">
                  Funding for either parks would come from:
                </p>

                <div className="table table-pricing">
                  <div className="heading">
                    <div className="cell">
                      <p> </p>
                    </div>
                    <div className="cell">
                      <p>Playpark</p>
                    </div>
                    <div className="cell">
                      <p>Skatepark</p>
                    </div>
                  </div>
                  <div className="roww">
                    <div className="cell">
                      <p>
                        Highland Council (tied into the Active Children Charter)
                      </p>
                    </div>
                    <div className="cell">
                      <p>£15,000</p>
                    </div>
                    <div className="cell">
                      <p>£15,000</p>
                    </div>
                  </div>
                  <div className="roww">
                    <div className="cell">
                      <p>Sport Scotland </p>
                    </div>
                    <div className="cell">
                      <p> </p>
                    </div>
                    <div className="cell">
                      <p>£10,000</p>
                    </div>
                  </div>
                  <div className="roww">
                    <div className="cell">
                      <p>Big Lottery</p>
                    </div>
                    <div className="cell">
                      <p>£10,000</p>
                    </div>
                    <div className="cell">
                      <p>£10,000</p>
                    </div>
                  </div>
                  <div className="roww">
                    <div className="cell">
                      <p>Local fundraising </p>
                    </div>
                    <div className="cell">
                      <p> </p>
                    </div>
                    <div className="cell">
                      <p>£15,000</p>
                    </div>
                  </div>
                </div>

                <div className="side-grey">
                  <p className="sm-type-guitar sm-type-guitar--medium">
                    <span className="side-icon side-icon-orange">
                      <HelpIcon />
                    </span>
                    Funding Options
                  </p>
                  <p className="sm-type-bigamp">
                    Could be located behind the school and provide a facility for the primary school children as well as for older children
                  </p>
                  <ul>
                    <li>
                      <p className="sm-type-bigamp">
                        <a href="https://www.tnlcommunityfund.org.uk/funding/programmes/national-lottery-awards-for-all-scotland#section-1" target="_blank" rel="external">Community Fund - Awards for All</a>
                      </p>
                    </li>
                    <li>
                      <p className="sm-type-bigamp">
                        <a href="https://www.tnlcommunityfund.org.uk/funding/programmes/young-start#section-1" target="_blank" rel="external">Community Fund  - Young Start</a>
                      </p>
                    </li>
                  </ul>
                </div>

                <p className="sm-type-bigamp mb-4">
                  <Link href="/student/stage-3/glenclas-map-options">Back to the map</Link>
                </p>
              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2">
                  <span className="side-icon side-icon-orange">
                    <HelpIcon />
                  </span>
                  Helpful information
                </p>
                <div className="side-grey">
                  <p className="sm-type-amp">
                    Make notes of the amenities and the opportunities.
                  </p>
                  <p className="sm-type-amp">
                    <Link href="/student/stage-3/glenclas-map-options">Back to the map</Link>
                  </p>
                </div>

                <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                  Your checklist
                </p>
                <div className="side-grey">
                  <div className="checklist">
                    <div className="tick"></div>
                    <p className="sm-type-lead">You have read the information for Play park / Skate park.</p>
                  </div>
                  <div className="checklist">
                    <div className="tick"></div>
                    <p className="sm-type-lead">You have seen the funding options for Play park / Skate park.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </>
    );
}

export default Stage3PlaySkate
