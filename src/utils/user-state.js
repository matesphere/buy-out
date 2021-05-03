import React, { createContext, useState } from 'react'

export const FilterStateContext = createContext({
    schoolId: '',
    userId: '',
    teamId: '',
    role: '',
    JWTToken: '',
})

export const FilterStateProvider = ({ children }) => {
    const [schoolId, setSchoolId] = useState('')
    const [userId, setUserId] = useState('')
    const [teamId, setTeamId] = useState('')
    const [role, setRole] = useState('')
    const [authToken, setAuthToken] = useState('')

    return (
        <FilterStateContext.Provider
            value={{
                schoolId,
                userId,
                teamId,
                role,
                authToken,
                setSchoolId,
                setUserId,
                setTeamId,
                setRole,
                setAuthToken,
            }}
        >
            {children}
        </FilterStateContext.Provider>
    )
}
