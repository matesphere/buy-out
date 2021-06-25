import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
// import scrollTo from 'gatsby-plugin-smoothscroll'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import MapOptions from '../../../../pages/information/_map'

import { stage3SwotReducer, WorkState, Action } from './stage-3-swot'
import { useWorkState } from '../../../../utils/input-utils'

import { DocumentCompleteQuery_team_by_pk_team_development_options } from '../../../../gql/types/DocumentCompleteQuery'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

interface SwotLinksType {
    devOptions: Array<DocumentCompleteQuery_team_by_pk_team_development_options>
    completedSwots?: Array<string>
}

export const SwotLinks = ({
    devOptions,
    completedSwots = [],
}: SwotLinksType) => (
    <ol>
        {devOptions.map(
            (
                {
                    id,
                    team_choice_name,
                    development_option: { display_name, option },
                },
                i
            ) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link to={`/student/stage-3/swot?num=${i}&id=${id}`}>
                        {team_choice_name || display_name}
                    </Link>
                    {completedSwots.includes(option) && (
                        <span className="ml-2 side-icon">
                            <Tick />
                        </span>
                    )}
                </li>
            )
        )}
    </ol>
)

const ExampleSwotLinks = ({ exampleSwots }) => (
    <>
        <p className="sm-type-lead mb-2">
            <span className="side-icon side-icon-orange shake">
                <HelpIcon />
            </span>
            {`Your teacher has provided the following example${
                exampleSwots.length > 1 ? 's' : ''
            } to help:`}
        </p>
        <ul>
            {exampleSwots.map((swotOption, i) => (
                <li key={i} className="sm-type-guitar mb-2">
                    <Link
                        to={`/student/stage-3/swot/example?option=${swotOption}`}
                    >
                        Example {i + 1}
                    </Link>
                </li>
            ))}
        </ul>
    </>
)

const Stage3LandingPage = () => {
    const { loading, error, pageData, submitWorkObj, docSubmitted } =
        useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { team_development_options: devOptions } = pageData.team_by_pk
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}

    // TODO: can use reduce to combine these 2 expressions, i.e. divide array
    const completedSwots = Object.keys(doc).filter((opt) =>
        devOptions
            .map(({ development_option: { option } }) => option)
            .includes(opt)
    )

    const exampleSwotOptions = Object.keys(doc).filter(
        (swot) =>
            !devOptions
                .map(({ development_option: { option } }) => option)
                .includes(swot)
    )

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
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">
                                        Team Hub
                                    </Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">Stage 3</span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Lay The Foundations
                            </h2>

                            <p className="sm-type-lead mb-2">
                                You will need to work together to discuss the
                                available development options and decide on a
                                'longlist' of five which you think offer the
                                best chance of providing benefits to the
                                community - whether these be financial, social
                                or otherwise.
                            </p>
                            <p className="sm-type-lead mb-4">
                                Once decided upon, you'll then be asked to
                                complete a SWOT analysis for each of these. Read
                                the <b>SWOT</b> guide to find out more about
                                what is meant by <b>SWOT</b> and how you can
                                complete this task.
                            </p>

                            <p className="sm-type-guitar mb-4">
                                <span className="side-icon side-icon-orange shake">
                                    <HelpIcon />
                                </span>
                                Read the{' '}
                                <Link to="/information/about-swot">
                                    SWOT guide
                                </Link>{' '}
                                here.
                            </p>

                            <p className="sm-type-bigamp mb-3 mt-2">
                                Shown below is a map of Glenclas, with the
                                locations of proposed development opportunities
                                marked. Your task is to investigate each of the
                                opportunities and produce a SWOT analysis for
                                each option.
                            </p>
                            <MapOptions />

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Tasks to complete:
                                    </span>
                                </h3>

                                <div className="form-holder-border">
                                    <p className="sm-type-lead mb-2">Part I</p>
                                    <p className="sm-type-lead mb-2">
                                        Use the link below to find detailed
                                        information for each option, and then
                                        submit the 5 options your team will be
                                        taking forward.
                                    </p>
                                    <p className="sm-type-guitar">
                                        <Link to="/student/stage-3/options">
                                            Read about the development options
                                            and choose your 'longlist'
                                        </Link>
                                    </p>
                                </div>

                                <div
                                    className={`form-holder-border ${
                                        devOptions.length === 0 &&
                                        'not-available-holder'
                                    }`}
                                >
                                    <p className="sm-type-lead mb-2">Part II</p>
                                    <p className="sm-type-lead mb-2">
                                        Complete a SWOT analysis for each of the
                                        development options you chose in Part I.
                                    </p>
                                    <p className="sm-type-lead mb-2">
                                        Use the SWOT templates to help you
                                        confirm your choices. Make sure to hit
                                        'save' before returning to this screen!
                                    </p>

                                    <SwotLinks
                                        devOptions={devOptions}
                                        completedSwots={completedSwots}
                                    />

                                    {exampleSwotOptions.length > 0 && (
                                        <ExampleSwotLinks
                                            exampleSwots={exampleSwotOptions}
                                        />
                                    )}

                                    <SaveSubmitSection
                                        submitWorkObj={submitWorkObj}
                                        disableSubmit={
                                            completedSwots.length !== 5
                                        }
                                        docSubmitted={docSubmitted}
                                    />
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
                                    <Link to="/student/stage-3/glenclas-map-options">
                                        View map of Glenclas
                                    </Link>
                                </p>
                                <p className="sm-type-amp">
                                    <Link to="/information/about-swot">
                                        SWOT guide
                                    </Link>
                                </p>
                            </div>

                            <p className="sm-type-guitar mb-2 mt-4">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Your checklist
                            </p>
                            <div className="side-grey">
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Read carefully through the detailed
                                        information on each development option.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Select your 5 options to take forward.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Read the SWOT guide to help you complete
                                        them.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Complete a SWOT analysis for each
                                        option.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage3LandingPage
