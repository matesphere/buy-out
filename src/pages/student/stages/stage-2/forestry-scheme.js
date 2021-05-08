import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../../../../components/_header";
import Footer from "../../../../components/_footer";
import HelpIcon from "../../../../assets/help-icon.svg";

import "../../../../scss/index.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import Ticklr from "../../../../assets/tick-lr.svg";
import Ticklr2 from "../../../../assets/tick-lr2.svg";
const Stage2ForestryScheme = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "forestry-scheme.jpg" }) {
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
        <title>Stage 3 - Lay The Foundations - Forestry Scheme</title>
      </Helmet>
      <main className="the-quest">
        <Header headerText="Stage 3" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                Forestry Scheme
              </h2>

              <div className="mt-4 mb-4 image-holder">
                <GatsbyImage
                  image={data.image1.childImageSharp.gatsbyImageData}
                />
              </div>

              <p className="sm-type-bigamp mb-2">
                On the hill behind, and to the south west, of the village of
                Glenclas is an area of land of approximately 3 hectares which is
                currently rough grazing.
              </p>
              <p className="sm-type-bigamp mb-2">
                The forestry proposal is for this are to be planted with native
                broadleaved trees, such as hazel, oak and birch. This would
                recreate a native forest which would provide valuable habitat
                for a wide range of species. It would contribute to national
                climate mitigation strategies and the storage of carbon in the
                soil would exceed that sored in softwood plantations. From the
                community’s point of view the forest would provide the potential
                of woodland walks and enhance the scenic beauty of the are for
                generations to come.
              </p>
              <p className="sm-type-bigamp mb-2">
                There is also the possibility of grazing cattle amongst the
                trees, thereby continuing with the agricultural productivity of
                the land.
              </p>
              <p className="sm-type-bigamp mb-2">
                The forest would be eligible for two grant schemes:
              </p>

              <p className="sm-type-bigamp mb-2">
                The Woodland Creation part of the Forestry Grant Scheme (
                <a
                  href="https://www.forestry.gov.scot/support-regulations/woodland-creation"
                  target="_blank"
                  rel="external"
                >
                  www.forestry.gov.scot/support-regulations/woodland-creation
                </a>
                ), which is provided to support the creation of native
                broadleaved woodland (up to a maximum of 5 hectares).
              </p>
              <p className="sm-type-bigamp sm-type-bigamp--medium mb-2">
                The funding available for this 3ha site would be:
              </p>

              <div className="table table-proposal-two">
                <div className="roww">
                  <div className="cell">
                    <p>Initial Planting</p>
                  </div>
                  <div className="cell">
                    <p>£5,520</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Fencing and crop protection</p>
                  </div>
                  <div className="cell">
                    <p>£4,014</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>5 years crop maintenance</p>
                  </div>
                  <div className="cell">
                    <p>£4,080</p>
                  </div>
                </div>
                <div className="roww">
                  <div className="cell">
                    <p>Total grant (5 years)</p>
                  </div>
                  <div className="cell">
                    <p>£13,614</p>
                  </div>
                </div>
              </div>

              <p className="sm-type-bigamp mb-2">
                Future Woodlands Scotland (
                <a
                  href="https://www.futurewoodlands.org.uk"
                  target="_blank"
                  rel="external"
                >
                  www.futurewoodlands.org.uk
                </a>
                ) is a fund to develop and enhance native woodland and payments
                of £100/ha per year for 20 years are available.
              </p>

              <p className="sm-type-bigamp mb-2">
                If volunteers were used to plant the trees, it would be possible
                to fund this scheme 100% with grants, including maintenance
                payments for up to 20 years.
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

export default Stage2ForestryScheme;
