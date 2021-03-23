import React from "react"
import Header from '../components/_header'
import Footer from '../components/_footer'
import '../scss/index.scss'

import ScotlandArea from "../assets/scotland-area.svg";

import {graphql, Link, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";
import HelpIcon from "../assets/help-icon.svg";

const IntroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "glenclas-scene.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image2: file(relativePath: { eq: "glenclas-coast.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image3: file(relativePath: { eq: "glenclas-inn.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      image4: file(relativePath: { eq: "glenclas-school.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
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
      <main className="the-quest">
        <Header headerText="Introduction" />
        <section className="container" id="main">
          <div className="row">
            <div className="col-lg-8">

              <div className="row">
                <div className="col-lg-8">
                  <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">About Glenclas:</h2>
                  <p className="sm-type-lead mb-2">Your quest will concentrate around Glenclas (Gleann Clas, ‘valley of the class’) is a scattered community area and <a href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland" rel="noreferrer" target="_blank">civil parish</a> in the <a href="https://en.wikipedia.org/wiki/Loch_Alsh" rel="noreferrer" target="_blank">Lochalsh</a> area of <a href="https://en.wikipedia.org/wiki/Highland_council_area" rel="noreferrer" target="_blank">Highland</a> in western Scotland.</p>
                </div>
                <div className="col-lg-4">
                  <div className="scotland-area mb-4">
                    <ScotlandArea />
                  </div>
                </div>
              </div>

              <p className="sm-type-lead mb-2">Despite the local government reorganisation the area is considered by many still to be in <a href="https://en.wikipedia.org/wiki/Inverness-shire" rel="noreferrer" target="_blank">Inverness-shire</a>.</p>
              <p className="sm-type-lead mb-2"> The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south road. At the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenelg village had a population of 208</p>
              <div className="mb-4 mt-4">
                <GatsbyImage image={data.image1.childImageSharp.gatsbyImageData} />
              </div>
              <p className="sm-type-lead mb-2">Glenclas is located on the coast about 6 miles from the main north-south road, which climbs steeply up to the summit of ‘the Bealach’ (pass), at a height of 321 metres, before running gently down Glen More (Gleann Mhòr, ‘big valley’) to Glenclas. On reaching the coast, the road turns both north and south.</p>
              <p className="sm-type-lead mb-2">To the north it terminates in just 3 Km at the small ferry terminal where a ferry operates between March and October to the large island across the Sound. The ferry is privately owned and operated, carries a maximum of 12 cars plus foot passengers and crosses the Sound 4 times a day.</p>
              <div className="mb-4 mt-4">
                <GatsbyImage image={data.image2.childImageSharp.gatsbyImageData} />
              </div>
              <p className="sm-type-lead mb-2">To the south, the road follows the coast line, passing through two small hamlets and past a number of isolated houses before terminating after about 15Km. Approximately 2 Km to the south of Glenclas village a road leads off to the east along Glen Beag (Gleann Beag, ‘small valley’), passing a few isolated houses, before ending after about 5 Km.</p>
              <h3 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Attractions</h3>
              <p className="sm-type-lead mb-2">The Glenclas Ferry is a tourist attraction in itself. Another attraction in recent years are a pair of resident sea eagles. During the summer, sightings are almost daily as they fish by the ferry crossing trying to feed their young. Glenelg attracts tourists to the remains of two of the best-preserved brochs on mainland Scotland, located in Glen Beag.</p>
              <div className="mb-4 mt-4">
                <GatsbyImage image={data.image3.childImageSharp.gatsbyImageData} />
              </div>
              <p className="sm-type-lead mb-2">The community's only pub is the Glenclas Inn. This stands on the site of the earlier Glenclas Hotel, a fine highland hotel with marble flooring which caught fire in 1946 and had to be demolished. Until recently there was a village shop and Post Office, but the owners retired and have incorporated the shop back into their house. In Glen Beag there is an organic market garden/croft. There is also a seasonal cafe in the Glenelg Village Hall in Kirkton and local businesses offering local services including bicycle hire and repair.</p>
              <p className="sm-type-lead mb-2">Glenclas Parish Church of Scotland has an 18th-century core and extensive repairs were carried out in 1821–30, with the interior remodelled in 1863 and again in 1929. The Church of Scotland have sold off a substantial number of churches throughout the country in recent years and there are fears that the same thing will happen here.</p>
              <h3 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">Other facilities</h3>
              <p className="sm-type-lead mb-2">Glenclas Primary School is a school with 1 teaching staff, 1 Nursery Staff and a Cluster Head. It is in a small rural location where a sizeable proportion of the families have lived in the area for more than one generation and therefore the school is seen as very much an essential part of the community. This fact is shown through the support given by the community to the many school activities. The school, in return, aims to match this by making every effort to welcome the community into school life in as many of its activities as possible. Glenclas Primary School provides its pupils with a stimulating learning environment which is supported by an ethos of encouraging achievement and celebrating success.</p>
              <div className="mb-4 mt-4">
                <GatsbyImage image={data.image4.childImageSharp.gatsbyImageData} />
              </div>
              <p className="sm-type-lead mb-2">However, the current school role is 7 and the number of pupils has steadily fallen over the past 20 or so years. It is feared that the unless there are more children in the community over the next few years, a tipping point will be reached and the final few pupils will be sent to the larger school over the Bealach. The Authority would then have no option but to ‘moth ball’ the school.</p>
              <p className="sm-type-lead mb-2">The 12 Secondary pupils travel 35 Km each day to the local High School.</p>
              <p className="sm-type-lead mb-2">Glenclas Lodge is an exclusive deer stalking and fishing hotel, which is owned by the local estate, but is not open to non-residents.</p>
              <p className="sm-type-amp"><Link to="/about-glenclas-people">Hear from the people of Glenclas</Link></p>
              <p className="sm-type-amp"><Link to="/potential-glenclas">Potential planning</Link></p>
            </div>
            <div className="col-lg-4">
              <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
              <div className="side-grey">
                <p className="sm-type-amp">Read all about Glenclas and find out what you need to move on to the next quest.</p>
                <p className="sm-type-amp">Make notes of the amenities and the opportunities.</p>
                <p className="sm-type-amp"><Link to="/about-glenclas-people">Hear from the people of Glenclas</Link></p>
                <p className="sm-type-amp"><Link to="/potential-glenclas">Potential planning</Link></p>


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
