import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { CheckList } from '../../../../components/common/Checklist'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import {
    stage1CheckListEng,
    stage1DataSubTitleEng,
    stage1DataTaskEng,
} from './_stage1.data'

import TickSheet from '../../../../assets/tick-sheet.svg'
import DogVideo from '../../../../assets/the-quest-intro.mp4'

import '../../../../scss/index.scss'

const Stage1LandingPage = () => {
    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<StageQuery, StageQueryVariables>(
        STAGE_QUERY,
        {
            variables: { stage_id: 1, includeDevOptions: false },
        },
        'teamId'
    )

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

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - {stageTitle}</title>
                <meta name="description" content="The description" />
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
                                <span className="leaf crumb-caps">Stage 1</span>
                            </div>
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            {stage1DataSubTitleEng.map((text, i) => (
                                <p key={i} className="sm-type-guitar mb-4">
                                    {text}
                                </p>
                            ))}

                            <div className="homepage-image mb-4">
                                <video controls>
                                    <source src={DogVideo} type="video/mp4" />
                                </video>
                            </div>
                            <div className="side-grey">
                                <h4 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task to complete:
                                    </span>
                                </h4>

                                {stage1DataTaskEng.map((text, i) => (
                                    <p key={i} className="sm-type-bigamp mb-2">
                                        {text}
                                    </p>
                                ))}

                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-1/task">
                                                Click here to answer a series of
                                                questions
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <CheckList items={stage1CheckListEng} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage1LandingPage
