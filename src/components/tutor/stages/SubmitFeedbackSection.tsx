import React, { useState, FC } from 'react'
import { MutationResult } from '@apollo/client'

interface SubmitFeedbackSectionProps {
    submittedFeedback: { feedback: any }
    submitFeedbackObj: {
        call: () => Promise<any>
        response: MutationResult<any>
    }
    disableSubmit: boolean
    showModal: boolean
    allowUpdate: boolean
    setAllowUpdate: (value: boolean) => void
}

export const SubmitFeedbackSection: FC<SubmitFeedbackSectionProps> = ({
    submittedFeedback,
    submitFeedbackObj,
    disableSubmit,
    allowUpdate,
    setAllowUpdate,
}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {((!submitFeedbackObj.response.data && !submittedFeedback) ||
                allowUpdate) && (
                <button
                    className="btn-solid-lg mt-4"
                    disabled={disableSubmit}
                    onClick={() => setShowModal(true)}
                >
                    Submit Feedback
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
