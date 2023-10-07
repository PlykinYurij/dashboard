import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {AUTH_TOKEN} from '../const/constants.ts'


const httpLink = createHttpLink({
    uri: 'https://graphql-demo.dev.aicall.ru/graphql'
})

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client