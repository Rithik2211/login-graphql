import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $email: String!, $password: String!) {
    login(input: { 
      username: $username,
      email: $email, 
      password: $password 
    }) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup($username: String!, $email: String!, $password: String!, $role: String!, $confirmed: Boolean!) {
    signup(input: { 
      username: $username, 
      email: $email, 
      password: $password,
      role: $role,
      confirmed: $confirmed
    }) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;