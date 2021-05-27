import { useState, useReducer, useEffect, Reducer } from 'react'
import {
    SAVE_WORK_INITIAL,
    SAVE_WORK,
    SUBMIT_WORK_INITIAL,
    SUBMIT_WORK,
} from '../gql/mutations'
import { gql } from '@apollo/client'

import { useAuthQuery, useAuthMutation } from './auth-utils'
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

const DOCUMENT_QUERY = gql`
    query DocumentQuery($team_id: uuid!, $stage_id: Int) {
        team_by_pk(id: $team_id) {
            stage_progresses(where: { stage_id: { _eq: $stage_id } }) {
                id
                stage_id
                status
                documents(where: { status: { _eq: draft } }) {
                    id
                    doc_data
                }
            }
        }
    }
`

export const useWorkState = <InputState, Action>(
    // docQuery: DocumentNode,
    stageId: number,
    // docSelector: (data: any) => any,
    workReducer: Reducer<InputState, Action>
) => {
    const [docId, setDocId] = useState('')
    const [workState, workDispatch] = useReducer<Reducer<InputState, Action>>(
        workReducer,
        {} as InputState
    )

    const [saveWorkInitial, saveWorkInitialResponse] =
        useAuthMutation(SAVE_WORK_INITIAL)
    const [saveWork, saveWorkResponse] = useAuthMutation(SAVE_WORK)
    const [submitWorkInitial, submitWorkInitialResponse] =
        useAuthMutation(SUBMIT_WORK_INITIAL)
    const [submitWork, submitWorkResponse] = useAuthMutation(SUBMIT_WORK)

    useEffect(() => {
        const { called, loading, data } = saveWorkInitialResponse
        if (called && !loading) {
            setDocId(data.insert_document_one.id)
        }
    }, [saveWorkInitialResponse.called])

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<DocumentQuery, DocumentQueryVariables>(
        DOCUMENT_QUERY,
        { variables: { stage_id: stageId } },
        'teamId'
    )

    useEffect(() => {
        if (!loading) {
            const { id, doc_data } =
                pageData?.team_by_pk?.stage_progresses[0]?.documents[0]

            if (id && doc_data) {
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
