import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from '@reach/router'

import { withAuthenticator } from '@aws-amplify/ui-react'

const ChooseRoute = () => <div>hello</div>

export default withAuthenticator(ChooseRoute)
