import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'


const Stage2Page = () => {

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
            <main className="the-quest">
                <Header headerText="Stage 2 - Consult" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Introduction
                            </h2>

                            <p className="sm-type-lead mb-3">You are about to embark on the Community Buyout Quest. You are going to work as the Board of a community group who will lead the purchase of some land that has come up for sale.</p>
                            <p className="sm-type-lead mb-3">You will each adopt a specific role within the Board, but throughout, you will need to work as a team. Each decision that you make must take into account the views of everyone in the team. That does not mean that you will agree on everything, in fact it is inevitable that you will disagree at times. However, you must work out how you will reach decisions when there is disagreement amongst the team.</p>
                            <p className="sm-type-lead mb-3">You must now choose a Group name and also design a logo that will appear on any documentation that you produce.</p>
                            <p className="sm-type-lead mb-3">The land that has come up for sale is next to the (fictional) village of GLENCLAS. Below is a (fictional) description of Glenclas: the village and the community.</p>

                            <div className="side-grey">
                                <h3 className="sm-type-lead sm-type-lead--medium">Glenclas, Highland</h3>
                                <p className="sm-type-bigamp mb-3"><b>Glenclas</b> (Gleann Clas, ‘valley of the class’) is a scattered community area and <a href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland" target="_blank">civil parish</a> in the <a href="https://en.wikipedia.org/wiki/Loch_Alsh" target="_blank">Lochalsh</a> area of <a href="https://en.wikipedia.org/wiki/Highland_council_area" target="_blank">Highland</a> in western Scotland. Despite the local government reorganisation the area is considered by many still to be in <a href="https://en.wikipedia.org/wiki/Inverness-shire" target="_blank">Inverness-shire.</a></p>
                                <p className="sm-type-bigamp mb-3">The main village, also known as Glenclas Village, occupies an attractive situation opposite a neighbouring island, at the head of Glen More. There is a smaller hamlet less than a mile to the south, on the edge of Glenclas Bay and at the head of Glen Beag. There are several other clusters of houses scattered throughout Glenclas including further up Glen Beag and Glen More, on the road leading to the main north-south route.  In the 2001 census the whole Glenclas community had a population of 985 and in 2011, Highland Council estimated that the community of Glenclas village had a population of 208.</p>
                                <p className="sm-type-bigamp mb-3">All of the housing stock in the area is privately owned, with a significant number of houses being either second homes, with their owners living and working elsewhere, or rental properties hired to tourists as holiday cottages. This situation, as in many parts of the Highlands and Islands, has caused inflation of house prices, making it difficult for local young people to get onto the ‘housing ladder’ or to be able to afford to rent a house.</p>
                            </div>

                            <div className="side-grey">
                                <h3 className="sm-type-lead sm-type-lead--medium">Geography</h3>
                                <p className="sm-type-bigamp mb-3">Glenclas is located on the coast about 6 miles from the main north-south route, which climbs steeply up to the summit of ‘the Bealach’ (pass), at a height of 321 metres, before running gently down Glen More (Gleann Mhòr, ‘big valley’) to Glenclas. On reaching the coast, the road turns both north and south.</p>
                                <p className="sm-type-bigamp mb-3">To the north it terminates in just 3 Km at the small ferry terminal where a ferry operates between March and October to the large island across the Sound, a 20 minute crossing. The ferry is privately owned and operated, carries a maximum of 10 cars plus foot passengers and crosses the Sound once an hour between 10am and 6pm.</p>
                                <p className="sm-type-bigamp mb-3">To the south, the road follows the coast line, passing through two small hamlets and past a number of isolated houses before terminating after about 15Km. Approximately 2 Km to the south of Glenclas village a road leads off to the east along Glen Beag (Gleann Beag, ‘small valley’), passing a few isolated houses, before ending after about 5 Km.</p>
                            </div>

                            <div className="side-grey">
                                <h3 className="sm-type-lead sm-type-lead--medium">Attractions</h3>
                                <p className="sm-type-bigamp mb-3"><b>The Glenclas Ferry</b> is a tourist attraction in itself and through the summer season it ensures a regular flow of tourists through the area. Another attraction in recent years are a pair of resident <b>sea eagles</b>. During the summer, sightings are almost daily as they fish by the ferry crossing, catching food for their young.</p>

                                <p className="sm-type-bigamp mb-3">Glenelg attracts tourists to the remains of two of the best-preserved brochs on mainland Scotland, located in Glen Beag.</p>

                                <p className="sm-type-bigamp mb-3">The community's only pub is the Glenclas Inn. This stands on the site of the earlier Glenclas Hotel, a fine highland hotel with marble flooring which caught fire in 1946 and had to be demolished.</p>
                                <p className="sm-type-bigamp mb-3">Glenclas Lodge is an exclusive deer stalking and fishing hotel, owned by the local estate, but not open to non-residents.</p>
                                <p className="sm-type-bigamp mb-3">There is a Village Shop and Post Office, but the current shop keepers, who lease the house from the local Estate and Landowner, want to retire. To date, there has been no-one coming forward to take over the lease. The landowner is therefore prepared to include the house with the sale of the land or to lease the building as a residential property, in which case the village would lose its shop and Post Office.</p>
                                <p className="sm-type-bigamp mb-3">There is a seasonal cafe in the Glenelg Village Hall.</p>
                                <p className="sm-type-bigamp mb-3">Glenclas Parish Church of Scotland has an 18th-century core and extensive repairs were carried out in 1821–30, with the interior remodelled in 1863 and again in 1929. The Church of Scotland have sold off a substantial number of churches throughout the country in recent years and there are fears that the same thing will happen here.</p>
                            </div>

                            <div className="side-grey">
                                <h3 className="sm-type-lead sm-type-lead--medium">Other facilities</h3>


                                <p className="sm-type-bigamp mb-3">Glenclas Primary School is a school with 1 teaching staff, 1 Nursery Staff and a Cluster Head. It is in a small rural location where a sizeable proportion of the families have lived in the area for more than one generation and therefore the school is seen as very much an essential part of the community. This fact is shown through the support given by the community to the many school activities. The school, in return, aims to match this by making every effort to welcome the community into school life in as many of its activities as possible. Glenclas Primary School provides its pupils with a stimulating learning environment which is supported by an ethos of encouraging achievement and celebrating success.</p>

                                <p className="sm-type-bigamp mb-3">However, the current school role is 7 and the number of pupils has steadily fallen over the past 20, or so, years. It is feared that the unless there are more children in the community over the next few years, a tipping point will be reached and parents will decide to take the last few pupils out of the school and send them to the larger school over the Bealach. The Authority would then have no option but to ‘moth ball’ the school, meaning that the community would effectively lose its school, which would make the community less attractive for incoming families.</p>
                                <p className="sm-type-bigamp mb-3">The 19 Secondary pupils travel 26 miles each day, by bus, to the nearest High School.</p>
                            </div>


                            <div className="side-grey">

                                <h3 className="sm-type-lead sm-type-lead--medium">The Quest</h3>

                                <p className="sm-type-bigamp mb-3">The local Estate Landowner has put up the piece of land for sale and the Community has come together and decided that this is too good an opportunity to miss. At a Community meeting in the Village Hall, it was decided that a Community Group should be formally constituted and a Board of Directors appointed to take the project through. The community also carried out a ‘brain-storming’ exercise and came up with 9 possible uses (Development Options) for the land. (One of these is the purchase of the shop and Post Office in the village before it becomes leased as a residential property).</p>
                                <p className="sm-type-bigamp mb-3">Your Team is the Board of Directors and your task is to follow the 8-Stage process laid out by Community Land Scotland (<a href="http://www.communitylandscotland.org.uk/" rel="external" tregt="_blank">www.communitylandscotland.org.uk</a>). You will carry out SWOT Analysis on each of the Options which will help you to narrow down the Development Options to the 3 which your team consider to be best use for the land. You will conduct a Feasibility Study to clarify the benefits to the Community, to highlight the reasons for likely success and to identify risks that could cause the Development Schemes to fail. You will then produce a Business plan, which will summarize the Capital and Running Costs, show where the funding will be found and act as a balance sheet to display the financial situation over the first 4 years of the venture.</p>
                                <p className="sm-type-bigamp mb-3">During this process you must work together to agree which 3 projects would provide the greatest benefit to your community and you will have the opportunity to present your ideas to your Community (the rest of your class).</p>

                            </div>
                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h3>
                                <p className="sm-type-bigamp mb-3">It is now time to allocate the members of your team to the roles within the Board. Each role will have specific tasks to perform, but every decision that you make must be taken by the complete Board of Directors. If your team has more than 4 members then you can double up on the Secretary and/or Treasurer roles.</p>
                                <p className="sm-type-bigamp mb-3">Find more <a href="/student/stage-2/the-roles">information about the roles and choose your Board here</a>.</p>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2"><span className="side-icon side-icon-orange"><HelpIcon /></span>Helpful information</p>
                            <div className="side-grey">
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li><a href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland" target="_blank" rel="external">Civil parish</a></li>
                                    <li><a href="https://en.wikipedia.org/wiki/Loch_Alsh" target="_blank" rel="external">Lochalsh</a></li>
                                    <li><a href="https://en.wikipedia.org/wiki/Highland_council_area" target="_blank" rel="external">Highland</a></li>
                                    <li><a href="https://en.wikipedia.org/wiki/Inverness-shire" target="_blank" rel="external">Inverness-shire</a></li>
                                </ul>

                                <p className="sm-type-amp">Read all about Glenclas and find out what you need to move on to the next quest.</p>
                                <p className="sm-type-amp">Make notes of the amenities and the opportunities.</p>
                                <p className="sm-type-amp">Find more <a href="/student/stage-2/the-roles">information about the roles and choose your Board here</a>.</p>

                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage2Page
