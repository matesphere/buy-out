import React, { useState, FC, useContext } from 'react'
import { MutationResult } from '@apollo/client'

import SaveIcon from '../../../assets/save-icon.svg'

interface SaveSubmitSectionProps {
    saveWorkObj?: {
        call: () => void
        response: MutationResult<any>
    }
    submitWorkObj: {
        call: () => void
        response: MutationResult<any>
    }
    disableSubmit: boolean
    docSubmitted?: boolean
}

export const SaveSubmitSection: FC<SaveSubmitSectionProps> = ({
    saveWorkObj,
    submitWorkObj,
    disableSubmit,
    docSubmitted,
}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {!submitWorkObj.response.data && !docSubmitted && (
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

                    <button
                        className="btn-solid-lg mt-4"
                        disabled={disableSubmit}
                        onClick={() => setShowModal(true)}
                    >
                        Submit
                    </button>
                </>
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
