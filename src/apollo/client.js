import fetch from 'cross-fetch'
import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    HttpLink,
    from,
    split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import ws from 'ws'

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'x-hasura-access-key': 'community-land',
        },
    })

    return forward(operation)
})

const wsForNode = typeof window === 'undefined' ? ws : null

const wsLink = new WebSocketLink({
    uri: `wss://clq.beanmate.coffee/v1/graphql`,
    options: {
        reconnect: false,
        connectionParams: {
            headers: {
                'x-hasura-access-key': 'community-land',
            },
        },
    },
    webSocketImpl: wsForNode,
})

export const client = new ApolloClient({
    link: split(
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query)
            return (
                kind === 'OperationDefinition' && operation === 'subscription'
            )
        },
        wsLink,
        from([
            authMiddleware,
            new HttpLink({
                uri: 'https://clq.beanmate.coffee/v1/graphql',
                fetch,
            }),
        ])
    ),
    cache: new InMemoryCache(),
})
