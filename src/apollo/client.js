import fetch from 'cross-fetch'
import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    HttpLink,
    from,
} from '@apollo/client'

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'x-hasura-access-key': 'thisisalongrandomstring',
        },
    })

    return forward(operation)
})

export const client = new ApolloClient({
    link: from([
        authMiddleware,
        new HttpLink({
            uri: 'http://3.9.132.238/v1/graphql',
            fetch,
        }),
    ]),
    cache: new InMemoryCache(),
})
