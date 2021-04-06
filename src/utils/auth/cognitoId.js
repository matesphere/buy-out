import { AWSRegion, AWSConfig, CognitoIdentityCredentials } from './awsSDK'
import { CognitoUserPool } from 'amazon-cognito-identity-js'

/* Config for CognitoID */
const config = {
    // identityPool: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
    userPool: {
        UserPoolId: process.env.AWS_USER_POOL_ID,
        ClientId: process.env.AWS_APP_CLIENT_ID,
    },
}

// Gets a User Pool instance
const getUserPool = () => new CognitoUserPool(config.userPool)

// Gets user attributes based on the passed cognitoUser
const getUserAttributes = (user) => {
    return user.getUserAttributes((err, result) => {
        if (err) {
            alert(err)
            return
        }
        return result
    })
}

// Gets a cognito user
const getCognitoUser = (user) => {
    const pool = getUserPool()
    return pool.getCurrentUser()
}

// The primary method for verifying/starting a CognitoID session
const verifySession = ({ props, username }) => {
    const poolUrl = `cognito-idp.${AWSRegion}.amazonaws.com/${config.userPool.UserPoolId}`

    /* Note - I'm skipping the basic auth step since I already have the accessToken and jwtToken stored locally
  thanks to Cognito Auth */

    /* You don't have to do this, but I am so I can get the user's name from the parsed JWT token so I don't have
  to call getUserAttributes after the session as been started. */
    const cognitoUser = getCognitoUser()
    let name

    /** Get a new session and set it in the AWS config */
    cognitoUser.getSession((err, result) => {
        console.log(err, result)
        if (result) {
            name = result.idToken.payload.given_name
            AWSConfig.credentials = new CognitoIdentityCredentials({
                IdentityPoolId: config.identityPool,
                Logins: {
                    [poolUrl]: result.idToken.jwtToken,
                },
            })
        }
    })

    /* Refresh the temporary token */
    AWSConfig.credentials.refresh((err) => {
        if (err) {
            console.error('Failed To Login To CognitoID:', err)
            props.history.push('/', {
                error: 'Failed to refresh your session. Please login again.',
            })
        } else {
            props.storeSession({
                token,
                name,
            })
        }
    })
}

const cognitoId = {
    getUserPool,
    getCognitoUser,
    getUserAttributes,
    verifySession,
}

export default cognitoId
