import React, { FC } from 'react'
import { MutationResult } from '@apollo/client'

import SaveIcon from '../../../assets/save-icon.svg'
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
}

// TODO bring in confirm modals
export const SaveSubmitSection: FC<SaveSubmitSectionProps> = ({
    saveWorkObj,
    submitWorkObj,
    disableSubmit,
    submitted,
}) => (
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

        {submitWorkObj.response.data && (
            <span>Work submitted - good luck!</span>
        )}
    </>
)
