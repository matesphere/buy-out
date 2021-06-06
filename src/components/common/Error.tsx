import React, { FC } from 'react'
import { ApolloError } from '@apollo/client'

export const Error: FC<{ error: ApolloError }> = ({ error }) => (
    <div>Error! ${error.message}</div>
)
