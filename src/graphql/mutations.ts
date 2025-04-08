import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup($name: String!, $email: String!, $password: String!, $role: String!, $confirmed: Boolean!) {
    signup(input: { 
      name: $name, 
      email: $email, 
      password: $password,
      role: $role,
      confirmed: $confirmed
    }) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;