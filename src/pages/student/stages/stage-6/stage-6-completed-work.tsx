import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import { gql } from '@apollo/client'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { useAuthQuery } from '../../../../utils/auth-utils'

const STAGE_6_WORK_QUERY = gql`
    query Stage6WorkQuery($team_id: uuid!, $dev_option_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(
                where: {
                    _or: [
                        { stage_id: { _eq: 3 } }
                        { stage_id: { _eq: 4 } }
                        { stage_id: { _eq: 5 } }
                    ]
                }
            ) {
                documents(where: { status: { _eq: submitted } }) {
                    doc_data
                }
            }
            team_development_options(where: { id: { _eq: $dev_option_id } }) {
                shortlist
                development_option {
                    display_name
                }
            }
        }
    }
`

const Stage6CompletedWorkPage: FC<PageProps> = ({ location: { search } }) => {
    const { id } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string }

    const { loading, error, data } = useAuthQuery(
        STAGE_6_WORK_QUERY,
        { dev_option_id: id },
        'teamId'
    )

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { title: stageTitle } = pageData.stage_by_pk

    const devOption = pageData.team_by_pk?.team_development_options.find(
        (opt) => opt.id === id
    )?.development_option

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 5 - {stageTitle} - Completed Work</title>
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
                                        displayName: 'Stage 6',
                                        url: '/student/stage-6/',
                                    },
                                ]}
                                currentDisplayName={`Your work = ${devOption.display_name}`}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage6CompletedWorkPage
