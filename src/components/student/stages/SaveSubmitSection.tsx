import React, {useState, FC, useContext} from 'react'
import { MutationResult } from '@apollo/client'

import SaveIcon from '../../../assets/save-icon.svg'
import {NewQuestContext} from "../../../pages/tutor";
interface SaveSubmitSectionProps {
    saveWorkObj?: {
        call: () => Promise<any>
        response: MutationResult<any>
    }
    submitWorkObj: {
        call: () => Promise<any>
        response: MutationResult<any>
    }
    disableSubmit: boolean
    submitted: boolean
    showModal: boolean
}

// TODO bring in confirm modals
export const SaveSubmitSection: FC<SaveSubmitSectionProps> = ({
    saveWorkObj,
    submitWorkObj,
    disableSubmit,
    submitted,
}) => {
    const [showModal, setShowModal] = useState(true)

    return (
        <>
            {!submitWorkObj.response.data && (
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
                        onClick={submitWorkObj.call}
                    >
                        Submit Work
                    </button>
                </>
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

            {submitWorkObj.response.data && (
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
                                <p className="sm-type-drum">Work submitted - good luck!</p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
