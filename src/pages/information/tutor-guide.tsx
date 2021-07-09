import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../tutor/_header'
import Footer from '../tutor/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
// import { gql } from '@apollo/client'
// import { ApolloError } from '@apollo/client'

// import { Loading } from '../../components/common/Loading'
// import { Error } from '../../components/common/Error'

// import { useAuthQuery } from '../../utils/auth-utils'

// import {
//     TeamAssessmentQuery,
//     TeamAssessmentQueryVariables,
// } from '../../gql/types/TeamAssessmentQuery'

// import '../../scss/index.scss'
// import { Breadcrumbs } from '../../components/common/Breadcrumbs'

// const TEAM_ASSESSMENT_QUERY = gql`
//     query TeamAssessmentQuery($user_id: uuid!) {
//         user_by_pk(id: $user_id) {
//             id
//             full_name
//             tutor {
//                 school {
//                     name
//                 }
//             }
//         }
//     }
// `

const TutorGuide = () => {
    // const { loading, error, data } = useAuthQuery<
    //     TeamAssessmentQuery,
    //     TeamAssessmentQueryVariables
    // >(TEAM_ASSESSMENT_QUERY, {}, 'userId')

    // if (loading) return <Loading />
    // if (error || !data)
    //     return (
    //         <Error
    //             error={
    //                 error ||
    //                 new ApolloError({ errorMessage: 'No data returned!' })
    //             }
    //         />
    //     )

    // const {
    //     user_by_pk: {
    //         full_name: fullName,
    //         tutor: {
    //             school: { name: schoolName },
    //         },
    //     },
    // } = data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Guide</title>
                <meta name="description" content="Tutor's guide" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Tutor Hub',
                                url: '/tutor/hub',
                            },
                        ]}
                        currentDisplayName="Tutor guide"
                    />
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                                COMMUNITY LAND SCOTLAND - EDUCATION PROJECT
                            </h2>

                            <p className="sm-type-lead mb-4">
                                The Quest is a scenario-based simulation of a
                                Community Land Buyout. It is broadly based on
                                Community Land Scotland’s ‘8-Step Guide to a
                                Community Land Buyout’ (
                                <a
                                    href="https://www.communitylandscotland.org.uk/wp-content/uploads/2016/09/CLS_8StepProcess.pdf"
                                    target="_blank"
                                    rel="external"
                                >
                                    8 Step Process
                                </a>
                                ).
                            </p>
                            <p className="sm-type-lead mb-4">
                                The aim of The Quest is to allow the pupils to
                                research about some of the background of land
                                ownership in Scotland, to consider the role of
                                communities in land ownership and to experience
                                many of the issues faced by community groups who
                                take the plunge to purchase land on behalf of
                                their residents.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The Quest is an Interdisciplinary Learning
                                Project that covers Experiences and Outcomes in
                                Literacy, Numeracy and mathematics, Social
                                Studies and Digital Literacy within
                                Technologies. The E’s and O’s that can be
                                covered are given at the end of this guide.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The Quest takes the pupils through the process
                                of choosing Development Options for how the land
                                that is being offered for sale could be used.
                                They complete both a Feasibility Study and
                                Business Plan for each of their preferred
                                Options and then present their case in a formal
                                finale, in which they seek the approval of their
                                community to move ahead with the buyout.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The simulation is based around a fictitious
                                community called Glenclas, which is situated on
                                the west coast of Scotland. It is designed for
                                S1 or S2 pupils who are formed into teams with
                                an ideal number of 4 and a maximum number of 6
                                members. The pupils adopt the roles of Office
                                Bearers of the local community group and act as
                                the Steering Group for the process. Each person
                                has a specific role and responsibilities, but it
                                is essentially a group exercise with all
                                decisions being made by the group as a whole,
                                albeit with the Chair having the casting vote.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The formation of the groups is really important
                                as each one needs to contain pupils with a
                                variety of skills and so it would be worth
                                thinking quite carefully about the composition
                                of each of the groups. There are 4 positions to
                                be filled in each team, although those of
                                Secretary and Treasurer could be doubled up. The
                                specific roles and responsibilities are defined
                                in Stage 2.
                            </p>
                            <p className="sm-type-lead mb-4">
                                Upon completion of each stage there is the
                                opportunity for the teacher to provide feedback
                                to each group. It is suggested that any
                                individual feedback should be done using the
                                normal channels of communication.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The Quest is an online resource and so it can be
                                worked on within a classroom setting, using a
                                variety of digital media, or it is possible for
                                pupils to log on and work on it remotely,
                                bearing in mind that the Secretary of each group
                                is responsible for entering all the text and
                                data into the Quest forms. In a remote working
                                scenario, the pupils would need to communicate
                                with each other via another medium in order to
                                make the group decisions that are an essential
                                part of the process. Remote working also makes
                                it suitable for continuing work on the Quest for
                                homework.
                            </p>
                            <p className="sm-type-lead mb-4">
                                The amount of time that is required to complete
                                the Quest depends on the depth to which the
                                teacher wishes to take the topic of Community
                                Land Ownership. However, the minimum time
                                allocation would be 9 sessions of about 1 hour
                                is required to complete all the tasks.
                            </p>

                            <div className="table table-guide">
                                <div className="roww">
                                    <div className="cell">1</div>
                                    <div className="cell">
                                        <b>Research</b>
                                        <br />
                                        Task: To complete 12 background
                                        questions about land ownership and the
                                        concept of Community.{' '}
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">2</div>
                                    <div className="cell">
                                        <b>Consult</b>
                                        <br />
                                        Written opinions are provided by members
                                        of the community and experts about 9
                                        Development Options for how the land
                                        could be used and an introduction to the
                                        community of Glenclas. Task: To decide
                                        on roles within the Steering Group, come
                                        up with a name and design a logo.
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">3</div>
                                    <div className="cell">
                                        <b>Lay the foundations</b>
                                        <br />
                                        Task 1: To consider the 9 Development
                                        Options and long-list them to 5
                                        preferred choices.
                                        <br />
                                        Task 2: To carry out SWOT Analysis on
                                        each of the 5 long-listed options.{' '}
                                    </div>
                                    <div className="cell">2 sessions</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">4</div>
                                    <div className="cell">
                                        <b>Progress Your Plans 1</b>
                                        <br />
                                        Task: To use the SWOT Analysis to
                                        short-list 3 Options and complete a
                                        Feasibility Study on each of these
                                        Options.
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">5</div>
                                    <div className="cell">
                                        <b>Progress Your Plans 2</b>
                                        <br />
                                        Task: To produce a Business Plan for
                                        each short-listed Option, using the
                                        information provided in stage 3.
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">6</div>
                                    <div className="cell">
                                        <b>Prepare findings</b>
                                        <br />
                                        Task: To prepare a presentation for the
                                        community.{' '}
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">7</div>
                                    <div className="cell">
                                        <b>Present finding</b>
                                        <br />
                                        Task: To present to the community in
                                        order to obtain backing to go ahead with
                                        the land buy-out.
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>

                                <div className="roww">
                                    <div className="cell">8</div>
                                    <div className="cell">
                                        <b>Celebrate and Reflect</b>
                                        <br />
                                        Receive certificates.
                                        <br />
                                        Task: To complete a feedback and
                                        reflection form.
                                    </div>
                                    <div className="cell">1 session</div>
                                </div>
                            </div>

                            <h3>The 8 Stages</h3>

                            <ol>
                                <li className="mb-4">
                                    <b>Research</b>
                                    <br />
                                    The purpose of asking the pupils to answer a
                                    series of questions is to challenge their
                                    understanding of ‘Community’, to get them to
                                    do a little research into land ownership in
                                    Scotland and to encourage them to find out
                                    about any community landowners in their
                                    area.
                                    <br />
                                    <br />
                                    The pupils should work in their groups right
                                    from the outset and this is their first
                                    opportunity to work cooperatively, as the
                                    answers they give must be agreed upon by all
                                    the members of the group.
                                </li>
                                <li className="mb-4">
                                    <b>Consult</b>
                                    <br />
                                    The pupils start to get a feel for the
                                    community of Glenclas, by reading a guide to
                                    the village and its surrounding area. The
                                    community have come up with 9 Development
                                    Options for how the land that is up for sale
                                    might be used. Some members of the community
                                    and a few ‘experts’ have answered some
                                    questions about these options. These
                                    submissions will give the pupils a first
                                    impression of the proposed Development
                                    Options and they should be encouraged to
                                    start forming their opinions about which
                                    might be the most likely to succeed and
                                    which will be of greatest benefit to the
                                    Community.
                                    <br />
                                    <br />
                                    The pupils have to decide who is going to
                                    take on which roles within the Community
                                    Group that has been formed to manage the
                                    community buy-out and they will act as the
                                    Steering Group. They will need to come up
                                    with a name for their group and also design
                                    their own logo.
                                </li>
                                <li className="mb-4">
                                    <b>Lay the Foundations</b>
                                    <br />
                                    In Part 1, the Teams must consider all the
                                    Development Options and then choose a
                                    long-list of 5 Options which they will
                                    consider in more detail.
                                    <br />
                                    <br />
                                    They may wish to make one of their Options
                                    an idea that they have which doesn’t appear
                                    on the list – the ‘Team Choice’. There may
                                    be an activity, a characteristic, an
                                    opportunity that is unique to their
                                    community, or a particular strength of their
                                    community that they would like to see
                                    reflected here. So they can, in effect build
                                    this into the Glenclas Community and
                                    therefore follow their own interest. An
                                    example might be a community that is
                                    particularly strong in Traditional Music and
                                    an idea might be to build a recording studio
                                    to provide local people with the opportunity
                                    to become part of the flourishing
                                    Traditional Music scene.
                                    <br />
                                    <br />
                                    In Part 2, the Teams complete a SWOT
                                    analysis on the 5 choices that they have
                                    made. SWOT analysis is a strategic planning
                                    technique that is often used to identify
                                    strengths, weaknesses, opportunities and
                                    threats involved in a project or
                                    organisation. In our case, it will help the
                                    pupils look at each of their options in
                                    considerable detail, considering both their
                                    positive and negative aspects and facilitate
                                    their decision making about whether to take
                                    a particular Option forward, or not.
                                    <br />
                                    <br />
                                    There is an explanation provided for how to
                                    carry out a SWOT analysis and the pupils
                                    will need some help and guidance to complete
                                    this task. To this end, the facility to
                                    reveal ‘model’ answers for each Option is
                                    provided for the Teacher. It will also be
                                    possible for the Teacher to reveal a
                                    completed analysis for one of the options
                                    that each group has not chosen, in order to
                                    give them an example of what is required. It
                                    would then be worth going through this with
                                    them.
                                </li>
                                <li className="mb-4">
                                    <b>
                                        Progress Your Plans 1 – Feasibility
                                        Study
                                    </b>
                                    <br />
                                    The SWOT analysis from the previous stage
                                    should now allow the pupils to do the final
                                    cut and decide on a short-list of 3
                                    Development Options. These will be the ones
                                    that they will take to the Community when
                                    they seek approval to go ahead with the land
                                    buy-out.
                                    <br />
                                    <br />
                                    When they go to the Community they will be
                                    making a formal presentation, when they will
                                    justifying their choice of Options in terms
                                    of their benefit to the Community and
                                    likelihood to succeed. In order to focus
                                    their thinking, they are required to
                                    complete a Feasibility Study at this stage.
                                    This is done using a form, which first asks
                                    them to consider, without reference to the
                                    specific Options, what it would mean for the
                                    Community to own the land. The kind of
                                    things that they need to think about are:
                                    empowerment, giving people the opportunity
                                    to direct their own destiny, creating job
                                    opportunities for local people, making it a
                                    more attractive place for young people of
                                    the Community to remain and for new people
                                    to set up homes, encourage more visitors and
                                    therefore more income for the Community,
                                    allow the Community to take control of its
                                    energy use and contribute to reduction in
                                    carbon emissions.
                                    <br />
                                    <br />
                                    The pupils will then use their SWOT analyses
                                    and the information on their chosen options
                                    (or information that they will have worked
                                    on for the Team Choice, if they have gone
                                    down that route) to complete 3 sections for
                                    each Development Option/Scheme. They will
                                    need to think about how each Scheme benefits
                                    the Community, the reasons why they consider
                                    that the Scheme is likely to succeed and
                                    what the risk are that might cause the
                                    Scheme to fail.
                                </li>
                                <li className="mb-4">
                                    <b>Progress Your Plans 2 – Business Plan</b>
                                    <br />
                                    It is not within the scope of this project
                                    to ask pupils to come up with a full-blown
                                    Business Plan, however it is important for
                                    them to understand that there are very
                                    important financial considerations to be
                                    satisfied in order to take something like
                                    this forward. The function of the Business
                                    Plan here is to act as something of a
                                    reality check to make the pupils realise
                                    that each of their Schemes could only work
                                    if they make financial sense.
                                    <br />
                                    <br />
                                    In reality, the funding issue is a massive
                                    part of what a Community Group would have to
                                    come to terms with to make a community
                                    buyout a reality. A great deal depends on
                                    the success, or otherwise, of funding
                                    applications and it would be worth the
                                    Teacher explaining this to the pupils at
                                    this point. Here, we have identified
                                    potential funders in the early stages of the
                                    Quest and the pupils are simply required to
                                    list those funders within the Business plan.
                                    <br />
                                    <br />
                                    The first task involves a basic numeracy
                                    task to calculate the asking price for the
                                    land, based on a stated price per hectare.
                                    The pupils have to work out the area of land
                                    for sale by referring to the map and using
                                    the scale provided and then calculating the
                                    asking price.
                                    <br />
                                    <br />
                                    The second task involves completing a form
                                    for each Option, detailing Capital and
                                    Running Costs, as well as Funders. Most of
                                    the figures required are to be found in the
                                    information provided about each of the
                                    Development Options and it is just a matter
                                    of transferring those figures. The final
                                    section of the form is an Annual Cash Flow
                                    over the first 4 years of each Scheme.
                                    Again, most of the figures are provided
                                    within the Option information, but the
                                    pupils may have to ‘create’ some of the
                                    figures themselves. There is no ‘right’
                                    answer and the pupils should aim to show a
                                    ‘Project Balance’, along the bottom line,
                                    which is either becoming less negative or
                                    more positive in each successive year.
                                    <br />
                                    <br />
                                    Please note that in sections 2 and 3 not all
                                    the rows need to be filled, however the
                                    ‘Total’ boxes at the bottom of each section
                                    do need to be completed.
                                </li>
                                <li className="mb-4">
                                    <b>Prepare Findings</b>
                                    <br />
                                    The Steering Groups now have to prepare
                                    their presentations to their Community which
                                    is when they will seek approval to go ahead
                                    with the buy-out of the land and the
                                    implementation of the 3 Schemes.
                                    ‘Presentation Hints’ are provided to help
                                    the pupils prepare their presentations and
                                    it is suggested that they use PowerPoint as
                                    they probably have experience with this
                                    program.
                                    <br />
                                    <br />
                                    The management of this ‘event’ will be down
                                    to the circumstances of individual schools.
                                    It would be possible to use an ordinary
                                    lesson and have each group present to the
                                    rest of the class, however, the disadvantage
                                    of this is that different groups will have
                                    options in common and so there will be some
                                    repetition. This may not matter, as long as
                                    groups stick to the content of their
                                    presentation no matter what other groups
                                    say. Another possibility would be to have an
                                    invited audience, which could be staff from
                                    within the school, or possibly members of a
                                    local community group who have experience of
                                    this issue or maybe are aspiring to follow
                                    this route. In this case, perhaps the class
                                    could be supervised and the groups could be
                                    called in to present in turn.
                                    <br />
                                    <br />
                                    The length of time that the groups are given
                                    to present will depend on how much time can
                                    be given to the whole event, but it would
                                    seem sensible to give each group at least 10
                                    minutes.
                                </li>
                                <li className="mb-4">
                                    <b>Present Findings</b>
                                    <br />
                                    The ‘Presentation Hints’ also cover
                                    suggestions to help the pupils with the
                                    actual presentation.
                                    <br />
                                    <br />
                                    One of the roles of the Chair of the group
                                    is to lead the presentation. It is
                                    recommended that the Chair and at least one
                                    other pupil is involved in actually
                                    presenting, but all members of the groups
                                    must be involved in the presentation in some
                                    way. Once again, it is a matter of the group
                                    making the best use of the skills that they
                                    have available to them.
                                </li>
                                <li className="mb-4">
                                    <b>Celebrate and Reflect</b>
                                    <br />
                                    This process has not been a competition and
                                    there is therefore not a winner to be
                                    announced. On the contrary, we all hope that
                                    everyone is a winner!
                                    <br />
                                    <br />
                                    The Quest will probably be quite different
                                    to anything the pupils have done before and
                                    therefore it will be a significant
                                    achievement for them to have reached the end
                                    successfully. All the pupils will therefore
                                    be able to celebrate with their team mates
                                    and receive their certificates.
                                    <br />
                                    <br />
                                    We would ask that some time is given to
                                    allow the pupils to reflect on the
                                    experience. This will allow for
                                    consolidation of their learning experiences
                                    both of community land buy-outs and also of
                                    working throughout as part of a group. While
                                    the questions provided will help in that
                                    consolidation, the teacher will have an
                                    important part to play in getting the pupils
                                    to talk about their experience eliciting
                                    their responses.
                                    <br />
                                    <br />
                                    It is also important that we can listen to
                                    what the pupils have to say so that we can
                                    build on their experience.
                                </li>
                            </ol>

                            <h3>The Role of the Teacher</h3>
                            <p>
                                There will be few teachers who have direct
                                experience of a community land buy-out and there
                                is no expectation that the teachers who oversee
                                the Quest will even have any knowledge about
                                community land ownership. The role of the
                                teacher, therefore, is to generate enthusiasm,
                                work on the group dynamics, provide feedback on
                                how they are getting on and to ‘keep the ball
                                rolling’.
                                <br />
                                <br />
                                We hope that the pupils will be able to navigate
                                their way through the Quest themselves (please
                                refer to the ‘Technical Guide’ for additional
                                assistance) but they will need prompting on
                                occasion and inevitably brought back on task
                                from time to time. There are also plenty of
                                opportunities for homework tasks to enhance and
                                consolidate the work, remembering that they can
                                log on to the Quest remotely.
                                <br />
                                <br />
                                We would also value feedback on the Quest and
                                the process from the Teachers who have taken the
                                pupils through the project.
                            </p>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="side-grey">
                                <p className="sm-type-guitar mb-2 mt-2">
                                    {fullName}'s Hub
                                </p>
                                <p className="sm-type-amp">{schoolName}</p>
                            </div>
                        </div> */}
                    </div>
                </section>
            </main>
        </>
    )
}

export default TutorGuide
