import React from 'react'

import { withAuth } from '../utils/auth/withAuth'

const CallbackRoute = (props) => <Redirect to="/" />

export default withAuth(CallbackRoute)
