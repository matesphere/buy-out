import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { CapitalCostsSection } from '../../../../components/common/stages/business-plan/CapitalCostsSection'
import { RunningCostsSection } from '../../../../components/common/stages/business-plan/RunningCostsSection'
import { CashFlowSection } from '../../../../components/common/stages/business-plan/CashFlowSection'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { stage5Reducer, WorkState, Action } from './stage-5-landing'

import { useWorkState } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

export interface SectionProps {
    devOption: {
        option: string
        display_name: string
    }
    workState: WorkState
    workDispatch?: React.Dispatch<Action>
    docSubmitted: boolean
}

const Stage5BusinessPlanPage: FC<PageProps> = ({ location: { search } }) => {
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
        docSubmitted,
        stageComplete,
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

    const { id, num } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string; num: number }

    const { title: stageTitle } = pageData.stage_by_pk

    const teamDevOption = pageData.team_by_pk?.team_development_options.find(
        (opt) => opt.id === id
    )

    const devOption = teamDevOption?.development_option

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
                {/*<div className="save-icon">*/}
                {/*    <SaveIcon /> Save progress*/}
                {/*</div>*/}
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 5',
                                        url: stageComplete
                                            ? '/student/stage-5/complete'
                                            : '/student/stage-5/',
                                    },
                                ]}
                                currentDisplayName="Feasibility Studies"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Business Plan {num + 1}
                            </h2>

                            <p className="sm-type-lead mb-2">
                                Complete the following form to submit your
                                business plan.
                            </p>
                            <h3 className="sm-type-drum sm-type-drum--medium mb-2 redorange-highlight">
                                {teamDevOption?.team_choice_name ||
                                    devOption?.display_name}
                            </h3>
                        </div>
                        <div className="col-lg-4">
                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-orange">
                                    <HelpIcon />
                                </span>
                                Helpful information
                            </p>
                            <div className="side-grey">
                                <p className="sm-type-amp mb-4">
                                    Complete a Business Plan that will show how
                                    much money is required.
                                </p>

                                <p className="sm-type-amp">
                                    Show estimates of the costs and income
                                    expected over the first 4 years of
                                    operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <CapitalCostsSection
                                {...{
                                    devOption,
                                    workState,
                                    workDispatch,
                                    docSubmitted,
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <RunningCostsSection
                                {...{
                                    devOption,
                                    workState,
                                    workDispatch,
                                    docSubmitted,
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <CashFlowSection
                                {...{
                                    devOption,
                                    workState,
                                    workDispatch,
                                    docSubmitted,
                                }}
                            />
                        </div>
                    </div>

                    <SaveSubmitSection
                        saveWorkObj={saveWorkObj}
                        docSubmitted={docSubmitted}
                    />
                    <Link
                        to={
                            stageComplete
                                ? '/student/stage-5/complete'
                                : '/student/stage-5/'
                        }
                    >
                        Back to Stage 5
                    </Link>
                </section>
            </main>
        </>
    )
}

export default Stage5BusinessPlanPage
