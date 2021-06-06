import React, { useState, FC } from 'react'
import { MutationResult } from '@apollo/client'

interface SubmitFeedbackSectionProps {
    submitFeedbackObj: {
        call: () => Promise<any>
        response: MutationResult<any>
    }
    disableSubmit: boolean
    showModal: boolean
}

// TODO bring in confirm modals
export const SubmitFeedbackSection: FC<SubmitFeedbackSectionProps> = ({
    submitFeedbackObj,
    disableSubmit,
}) => {
    const [showModal, setShowModal] = useState(true)

    return (
        <>
            {!submitFeedbackObj.response.data && (
                <button
                    className="btn-solid-lg mt-4"
                    disabled={disableSubmit}
                    onClick={submitFeedbackObj.call}
                >
                    Submit Feedback
                </button>
            )}

            {/*{saveWorkObj.response.data && (*/}
            {/*    <>*/}
            {/*        {showModal && (*/}
            {/*            <div className="modal-window">*/}
            {/*                <div>*/}
            {/*                    <button*/}
            {/*                        onClick={() => setShowModal(false)}*/}
            {/*                        title="Close"*/}
            {/*                        className="modal-close"*/}
            {/*                    >*/}
            {/*                        Close*/}
            {/*                    </button>*/}
            {/*                    <p className="sm-type-drum">Work saved.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </>*/}
            {/*)}*/}

            {submitFeedbackObj.response.data && (
                <>
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
                                <p className="sm-type-drum">
                                    Feedback submitted
                                </p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
