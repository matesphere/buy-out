import { useState, useReducer, useEffect, Reducer } from 'react'
import {
    SAVE_WORK_INITIAL,
    SAVE_WORK,
    SUBMIT_WORK_INITIAL,
    SUBMIT_WORK,
} from '../gql/mutations'

import { useAuthQuery, useAuthMutation } from './auth-utils'

import { DOCUMENT_QUERY } from '../gql/queries'
import {
    DocumentQuery,
    DocumentQueryVariables,
} from '../gql/types/DocumentQuery'

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

    return [checkboxState, toggleCheckbox, allCheckboxesChecked] as const
}

export enum ActionType {
    LoadAction,
    UpdateAction,
}

export const useWorkState = <InputState, Action>(
    stageId: number,
    workReducer: Reducer<InputState, Action>
) => {
    const [docId, setDocId] = useState('')
    const [workState, workDispatch] = useReducer<Reducer<InputState, Action>>(
        workReducer,
        {} as InputState
    )

    const [saveWorkInitial, saveWorkInitialResponse] = useAuthMutation(
        SAVE_WORK_INITIAL
    )
    const [saveWork, saveWorkResponse] = useAuthMutation(SAVE_WORK)
    const [submitWorkInitial, submitWorkInitialResponse] = useAuthMutation(
        SUBMIT_WORK_INITIAL
    )
    const [submitWork, submitWorkResponse] = useAuthMutation(SUBMIT_WORK)

    useEffect(() => {
        const { called, loading, data } = saveWorkInitialResponse
        if (called && !loading) {
            setDocId(data.insert_document_one.id)
        }
    }, [saveWorkInitialResponse.called])

    const { loading, error, data: pageData } = useAuthQuery<
        DocumentQuery,
        DocumentQueryVariables
    >(DOCUMENT_QUERY, { variables: { stage_id: stageId } }, 'teamId')

    useEffect(() => {
        if (!loading) {
            const doc = pageData?.team_by_pk?.stage_progresses[0]?.documents[0]

            if (doc) {
                const { id, doc_data } = doc

                setDocId(id)

                // TODO: how do we convince TS that this is OK? i.e. where should Action live; load is called in here, update called in page
                workDispatch({
                    type: ActionType.LoadAction,
                    payload: doc_data,
                })
            }
        }
    }, [loading, pageData])

    const stageProgressId =
        pageData?.team_by_pk?.stage_progresses[0]?.id || null

    const saveWorkObj = !!docId
        ? {
              call: () =>
                  saveWork({
                      variables: { docId, docData: workState },
                  }),
              response: saveWorkResponse,
          }
        : {
              call: () =>
                  saveWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  }),
              response: saveWorkInitialResponse,
          }

    const submitWorkObj = !!docId
        ? {
              call: () =>
                  submitWork({
                      variables: { docId, docData: workState },
                  }),
              response: submitWorkResponse,
          }
        : {
              call: () =>
                  submitWorkInitial({
                      variables: { stageProgressId, docData: workState },
                  }),
              response: submitWorkInitialResponse,
          }

    return {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
    }
}