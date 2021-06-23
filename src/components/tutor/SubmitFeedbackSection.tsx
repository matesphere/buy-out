import React, { useState, FC } from 'react'
import { MutationResult } from '@apollo/client'

import { TextEditor } from '../../components/common/TextEditor'

import HelpIcon from '../../assets/help-icon.svg'

interface SubmitFeedbackSectionProps {
    feedbackState: { feedback: any }
    changeFunc: (data: any) => void
    submittedFeedback: { feedback: any }
    submitFeedbackObj: {
        call: () => Promise<any>
        response: MutationResult<any>
    }
    disableSubmit: boolean
}

export const SubmitFeedbackSection: FC<SubmitFeedbackSectionProps> = ({
    feedbackState,
    changeFunc,
    submittedFeedback,
    submitFeedbackObj,
    disableSubmit,
}) => {
    const [allowUpdate, setAllowUpdate] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="side-grey">
                <h3 className="task ticker mb-2">
                    <span className="ticker-sheet ticker-feedback">
                        <HelpIcon />
                    </span>
                    <span className="sm-type-drum green-highlight">
                        Your feedback:
                    </span>
                </h3>
                <div className="form-holder-border">
                    <p className="sm-type-lead">
                        <TextEditor
                            data={feedbackState?.feedback || ''}
                            onChange={changeFunc}
                            docSubmitted={submittedFeedback && !allowUpdate}
                        />
                    </p>

                    {((!submitFeedbackObj.response.data &&
                        !submittedFeedback) ||
                        allowUpdate) && (
                        <button
                            className="btn-solid-lg mt-4"
                            disabled={disableSubmit}
                            onClick={() => setShowModal(true)}
                        >
                            Submit Feedback
                        </button>
                    )}
                </div>
            </div>

            {submittedFeedback && !allowUpdate && (
                <button
                    className="btn-solid-lg mt-4"
                    onClick={() => setAllowUpdate(true)}
                >
                    Update Feedback
                </button>
            )}

            {showModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => setShowModal(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Close
                        </button>

                        {submitFeedbackObj.response.data ? (
                            <p className="sm-type-drum">Feedback submitted</p>
                        ) : (
                            <>
                                <p>Are you sure?</p>
                                <button
                                    className="btn-solid-lg mt-4"
                                    disabled={disableSubmit}
                                    onClick={() => {
                                        submitFeedbackObj.call()
                                        setAllowUpdate(false)
                                    }}
                                >
                                    Yes, submit feedback
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
