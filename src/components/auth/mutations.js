import {gql} from 'react-apollo'

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            id
            email
            is_active
            last_login
            roles
            token {
                access_token
                expires_in
                token_type
                scope
                redirect_uris
            }
        }
    }
`
export const LOGOUT_USER = gql`
    mutation logoutUser($token: String!) {
        logoutUser(token: $token)
    }
`
export const PASSWORD_RESET = gql`
    mutation passwordReset($email: String!) {
        passwordReset(email: $email)
    }
`
export const REFRESH_TOKEN = gql`
    mutation refreshUser($token: String!) {
        refreshUser(token: $token) {
            access_token
            expires_in
            token_type
            scope
        }
    }
`
export const REGISTER_APP = gql`
    mutation registerApp($name: String!, $redirectUri: String!) {
        registerApp(name: $name, redirectUri: $redirectUri) {
            name
            redirect_uris
            skip_authorization
            authorization_grant_type
            client_id
            client_secret
        }
    }
`
export const REGISTER_USER = gql`
    mutation registerUser($email: String!, $password: String!, $name: String!) {
        registerUser(email: $email, password: $password, name: $name)
    }
`
