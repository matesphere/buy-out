import { useState } from 'react'

export const useCheckboxListState = (listOfLabels) => {
    const [checkboxState, setCheckboxState] = useState(
        listOfLabels.map((label, i) => ({ id: i, label, value: false }))
    )

    const toggleCheckbox = (id) => {
        setCheckboxState((state) =>
            state.map((checkbox) =>
                checkbox.id === id
                    ? { id, label: checkbox.label, value: !checkbox.value }
                    : checkbox
            )
        )
    }

    const allCheckboxesChecked = checkboxState
        .map((checkbox) => checkbox.value)
        .every(Boolean)

    return [checkboxState, toggleCheckbox, allCheckboxesChecked]
}
