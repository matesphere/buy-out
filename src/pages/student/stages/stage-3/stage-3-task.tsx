import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { gql } from '@apollo/client'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { UserStateContext } from '../../../../utils/user-state'
import { useCheckboxState } from '../../../../utils/input-utils'
import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'
import { CHOOSE_DEVELOPMENT_OPTIONS } from '../../../../gql/mutations'

import { Stage3TaskQuery } from '../../../../gql/types/Stage3TaskQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import { GatsbyImage } from 'gatsby-plugin-image'
import InfoPick from '../../../../assets/info-pick.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

const STAGE_3_TASK_QUERY = gql`
    query Stage3TaskQuery {
        development_option {
            id
            option
            display_name
        }
    }
`

const ChooseOptionsCheckboxes = ({
    devOptions,
    selectedOptions,
    toggleValue,
    teamChoiceName,
    setTeamChoiceName,
}) => (
    <>
        {devOptions.map(({ id, display_name }, i) =>
            id === 10 ? (
                <div key={i}>
                    <p className="sm-type-lead sm-type-lead--medium mt-4">
                        Or choose your own option - check the box and enter your
                        option name here!
                    </p>
                    <div className="multiple-choice">
                        <input
                            className="form-control"
                            id="10"
                            type="checkbox"
                            checked={selectedOptions.includes(10)}
                            onChange={() => toggleValue(10)}
                        />
                        <label className="form-label" htmlFor="housing">
                            Team choice
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-label sm-type-amp">
                            Development option name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={teamChoiceName}
                            onChange={({ target: { value } }) =>
                                setTeamChoiceName(value)
                            }
                        />
                    </div>
                </div>
            ) : (
                <div key={i} className="multiple-choice">
                    <input
                        className="form-control"
                        id={id}
                        type="checkbox"
                        checked={selectedOptions.includes(id)}
                        onChange={() => toggleValue(id)}
                    />
                    <label className="form-label" htmlFor={id}>
                        {display_name}
                    </label>
                </div>
            )
        )}
    </>
)

const Stage3TaskPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "map-zoom.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const {
        userInfo: { teamId },
    } = useContext(UserStateContext)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage3TaskQuery, null>(STAGE_3_TASK_QUERY, {}, 'userId')

    const [teamChoiceName, setTeamChoiceName] = useState('')
    const [selectedOptions, toggleValue, allowedNumberSelected] =
        useCheckboxState<number>([], 5)

    const [chooseDevOptions, chooseDevOptionsResponse] = useAuthMutation(
        CHOOSE_DEVELOPMENT_OPTIONS
    )

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay The Foundations</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 3" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Map of options in Glenclas
                            </h2>
                            <p className="sm-type-lead mb-3">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities, and consult with experts and
                                local residents to familiarise yourselves with
                                what each option entails. Think about how each
                                might benefit the community!
                            </p>
                            <div className="image-map mb-4 mt-4">
                                <div className="image-map-holder">
                                    <div>
                                        <GatsbyImage
                                            image={
                                                data.image5.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                    <div className="hover-pins">
                                        <p className="sm-type-amp">
                                            Hover over the pins to see more
                                            information
                                        </p>
                                    </div>
                                    <div className="outer-grid">
                                        <div className="outer-square">
                                            <div className="inner-grid inner-grid-1">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="reddot"></span>{' '}
                                                            Shop and Post Office
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-2">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="greydot"></span>{' '}
                                                            Affordable Housing
                                                            area
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-3">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-r">
                                                        <p className="sm-type-amp">
                                                            <span className="purpledot"></span>{' '}
                                                            Campsite / Cabins
                                                        </p>
                                                        <p className="sm-type-amp">
                                                            <span className="purpledot"></span>{' '}
                                                            Market gardening
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-4">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Play park / Skate
                                                            park
                                                        </p>
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Wind turbine
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-5">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Business hub
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-6">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-r">
                                                        <p className="sm-type-amp">
                                                            <span className="tealdot"></span>{' '}
                                                            Forest area
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-7"></div>
                                            <div className="inner-grid inner-grid-8">
                                                <span className="info-icon">
                                                    <InfoPick />
                                                    <div className="info-icon-show info-icon-show-c">
                                                        <p className="sm-type-amp">
                                                            <span className="yellowdot"></span>{' '}
                                                            Micro Hydro
                                                        </p>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="inner-grid inner-grid-9"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table table-proposal">
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
                                        <p>
                                            <span className="greydot"></span> 1.
                                            Affordable Housing Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Space for 3 pairs of semi-detached
                                            houses behind a row of existing
                                            houses. Affordable rent charged and
                                            low running costs.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/affordable-housing-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            2. Play Park and/or Skate Park
                                            Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be located behind the school
                                            and provide a facility for the
                                            primary school children as well as
                                            for older children.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/playpark-skatepark">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="reddot"></span> 3.
                                            Shop and PO
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Could be situated just of the ‘High
                                            Street’ a purpose-built mini
                                            supermarket and shop, to service the
                                            local community and visitors.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/shop-and-post-office">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            4. Micro-hydro Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Making use of the stream coming off
                                            the hill behind the village.
                                            Providing both power for the
                                            community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/micro-hydro">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            5. Wind turbine Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated on the hill behind the
                                            village. Providing both power for
                                            the community and an income from
                                            electricity sold onto the grid.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/wind-turbine">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="yellowdot"></span>{' '}
                                            6. Business hub Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Situated off the main thoroughfare,
                                            a new build that could be divided
                                            into units for offices and/or
                                            workshops.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/business-hub">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="tealdot"></span> 7.
                                            Forestry Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            On the extensive hill behind the
                                            village, an area of some 15 acres to
                                            be planted as mixed woodland.
                                            Potential for income from the
                                            softwood, amenity value (woodland
                                            walks) and habitat creation as well
                                            as climate mitigation
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/forestry-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="purpledot"></span>{' '}
                                            8. Campsite and Cabins Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Potential for a community owned
                                            campsite and areas for caravans,
                                            campervans and Cabins. The shower
                                            toilet block could be made available
                                            to public use (for a fee) to allow
                                            campervan and other tourists to use
                                            the facilities.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/campsite-cabin">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>
                                            <span className="purpledot"></span>{' '}
                                            9. Market Garden Scheme
                                        </p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            A commercial operation to grow
                                            year-round fruit and vegetables for
                                            the local community and for local
                                            businesses such as the Glenclas
                                            Hotel and Lodge.
                                        </p>
                                        <p>
                                            <Link to="/student/stage-3/market-scheme">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="roww">
                                    <div className="cell">
                                        <p>10. Team Choice</p>
                                    </div>
                                    <div className="cell">
                                        <p>
                                            Your Team can develop your own idea.
                                            You will need to carry out a SWOT
                                            analysis, determine your Capital
                                            Costs and Running Costs and also
                                            find out where the funding to both
                                            start and keep your scheme running
                                            would come from.
                                        </p>
                                    </div>
                                </div>
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

                                <p className="sm-type-lead mb-2">
                                    Choose your 5 options to take forward to the
                                    next stage.
                                </p>

                                <div className="form-holder-border">
                                    <ChooseOptionsCheckboxes
                                        devOptions={pageData.development_option}
                                        selectedOptions={selectedOptions}
                                        toggleValue={toggleValue}
                                        teamChoiceName={teamChoiceName}
                                        setTeamChoiceName={setTeamChoiceName}
                                    />

                                    <button
                                        className="btn-solid-lg mt-4"
                                        disabled={
                                            !allowedNumberSelected ||
                                            (selectedOptions.includes(10) &&
                                                !teamChoiceName)
                                        }
                                        onClick={() => {
                                            const objects = selectedOptions.map(
                                                (id) => {
                                                    if (id === 10) {
                                                        return {
                                                            team_id: teamId,
                                                            development_option_id:
                                                                id,
                                                            team_choice_name:
                                                                teamChoiceName,
                                                        }
                                                    }

                                                    return {
                                                        team_id: teamId,
                                                        development_option_id:
                                                            id,
                                                    }
                                                }
                                            )

                                            chooseDevOptions({
                                                variables: {
                                                    objects,
                                                },
                                            })
                                        }}
                                    >
                                        Submit options
                                    </button>

                                    {chooseDevOptionsResponse.data && (
                                        <p className="sm-type-amp">
                                            Submitted!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp">
                                    Read all about Glenclas and find out what
                                    you need to move on to the next quest.
                                </p>
                                <p className="sm-type-amp">
                                    Make notes of the amenities and the
                                    opportunities.
                                </p>
                                <p className="sm-type-amp">
                                    Look at Funding Options on each Option.
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
                                    <p className="sm-type-lead">
                                        Check the map and read through the
                                        detailed information on each option.
                                    </p>
                                </div>
                            </div>
                            <div className="side-grey">
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Based on what you've read, choose 5 of
                                        the options to investigate further.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage3TaskPage
