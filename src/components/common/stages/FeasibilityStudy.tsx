import React, { FC } from 'react'

import { TextEditor } from '../TextEditor'

import '../../scss/index.scss'

interface FeasibilityStudyType {
    benefits: string
    reasonsSucceed: string
    reasonsFail: string
}

interface FeasibilityStudyProps {
    docFeedback?: any
    devOptions: Array<{
        development_option: {
            option: string
            display_name: string
        }
    }>
    workState: { [key: string]: string | FeasibilityStudyType }
    changeFunc?: (
        option: string | null,
        section: string | null
    ) => (data: any) => void
    saveWorkObj?: { call: any; response: any }
    docSubmitted: boolean
}

export const FeasibilityStudy: FC<FeasibilityStudyProps> = ({
    devOptions,
    workState,
    changeFunc,
    docSubmitted,
}) => (
    <ol>
        <li className="mb-4">
            <div id="more-detail-hint">
                <h2 className="sm-type-bigamp mb-1">
                    Why does the Community want to buy this land? (You should
                    not refer to specific schemes but rather explain what it
                    would mean to the community to own this land.)
                </h2>
            </div>
            <div className="form-holder-border">
                <p className="sm-type-amp mb-1">
                    Enter your finding on the text box below.
                </p>
                <div className="ck-textarea">
                    <TextEditor
                        data={workState.whyBuy || ''}
                        onChange={
                            changeFunc ? changeFunc(null, null) : () => {}
                        }
                        docSubmitted={docSubmitted}
                    />
                </div>
            </div>
        </li>

        <li className="mb-4">
            <h2 className="sm-type-bigamp mb-2">
                For each Development Option, describe the expected benefits to
                the community, the reasons that the scheme is likely to succeed
                and the risks that might cause it to fail.
            </h2>

            {devOptions.map(
                ({ development_option: { option, display_name } }, i) => (
                    <div key={i} className="form-holder-border">
                        <h4 className="sm-type-drum mb-2">{display_name}</h4>
                        <div id="more-detail-hint11">
                            <p className="sm-type-bigamp mb-1 redorange-highlight">
                                Benefits to the Community
                            </p>
                        </div>
                        <div className="ck-textarea">
                            <TextEditor
                                data={workState[option]?.['benefits'] || ''}
                                onChange={
                                    changeFunc
                                        ? changeFunc(option, 'benefits')
                                        : () => {}
                                }
                                docSubmitted={docSubmitted}
                            />
                        </div>
                        <div id="more-detail-hint22">
                            <p className="sm-type-bigamp mb-1 green-highlight">
                                Reasons the Scheme is likely to succeed
                            </p>
                        </div>
                        <div className="ck-textarea">
                            <TextEditor
                                data={
                                    workState[option]?.['reasonsSucceed'] || ''
                                }
                                onChange={
                                    changeFunc
                                        ? changeFunc(option, 'reasonsSucceed')
                                        : () => {}
                                }
                                docSubmitted={docSubmitted}
                            />
                        </div>
                        <div id="more-detail-hin33">
                            <p className="sm-type-bigamp mb-1 red-highlight">
                                Risks that might cause the Scheme to fail
                            </p>
                        </div>
                        <div className="ck-textarea">
                            <TextEditor
                                data={workState[option]?.['reasonsFail'] || ''}
                                onChange={
                                    changeFunc
                                        ? changeFunc(option, 'reasonsFail')
                                        : () => {}
                                }
                                docSubmitted={docSubmitted}
                            />
                        </div>
                    </div>
                )
            )}
        </li>
    </ol>
)
