import React, { FC } from 'react'

import {
    ActionType,
    BusinessPlan,
    CashFlow,
} from '../../../../pages/student/stages/stage-5/stage-5-landing'
import { SectionProps } from '../../../../pages/student/stages/stage-5/stage-5-business-plan'

const getBalance = ({ income, costs }: CashFlow) => {
    const year1 = (income.year1 || 0) - (costs.year1 || 0)
    const year2 = year1 + ((income.year2 || 0) - (costs.year2 || 0))
    const year3 = year2 + ((income.year3 || 0) - (costs.year3 || 0))
    const year4 = year3 + ((income.year4 || 0) - (costs.year4 || 0))

    return {
        year1,
        year2,
        year3,
        year4,
    }
}

export const CashFlowSection: FC<SectionProps> = ({
    id,
    workState,
    workDispatch,
}) => {
    let optionState: BusinessPlan | undefined

    if (workState[id]) {
        optionState = workState[id] as BusinessPlan
    }

    const sectionState: CashFlow = optionState?.cashFlow || {
        income: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
        costs: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
        balance: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
    }

    const autoBalance = true

    return (
        <div className="form-holder-border">
            <p className="sm-type-lead sm-type-lead--medium mb-2">
                4. Annual Cash Flow
            </p>

            <p className="sm-type-amp mb-2">
                <span className="sm-type-amp--medium redorange-highlight">
                    NOTES:
                </span>{' '}
                In the Cash Flow section, you should add the expected income for
                each year and subtract the costs you have just calculated, to
                give a final balance for each of the four years. When entering
                costs, you should include the capital cost in Year 1, to
                represent the initial cost of the scheme.
            </p>

            <div className="side-grey mb-2">
                <div className="row mb-2">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">Year 1</div>
                    <div className="col-lg-2">Year 2</div>
                    <div className="col-lg-2">Year 3</div>
                    <div className="col-lg-2">Year 4</div>
                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">Income</div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.income.year1}
                            onChange={({ target: { value } }) => {
                                const year1 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        income: {
                                            ...sectionState.income,
                                            year1,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.income.year2}
                            onChange={({ target: { value } }) => {
                                const year2 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        income: {
                                            ...sectionState.income,
                                            year2,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.income.year3}
                            onChange={({ target: { value } }) => {
                                const year3 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        income: {
                                            ...sectionState.income,
                                            year3,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.income.year4}
                            onChange={({ target: { value } }) => {
                                const year4 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        income: {
                                            ...sectionState.income,
                                            year4,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">Costs</div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.costs.year1}
                            onChange={({ target: { value } }) => {
                                const year1 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        costs: {
                                            ...sectionState.costs,
                                            year1,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.costs.year2}
                            onChange={({ target: { value } }) => {
                                const year2 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        costs: {
                                            ...sectionState.costs,
                                            year2,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.costs.year3}
                            onChange={({ target: { value } }) => {
                                const year3 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        costs: {
                                            ...sectionState.costs,
                                            year3,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.costs.year4}
                            onChange={({ target: { value } }) => {
                                const year4 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        costs: {
                                            ...sectionState.costs,
                                            year4,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">
                        <p className="sm-type-lead sm-type-lead--medium redorange-highlight">
                            Balance
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year1
                                    : sectionState.balance.year1
                            }
                            readOnly={autoBalance}
                            onChange={({ target: { value } }) => {
                                const year1 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        balance: {
                                            ...sectionState.balance,
                                            year1,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year2
                                    : sectionState.balance.year2
                            }
                            readOnly={autoBalance}
                            onChange={({ target: { value } }) => {
                                const year2 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        balance: {
                                            ...sectionState.balance,
                                            year2,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year3
                                    : sectionState.balance.year3
                            }
                            readOnly={autoBalance}
                            onChange={({ target: { value } }) => {
                                const year3 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        balance: {
                                            ...sectionState.balance,
                                            year3,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year4
                                    : sectionState.balance.year4
                            }
                            readOnly={autoBalance}
                            onChange={({ target: { value } }) => {
                                const year4 =
                                    value !== '' ? parseInt(value) : ''

                                workDispatch({
                                    type: ActionType.UpdateBusinessPlan,
                                    option: id,
                                    planSection: 'cashFlow',
                                    payload: {
                                        ...sectionState,
                                        balance: {
                                            ...sectionState.balance,
                                            year4,
                                        },
                                    },
                                })
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-2 mt-2">
                <button className="btn-solid-lg mt-4">Submit Work</button>
            </div>
        </div>
    )
}
