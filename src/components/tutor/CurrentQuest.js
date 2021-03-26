import React from 'react'
import { useMutation } from '@apollo/client'

import { UNLOCK_STAGE } from '../../gql/mutations'

import Lock from '../../assets/lock.svg'
import Tick from '../../assets/tick.svg'
import Cross from '../../assets/cross.svg'

export const LockedStageStatus = ({ teamId, stageId }) => {
    //? this madness updates the Apollo cache after a mutation, to update the UI immediately
    const [unlockStage] = useMutation(UNLOCK_STAGE, {
        update(cache, { data: { unlockStage } }) {
            cache.modify({
                fields: {
                    tutor_by_pk(currentTutor) {
                        cache.modify({
                            id: currentTutor.__ref,
                            fields: {
                                teams(currentTeams) {
                                    const updatedTeam = cache.modify({
                                        id: unlockStage.team_id,
                                        fields: {
                                            stage_progresses(
                                                stageProgressesRef
                                            ) {
                                                const newStageProgressRef = cache.writeFragment(
                                                    {
                                                        data: unlockStage,
                                                        fragment: gql`
                                                            fragment NewStageProgress on StageProgress {
                                                                id
                                                                team_id
                                                                stage_id
                                                                status
                                                            }
                                                        `,
                                                    }
                                                )
                                                return [
                                                    ...stageProgressesRef,
                                                    newStageProgressRef,
                                                ]
                                            },
                                        },
                                    })
                                    return [...currentTeams, updatedTeam]
                                },
                            },
                        })
                    },
                },
            })
        },
    })
    return (
        <div>
            <Lock />
            <span>Locked</span>
            <span>
                <a
                    href="#"
                    onClick={() =>
                        unlockStage({
                            variables: {
                                teamId,
                                stageId,
                            },
                        })
                    }
                >
                    unlock stage
                </a>
            </span>
        </div>
    )
}

export const UnlockedStageStatus = () => (
    <div>
        <Lock />
        <span>Unlocked</span>
    </div>
)

export const SubmittedStageStatus = ({ documents }) => (
    <div>
        <Lock />
        <span>Work submitted</span>
        <span>
            <a href={documents.link}>Team Work</a>
        </span>
    </div>
)

export const FailedStageStatus = ({ documents }) => (
    <div>
        <Cross />
        <span>Failed</span>
        <span>
            <a href={documents.link}>Team Work</a>
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
            <a href={documents.link}>Team Work</a>
        </span>
        <span>
            <a href="#">Your Feedback</a>
        </span>
    </div>
)
