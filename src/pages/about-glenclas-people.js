import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import ScotlandArea from "../assets/scotland-area.svg";

import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";

const IntroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "glenclas-people-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image2: file(relativePath: { eq: "glenclas-people-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image3: file(relativePath: { eq: "glenclas-people-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image4: file(relativePath: { eq: "glenclas-people-4.jpg" }) {
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
                <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">About the people:</h2>

                <div className="row mb-4">
                  <div className="col-lg-8">
                    <p className="sm-type-guitar sm-type-guitar--medium mb-2">Margaret Keeble (school teacher)</p>
                    <p className="sm-type-lead mb-2">The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south road. At the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenelg village had a population of 208</p>
                    <p className="sm-type-guitar sm-type-italic mb-2">"We need to develop the area to increase pupil numbers. The school is the heart of the area. If it has to close then the history and the pupil experiences will disappear. "</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="mt-4">
                      <GatsbyImage image={data.image1.childImageSharp.gatsbyImageData} />
                      <p className="sm-type-pedal">Margaret Keeble (school teacher)</p>

                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-lg-8">
                    <p className="sm-type-guitar sm-type-guitar--medium mb-2">Johnny Thompson (resident)</p>
                    <p className="sm-type-lead mb-2">The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south road. At the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenelg village had a population of 208</p>
                    <p className="sm-type-guitar sm-type-italic mb-2">"We need to develop the area to increase pupil numbers. The school is the heart of the area. If it has to close then the history and the pupil experiences will disappear. "</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="mt-4">
                      <GatsbyImage image={data.image2.childImageSharp.gatsbyImageData} />
                      <p className="sm-type-pedal">Johnny Thompson (resident)</p>

                    </div>
                    </div>
                  </div>

                <div className="row mb-4">
                  <div className="col-lg-8">
                    <p className="sm-type-guitar sm-type-guitar--medium mb-2">Andrew Henderson (landlord)</p>
                    <p className="sm-type-lead mb-2">The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south road. At the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenelg village had a population of 208</p>
                    <p className="sm-type-guitar sm-type-italic mb-2">"We need to develop the area to increase pupil numbers. The school is the heart of the area. If it has to close then the history and the pupil experiences will disappear. "</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="mt-4">
                      <GatsbyImage image={data.image3.childImageSharp.gatsbyImageData} />
                      <p className="sm-type-pedal">Andrew Henderson (landlord)</p>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-lg-8">
                    <p className="sm-type-guitar sm-type-guitar--medium mb-2">Jane Monroe (student)</p>
                    <p className="sm-type-lead mb-2">The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south road. At the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenelg village had a population of 208</p>
                    <p className="sm-type-guitar sm-type-italic mb-2">"We need to develop the area to increase pupil numbers. The school is the heart of the area. If it has to close then the history and the pupil experiences will disappear. "</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="mt-4">
                      <GatsbyImage image={data.image4.childImageSharp.gatsbyImageData} />
                      <p className="sm-type-pedal">Jane Monroe (student)</p>

                    </div>
                  </div>
                </div>
                <p className="sm-type-amp"><Link to="/about-glenclas">Back to Glenclas information</Link></p>

              </div>
              <div className="col-lg-4">
                <p className="sm-type-guitar mb-2">Helpful information</p>
                <div className="side-grey">
                  <p className="sm-type-amp">Read all about the people of Glenclas and find out what you need to move on to the next quest.</p>
                  <p className="sm-type-amp">They all have a story to tell about Glenclas.</p>
                  <p className="sm-type-amp"><Link to="/about-glenclas">Back to Glenclas information</Link></p>

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
