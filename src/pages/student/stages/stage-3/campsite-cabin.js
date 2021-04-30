import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import HelpIcon from "../../../../assets/help-icon.svg";

import "../../../../scss/index.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const Stage3CampsiteCabin = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "camping-cabins.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Stage 3 - Lay The Foundations - Campsite and Cabins Scheme
        </title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 3" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Campsite and Cabins Scheme
              </h2>

              <div className="mt-4 mb-4 image-holder">
                <GatsbyImage
                  image={data.image1.childImageSharp.gatsbyImageData}
                />
              </div>

              <p className="sm-type-bigamp mb-4">
                There is currently no campsite in Glenclas, or facilities for
                campervans. This causes some annoyance to local people, as some
                tourists ‘wild camp’, as they are legally entitled to do, except
                that sometimes they do not take their waste away with them.
                Also, some people with camper vans park overnight in passing
                places, which makes using the single-track road difficult and
                others park up in lay-bys, sometime dumping their ‘chemical
                waste’ nearby.
              </p>
              <p className="sm-type-bigamp mb-4">
                This situation is common to many parts of Scotland and is likely
                to be particularly bad over the next few years as people holiday
                in the UK rather than travel overseas after the Pandemic. It is
                only a minority of people who cause these problems, but it does
                enrage the local people when it happens. It is likely, therefore
                that there would be significant local support for a campsite,
                even though there would be some visual impact. The site would
                also be situated as far up the glen as possible away from the
                sea, so that it would not interfere with the sea views.
              </p>
              <p className="sm-type-bigamp mb-4">
                It would not mean that all campers and campervan owners would
                use the site, but there would be disposal facilities on-site for
                chemical toilets (for a small fee) which, it is hoped, would
                reduce the dumping of this waste in laybys.
              </p>
              <p className="sm-type-bigamp mb-4">
                At the eastern end of the land for sale is a 3-hectare plot
                which could be divided up to provide 2 hectares for a Campsite,
                together with a Reception ‘hut’, shower and toilet block, 20
                tent sites, 8 hard standings with electrical hook-ups for
                caravans and camper vans plus 4 cabins/glamping pods.
              </p>
              <p className="sm-type-bigamp mb-4">
                There is easy access to all utilities and so the cost of setting
                up the site would be relatively low. The cabins would be fully
                furnished, with a small kitchenette area, but bathroom and
                toilet facilities would be available in the campsite ‘shower
                block’. If there is high occupancy of the cabins, it would be
                possible to bring in some completely self-contained cabins with
                shower and toilet facilities.
              </p>

              <div className="table table-pricing">
                <div className="heading">
                  <div className="cell">
                    <p>Setup costs</p>
                  </div>
                  <div className="cell">
                    <p>£</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Reception Hut</p>
                  </div>
                  <div className="cell">
                    <p>&pound;10,000</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Shower and toilet block</p>
                  </div>
                  <div className="cell">
                    <p>&pound;50,000</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Utilities and electric hook-ups</p>
                  </div>
                  <div className="cell">
                    <p>&pound;12,000</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>8 Hard Standings</p>
                  </div>
                  <div className="cell">
                    <p>&pound;16,000</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>4 furnished cabins</p>
                  </div>
                  <div className="cell">
                    <p>&pound;60,000</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p className="sm-type-lead--medium">Total</p>
                  </div>
                  <div className="cell">
                    <p className="sm-type-lead--medium">148,000</p>
                  </div>
                </div>
              </div>

              <p className="sm-type-bigamp mb-4">
                To run the campsite, there would need to be one full-time
                employee, plus week-end cover, who would run the reception and
                ensure that the site was being used responsibly. In addition,
                there would need to be a cleaner responsible for cleaning the
                shower block twice a day, keeping the site clean and removing
                litter and rubbish. This would be at a cost of £36,000 per year.
              </p>

              <div className="table table-pricing">
                <div className="heading">
                  <div className="cell">
                    <p>Prices per night</p>
                  </div>
                  <div className="cell">
                    <p>
                      Low Season
                      <br />
                      Before 1 June After 1 Sept{" "}
                    </p>
                  </div>
                  <div className="cell">
                    <p>
                      High Season <br />1 June - 31 Aug
                    </p>
                  </div>
                </div>

                <div className="roww">
                  <div className="cell">
                    <p>Caravan & 2 Adults</p>
                  </div>
                  <div className="cell">
                    <p>£21.00</p>
                  </div>
                  <div className="cell">
                    <p>£23.00</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Campervan & 2 Adults</p>
                  </div>
                  <div className="cell">
                    <p>£20.00</p>
                  </div>
                  <div className="cell">
                    <p>£22.00</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Tent & 1 Adult</p>
                  </div>
                  <div className="cell">
                    <p>£12.00</p>
                  </div>
                  <div className="cell">
                    <p>£14.00</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Adults</p>
                  </div>
                  <div className="cell">
                    <p>£8.00</p>
                  </div>
                  <div className="cell">
                    <p>£8.00</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Children</p>
                  </div>
                  <div className="cell">
                    <p>£3.00</p>
                  </div>
                  <div className="cell">
                    <p>£3.00</p>
                  </div>
                </div>

                <div className="roww">
                  <div className="cell">
                    <p>
                      Cabin
                      <br /> Max 2 adults and 2 children
                    </p>
                  </div>
                  <div className="cell">
                    <p>£60.00</p>
                  </div>
                  <div className="cell">
                    <p>£70.00</p>
                  </div>
                </div>
              </div>

              <p className="sm-type-bigamp mb-4">
                The viability of this scheme would depend on the occupancy of
                the site throughout the year. It may be that the site should be
                closed for several months through the winter, when occupancy
                would be low, say for the months of November, December, January,
                February and March. This would reduce the staffing costs to
                £21,000 per year.
              </p>
              <p className="sm-type-bigamp mb-4">
                It will be necessary to estimate the annual income from the
                Campsite and Cabins for the Business Plan, which will require
                figures over the first 4 years of the project. This should be
                based on these prices and consideration given to the expectation
                that the reputation of the site will build over time.
              </p>
              <p className="sm-type-bigamp mb-4">
                Other overheads would be the cost of electricity and water at
                £700 each per year.
              </p>

              <p className="sm-type-bigamp mb-4">
                <Link href="/student/stage-3">Back to Stage 3</Link>
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
                  <Link href="/student/stage-3">Back to Stage 3</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Stage3CampsiteCabin;
