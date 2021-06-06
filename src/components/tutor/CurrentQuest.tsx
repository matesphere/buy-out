import React from 'react'
import { gql } from '@apollo/client'

import { useAuthMutation } from '../../utils/auth-utils'
import { UNLOCK_STAGE, MARK_PASSED } from '../../gql/mutations'
import { TUTOR_CURRENT_QUEST_QUERY } from '../../gql/queries'

import Lock from '../../assets/lock.svg'
import Tick from '../../assets/tick.svg'
import Cross from '../../assets/cross.svg'
import Progress from '../../assets/progress.svg'
import Submitted from '../../assets/submitted.svg'

export const LockedStageStatus = ({ teamId, stageId }) => {
    const [unlockStage] = useAuthMutation(UNLOCK_STAGE, {
        query: TUTOR_CURRENT_QUEST_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return (
        <div>
            <Lock />
            <span>Locked</span>
            <span>
                <a
                    onClick={(e) => {
                        e.preventDefault()
                        unlockStage({
                            variables: {
                                teamId,
                                stageId,
                            },
                        })
                    }}
                >
                    unlock stage
                </a>
            </span>
        </div>
    )
}

export const UnlockedStageStatus = () => (
    <div className="progress">
        <Progress />
        <span>Unlocked</span>
    </div>
)

export const InProgressStageStatus = () => (
    <div className="progress">
        <Progress />
        <span>
            Unlocked - <span className="green-link">In progress</span>
        </span>
    </div>
)

export const SubmittedStageStatus = ({ documents, stageProgressId }) => {
    const [markPassed] = useAuthMutation(MARK_PASSED, {
        query: TUTOR_CURRENT_QUEST_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return (
        <div>
            <Submitted />
            <span className="orange-link">Work submitted</span>
            <span>
                <a href={documents[0].link}>Team Work</a>
            </span>
            <span>
                <a className="green-link text-underline">Write Feedback</a>
            </span>
            <span>
                <a className="green-link text-underline">Mark Failed</a>
            </span>
            <span>
                <a
                    className="green-link text-underline"
                    onClick={(e) => {
                        e.preventDefault()
                        markPassed({
                            variables: {
                                docId: documents[0].id,
                                stageProgressId,
                            },
                        })
                    }}
                >
                    Mark Passed
                </a>
            </span>
        </div>
    )
}

export const FailedStageStatus = ({ documents }) => (
    <div>
        <Cross />
        <span>Failed</span>
        <span>
            <a href={documents[0].link}>Team Work</a>
        </span>
        <span>
            <a href="#">Your Feedback</a>
        </span>
    </div>
)

export const CompletedStageStatus = ({ documents }) => (
    <div>
        <Tick />
        <span>Completed</span>
        <span>
            <a href={documents[0].link}>Team Work</a>
        </span>
        <span>
            <a href="#">Your Feedback</a>
        </span>
    </div>
)
