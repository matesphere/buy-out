import React, {FC} from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import {
    TaskPanel,
    TaskContainer,
} from '../../../../components/common/stages/TaskPanel'
import '../../../../scss/index.scss'

import { Intro } from '../../../../components/student/Intro'
import { Helpful } from '../../../../components/student/Helpful'

const Stage7Page: FC = () => {
    const {graphCmsStageLandingPage: {stageTitle, stageIntro, helpfulInfo, tasksToComplete}} = useStaticQuery(graphql`
        query Stage7PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 7 }) {
                stageTitle 
                stageIntro
                tasksToComplete {
                  taskInfo {
                    raw
                  }
                  taskLinkText
                  title
                }
                helpfulInfo {
                  info {
                    raw
                  }
                }
            }
        }
    `)
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 7 - Present findings</title>
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
                                currentDisplayName="Stage 7"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            <p>{stageIntro}</p>
                            <Intro item={stageIntro} />

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-7/presentation-tips"
                                />

                                <TaskContainer
                                    taskToComplete={tasksToComplete[1]}
                                />
                            </TaskPanel>

                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage7Page
