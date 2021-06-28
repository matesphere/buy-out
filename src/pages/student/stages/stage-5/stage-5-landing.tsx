import React, { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { CheckList } from '../../../../components/common/Checklist'
import { Helpful } from '../../../../components/common/Helpful'
import { CostOfLand } from '../../../../components/common/stages/business-plan/CostOfLand'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { useWorkState } from '../../../../utils/input-utils'

import { DocumentCompleteQuery_team_by_pk_team_development_options } from '../../../../gql/types/DocumentCompleteQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'
import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'
interface FourYearCosts {
    year1: number | ''
    year2: number | ''
    year3: number | ''
    year4: number | ''
}

export interface LandCost {
    area: number | ''
    price: number | ''
    funder: string
    amountOfFunding: number | ''
}

export interface CapitalCosts {
    costs: Array<{ details: string; cost: number | '' }>
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface RunningCosts {
    costs: Array<{ details: string } & FourYearCosts>
}

export interface CashFlow {
    income: FourYearCosts
    costs: FourYearCosts
    balance: FourYearCosts
}
export interface BusinessPlan {
    capitalCosts: CapitalCosts
    runningCosts: RunningCosts
    cashFlow: CashFlow
}

export enum ActionType {
    Load,
    UpdateLandCost,
    UpdateBusinessPlan,
}

export interface WorkState {
    [key: string]: LandCost | BusinessPlan
}

export type Action =
    | {
          type: ActionType.Load
          option: string
          payload: WorkState
      }
    | {
          type: ActionType.UpdateLandCost
          payload: {
              area?: number | ''
              price?: number | ''
              funder?: string
              amountOfFunding?: number | ''
          }
      }
    | {
          type: ActionType.UpdateBusinessPlan
          option: string
          planSection: 'capitalCosts' | 'runningCosts' | 'cashFlow'
          payload: CapitalCosts | RunningCosts | CashFlow
      }

interface BusinessPlanLinksProps {
    shortlist: Array<DocumentCompleteQuery_team_by_pk_team_development_options>
    completedPlans: Array<string>
}

export const BusinessPlanLinks: FC<BusinessPlanLinksProps> = ({
    shortlist,
    completedPlans,
}) => (
    <ol>
        {shortlist.map(
            ({ id, development_option: { option, display_name } }, i) => (
                <li key={i} className="sm-type-guitar">
                    <Link
                        to={`/student/stage-5/business-plan?num=${i}&id=${id}`}
                    >
                        {display_name}
                    </Link>
                    {completedPlans.includes(option) && (
                        <span className="ml-2 side-icon">
                            <Tick />
                        </span>
                    )}
                </li>
            )
        )}
    </ol>
)

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
        case ActionType.UpdateBusinessPlan:
            return {
                ...state,
                [action.option]: {
                    ...state[action.option],
                    [action.planSection]: {
                        ...action.payload,
                    },
                },
            }
        default:
            return state
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
            image2: file(relativePath: { eq: "blue-2.jpg" }) {
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
        docSubmitted,
    } = useWorkState<WorkState, Action>(5, stage5Reducer, true)

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { title: stageTitle } = pageData.stage_by_pk
    const { team_development_options: devOptions } = pageData.team_by_pk
    const shortlist = devOptions.filter((opt) => opt.shortlist)
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}

    // const workStateLandCost = workState.landCost as LandCost
    const docLandCost = doc.landCost

    const completedPlans = Object.keys(doc).filter((opt) =>
        shortlist
            .map(({ development_option: { option } }) => option)
            .includes(opt)
    )

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
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 5"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <div className="blue-holder-border">
                                <div className="small-image">
                                    <GatsbyImage
                                        alt=""
                                        image={
                                            data.image2.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                                <p className="sm-type-lead small-image-holder">
                                    Your task for this stage is to complete a
                                    Business Plan that will show how much money
                                    is required to be raised to buy the land, as
                                    well as the capital costs to get each of
                                    your 3 options off the ground.
                                </p>
                            </div>
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
                                        Task{' '}
                                        {docSubmitted
                                            ? 'submitted'
                                            : 'to complete:'}
                                    </span>
                                </h3>
                                <p className="sm-type-lead mb-2">
                                    Complete the first section below, then move
                                    onto your business plan for each of your
                                    options.
                                </p>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <CostOfLand
                                            {...{
                                                workState,
                                                workDispatch,
                                                saveWorkObj,
                                                docSubmitted,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`form-holder-border ${
                                        !docLandCost && 'not-available-holder'
                                    }`}
                                >
                                    <p className="sm-type-lead sm-type-lead--medium mb-2">
                                        Part II - Business Plans
                                    </p>

                                    <BusinessPlanLinks
                                        shortlist={shortlist}
                                        completedPlans={completedPlans}
                                    />
                                </div>

                                <SaveSubmitSection
                                    submitWorkObj={submitWorkObj}
                                    disableSubmit={
                                        completedPlans.length !== 3 ||
                                        !docLandCost
                                    }
                                    docSubmitted={docSubmitted}
                                />
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
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage5LandingPage
