import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, useQuery } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'
import DogVideo from '../../../../assets/the-quest.mp4'

// TODO this will also probably use user ID (or team ID actually)
const STAGE_1_QUERY = gql`
    query StageQuery($name: String, $stageId: Int) {
        user(where: { first_name: { _eq: $name } }) {
            student {
                team {
                    stage_progresses(where: { stage_id: { _eq: $stageId } }) {
                        id
                        stage_id
                        status
                    }
                }
            }
        }
    }
`


const QuestPage = () => {

    const { loading, error, data: pageData } = useQuery(STAGE_1_QUERY, {
        variables: { name: 'Steve', stageId: 1 },
    })


    if (loading) return (<section className="container" id="main"><div className="row"><div className="col-lg-12 text-align-center"><div className="loader"></div><p className="sm-type-drum sm-type-drum--medium">Loading...</p></div></div></section>)
    if (error) return `Error! ${error.message}`

    const user = pageData.user[0]

    const {
        student: {
            team: { stage_progresses: stageProgresses },
        },
    } = user

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - Research</title>
                <meta name="description" content="The description" />
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 1" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Research
                            </h2>
                            <p className="sm-type-guitar mb-4">
                                As the first stage of your Quest, it is
                                important to gain some background knowledge
                                about community land ownership in Scotland and
                                also to think about some of the important
                                concepts and issues.
                            </p>
                            <div className="homepage-image mb-4">
                                <video controls>
                                    <source src={DogVideo} type="video/mp4" />
                                </video>
                            </div>
                            <div className="side-grey">
                                <h4 className="task ticker mb-2">
                                  <span className="ticker-sheet">
                                      <TickSheet/>
                                  </span>
                                                    <span className="sm-type-drum">
                                      Task to complete:
                                  </span>
                                </h4>

                                <p className="sm-type-lead">To obtain the key that opens the Quest, you must provide answers to the following questions.</p>
                                <p className="sm-type-lead">Answers should either be from the whole group as a result of discussion (Gp), or they should be given as different answers from each member of the group (Ind). Some answers, will need you to do some research, probably using the Internet (research)</p>
                                <ol>
                                    <li className="mb-2">What do you think that ‘Community’ means, for example, is it just a physical space? (Gp)</li>
                                    <li className="mb-2">What is your own community? (Ind)</li>
                                    <li className="mb-2">Why are communities important to us? (Gp)</li>
                                    <li className="mb-2">What do you think it means to own land or buildings, for example does it give you certain rights? (Gp)</li>
                                    <li className="mb-2">Does owning property (land, buildings, a shop, a pub) give the owner power? (Gp)</li>
                                    <li className="mb-2">What do you think is meant by ‘power’ in this context? (Gp)</li>
                                    <li className="mb-2">Who owns most land in Scotland? (Gp research)</li>
                                    <li className="mb-2">What does this tell us about Scottish History? (Gp)</li>
                                    <li className="mb-2">Find out if there are any community landowners in your area and then list their name(s) and what they own.</li>
                                    <li className="mb-2">Describe the characteristics of your local community landowner(s). (Gp research)</li>
                                    <li className="mb-2">Why did they decide to buy the property? (Gp research)</li>
                                    <li className="mb-2">What are they doing, or going to do, with it? (Gp research)</li>
                                    <li className="mb-2">How do they make their decisions? (Gp research)</li>
                                </ol>
                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">Answer your  <Link to="/student/stage-1/research-page">Research question here</Link>.</li>
                                    </ul>
                                </div>
                            </div>



                        </div>

                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">Useful links</p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Civil_parishes_in_Scotland"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Civil parish
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Loch_Alsh"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Lochalsh
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Highland_council_area"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Highland
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Inverness-shire"
                                            target="_blank"
                                            rel="external"
                                        >
                                            Inverness-shire
                                        </a>
                                    </li>
                                </ul>
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
