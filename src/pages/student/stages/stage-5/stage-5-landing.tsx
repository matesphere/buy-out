import React, { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useWorkState } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'
import TickSheet from '../../../../assets/tick-sheet.svg'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'

import '../../../../scss/index.scss'
interface FourYearCosts {
    year1: number
    year2: number
    year3: number
    year4: number
}

interface LandCost {
    area: number
    price: number
    funder: string
    amountOfFunding: number
}

interface CapitalCosts {
    costs: Array<{ details: string; cost: number }>
    funding: Array<{ funderName: string; amount: number }>
}

type RunningCosts = Array<{ details: string } & FourYearCosts>

interface CashFlow {
    income: FourYearCosts
    costs: FourYearCosts
    balance: FourYearCosts
}
interface BusinessPlan {
    capitalCosts: CapitalCosts
    runningCosts: RunningCosts
    cashFlow: CashFlow
}

enum ActionType {
    Load,
    UpdateLandCost,
    UpdateCapitalCosts,
    UpdateRunningCosts,
    UpdateCashFlow,
}

export interface WorkState {
    [key: string]: LandCost | BusinessPlan
}

export type Action =
    | {
          type: ActionType.Load
          payload: WorkState
      }
    | {
          type: ActionType.UpdateLandCost
          payload: LandCost
      }
    | {
          type: ActionType.UpdateCapitalCosts
          payload: CapitalCosts
      }
    | {
          type: ActionType.UpdateRunningCosts
          payload: RunningCosts
      }
    | {
          type: ActionType.UpdateCashFlow
          payload: CashFlow
      }

export const stage5Reducer: Reducer<WorkState, Action> = (
    state,
    action
): WorkState => {
    switch (action.type) {
        case ActionType.Load:
            return action.payload
        case ActionType.UpdateLandCost:
            return {
                ...state,
                landCost: {
                    ...state.landCost,
                    ...action.payload,
                },
            }
        case ActionType.UpdateCapitalCosts:
            return {
                ...state,
                [action.payload.option]: {
                    ...action.payload.option,
                    ...action.payload,
                },
            }
    }
}

const Stage5LandingPage: FC = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "business-plans.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
    } = useWorkState<WorkState, Action>(3, stage5Reducer, true)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    const { title: stageTitle } = pageData.stage_by_pk
    const { team_development_options: devOptions } = pageData.team_by_pk
    const shortlist = devOptions.filter((opt) => opt.shortlist)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 5 - {stageTitle}</title>
            </Helmet>
            <main className="the-quest">
                <Header headerText="Stage 5" />

                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="breadcrumb-list-container">
                                <span className="crumb">
                                    <Link to="/student/team-hub/">Team Hub</Link>
                                    <span className="crumb-spacer">›</span>
                                </span>
                                <span className="leaf crumb-caps">
                                    Stage 5
                                </span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <p className="sm-type-lead mb-3">
                                Your task for this stage is to complete a
                                Business Plan that will show how much money is
                                required to be raised to buy the land, as well
                                as the capital costs to get each of your 3
                                options off the ground.
                            </p>
                            <p className="sm-type-lead mb-3">
                                You will also be required to include a list of
                                funders who will provide funding.
                            </p>

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <p className="sm-type-lead mb-3">
                                The Business Plan will also require you to show
                                estimates of the costs and income expected over
                                the first 4 years of operations.
                            </p>
                            <p className="sm-type-lead mb-3">
                                You should be able to find most of the figures
                                required in the development option information,
                                but in some cases you may need to make your own
                                ‘best estimates’ of either costs or income!
                            </p>

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
                                    Complete the first section below, then move
                                    onto your business plan for each of your
                                    options.
                                </p>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-holder-border">
                                            <p className="sm-type-lead sm-type-lead--medium mb-2">
                                                1. Cost of the Land
                                            </p>
                                            <p className="sm-type-amp mb-2">
                                                <span className="sm-type-amp--medium redorange-highlight">
                                                    NOTE:
                                                </span>{' '}
                                                In this section you will need to
                                                refer to the{' '}
                                                <Link to="/student/stage-2/plan-of-glenclas">
                                                    map of Glenclas
                                                </Link>{' '}
                                                and using the scale, calculate
                                                the Asking Price of the area of
                                                land for sale. Then show how the
                                                sale will be funded.
                                            </p>

                                            <div className="row side-grey mb-2">
                                                <div className="col-lg-12">
                                                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                                                        Costs
                                                    </p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Area of land (ha)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        value={
                                                            workState.landCost
                                                                ?.area || ''
                                                        }
                                                        onChange={({
                                                            target: { value },
                                                        }) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateLandCost,
                                                                payload: {
                                                                    area: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Price (£/ha)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        defaultValue={5000}
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="col-lg-4">
                                                    <label className="form-label sm-type-amp">
                                                        Total asking price (£)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        value={
                                                            workState.landCost
                                                                ?.price || ''
                                                        }
                                                        onChange={({
                                                            target: { value },
                                                        }) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateLandCost,
                                                                payload: {
                                                                    price: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="row side-grey mb-2">
                                                <div className="col-lg-12">
                                                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                                                        How will the asking
                                                        price be funded?
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label className="form-label sm-type-amp">
                                                        Name of funder
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        value={
                                                            workState.landCost
                                                                ?.funder || ''
                                                        }
                                                        onChange={({
                                                            target: { value },
                                                        }) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateLandCost,
                                                                payload: {
                                                                    funder: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </div>

                                                <div className="col-lg-6">
                                                    <label className="form-label sm-type-amp">
                                                        Amount of funding (£)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        value={
                                                            workState.landCost
                                                                ?.amountOfFunding ||
                                                            ''
                                                        }
                                                        onChange={({
                                                            target: { value },
                                                        }) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateLandCost,
                                                                payload: {
                                                                    amountOfFunding:
                                                                        value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <p className="sm-type-amp sm-type-amp--medium mb-2">
                                                <span className="sm-type-amp--medium redorange-highlight">
                                                    NOTE:
                                                </span>{' '}
                                                Save your "Cost of the Land"
                                                then move onto step 2.
                                            </p>

                                            <div className="mb-2 mt-2">
                                                <button className="btn-solid-lg mt-4">
                                                    Save costs
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-holder-border">
                                    <p className="sm-type-lead sm-type-lead--medium mb-2">
                                        2. Complete your business plans.
                                    </p>
                                    <ul>
                                        {shortlist.map(
                                            (
                                                {
                                                    id,
                                                    development_option: {
                                                        display_name,
                                                    },
                                                },
                                                i
                                            ) => (
                                                <li
                                                    key={i}
                                                    className="sm-type-guitar"
                                                >
                                                    <Link
                                                        to={`/student/stage-5/business-plan?num=${i}&id=${id}`}
                                                    >
                                                        {display_name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Helpful
                                items={[
                                    'Complete a Business Plan that will show how much money is required.',
                                    'Show estimates of the costs and income expected over the first 4 years of operations.',
                                ]}
                            />

                            <CheckList
                                items={[
                                    'You have calculated the Cost of Land.',
                                    'You have completed the Business Plans that will show how much money is required.',
                                ]}
                            />


                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage5LandingPage
