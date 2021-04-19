import { gql } from '@apollo/client'

export const GET_STUDENTS = gql`
    query Students {
        student {
            id
            user_id
            school_id
            user {
                full_name
            }
        }
    }
`
