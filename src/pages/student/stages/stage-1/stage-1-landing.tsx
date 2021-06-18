import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../../../components/_header'
import Footer from '../../../../components/_footer'
import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'
import DogVideo from '../../../../assets/the-quest-intro.mp4'

import '../../../../scss/index.scss'
import CheckList from "../../../../components/common/Checklist";
import {
    stage1CheckListEng,
    stage1DataSubTitleEng,
    stage1DataTaskEng,
} from './_stage1.data'

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
    if (error) return <Error error={error} />

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
                <Header headerText="Stage 1" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            {stage1DataSubTitleEng.map((check) => (
                                <p
                                    className="sm-type-guitar mb-4"
                                    key={check.subtitle}
                                >
                                    {check.subtitle}
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

                                {stage1DataTaskEng.map((check) => (
                                    <p
                                        className="sm-type-bigamp mb-2"
                                        key={check.text}
                                    >
                                        {check.text}
                                    </p>
                                ))}

                                <div className="form-holder-border">
                                    <ul>
                                        <li className="sm-type-guitar">
                                            <Link to="/student/stage-1/task">
                                                Click here to answer a series of questions
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
                <Footer />
            </main>
        </>
    )
}

export default Stage1LandingPage
