import React, { useState, FC, useContext } from 'react'
import { MutationResult } from '@apollo/client'

import SaveIcon from '../../../assets/save-icon.svg'
import { useEffect } from 'react'

interface SaveSubmitSectionProps {
    saveWorkObj?: {
        call: () => void
        response: MutationResult<any>
    }
    submitWorkObj?: {
        call: () => void
        response: MutationResult<any>
    }
    disableSubmit?: boolean
    docSubmitted?: boolean
}

export const SaveSubmitSection: FC<SaveSubmitSectionProps> = ({
    saveWorkObj,
    submitWorkObj,
    disableSubmit,
    docSubmitted,
}) => {
    const [showSaveModal, setShowSaveModal] = useState(false)
    const [showSubmitModal, setShowSubmitModal] = useState(false)

    useEffect(() => {
        if (saveWorkObj?.response.data) {
            setShowSaveModal(true)
        }
    }, [saveWorkObj?.response, showSaveModal])

    return (
        <>
            {!submitWorkObj?.response.data && !docSubmitted && (
                <>
                    {!!saveWorkObj && (
                        <button
                            className="btn-outline-lg mt-4 btn-icon"
                            onClick={saveWorkObj.call}
                        >
                            <SaveIcon />
                            Save Work
                        </button>
                    )}

                    {!!submitWorkObj && (
                        <button
                            className="btn-solid-lg mt-4"
                            disabled={disableSubmit}
                            onClick={() => setShowSubmitModal(true)}
                        >
                            Submit
                        </button>
                    )}
                </>
            )}

            {saveWorkObj?.response.data && (
                <div className="modal-window">
                    <div>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-2 mb-2">
                            Work saved!
                        </p>
                    </div>
                </div>
            )}

            {submitWorkObj && showSubmitModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => setShowSubmitModal(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Close
                        </button>

                        {submitWorkObj.response.data ? (
                            <p className="sm-type-drum">
                                Work submitted - good luck!
                            </p>
                        ) : (
                            <>
                                <p>Are you sure?</p>
                                <button
                                    className="btn-solid-lg mt-4"
                                    disabled={disableSubmit}
                                    onClick={submitWorkObj.call}
                                >
                                    Yes, submit Work
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
