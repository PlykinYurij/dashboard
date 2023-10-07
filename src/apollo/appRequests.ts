import {gql} from '@apollo/client'

export const AUTHORIZATION_USER = gql`
    mutation login($username:String!, $password: String!) {
        login(username: $username, password: $password){
            token
        }
    }
`
export const GET_DASHBOARD = gql`
    query getDashboard {
        dashboard{
            scenarios {
                active
                inactive
                completed
            }
            lists {
                active
                inactive
                completed
            }
            dialogs {
                active
                inactive
                completed
            }
        }
    }
`

export const GET_AUTH_USER = gql`
    query getUser {
        me{
            username
        }
    }
`