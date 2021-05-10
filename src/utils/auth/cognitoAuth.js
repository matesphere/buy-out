// Note the import path because of a defect in the package
import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth'

// This is the CognitoIdSDK lib - see Step #2
// import cognitoId from './cognitoId'

// Convert my string in the env var to a comma separated array
const Arr = (string) => string.split(/:\s|,\s/)

// define the config for the Auth JS SDK
const config = {
    UserPoolId: process.env.AWS_USER_POOL_ID,
    ClientId: process.env.AWS_APP_CLIENT_ID,
    AppWebDomain: process.env.AWS_APP_DOMAIN,
    TokenScopesArray: ['openid', 'email'],
    RedirectUriSignIn: process.env.AWS_SIGN_IN_REDIRECT_URI,
    RedirectUriSignOut: process.env.AWS_SIGN_OUT_REDIRECT_URI,
}

// Generic error handler for "public" methods exported by this lib.
const handleError = (authFunction, push) => {
    try {
        return authFunction
    } catch (error) {
        return push('/', { authenticated: false, error })
    }
}

/*
Callback handlers...
- auth is the CognitoAuthSDK instance
- props contains history from react-router-dom and a dispatch action for updating the redux state after successfully starting a session with CognitoId
*/
const handleSuccess = ({ auth, ...props }) => {
    auth.userhandler = {
        onSuccess: (result) => {
            // return cognitoId.verifySession({ props, auth })
            console.log('hooray')
        },
        onFailure: (result) => {
            props.navigate('/', { error: 'Unable to Auth' })
        },
    }
}

/* Basically exposes methods within the SDK in a common lib for the rest of the app to consume.
Each SDK function is wrapped in the handleError method above. */
const cognitoAuthSDK = ({ onError, data, props }) => {
    const auth = new CognitoAuth(data)

    const ex = (f) => onError(f, props.navigate)

    handleSuccess({ auth, ...props })

    return {
        cached: () => ex(auth.getCachedSession()),
        lastUser: () => ex(auth.getLastUser()),
        login: () => ex(auth.getSession()),
        logout: () => ex(auth.signOut()),
        parsedUrl: (href) => ex(auth.parseCognitoWebResponse(href)),
        user: () => ex(auth.getCurrentUser()),
        // verifySession: () => cognitoId.verifySession({ props, auth }),
    }
}

/* Initializes the SDK with the config, error handler, and props from the component its being used in */
export default (props) =>
    cognitoAuthSDK({
        props,
        data: config,
        onError: handleError,
    })
