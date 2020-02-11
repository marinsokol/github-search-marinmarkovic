import { gql } from 'apollo-boost'

export type Repository = {
  id: string
  name: string
  description: string
  url: string
}

export interface User {
  login: string
  id: string
  name: string
  bio: string
  email: string
  avatarUrl: string
  repositories: {
    edges: { node: Repository }[]
  }
}

export interface GetUser {
  user: User
}

export interface GetUserVariable {
  login: string
}

export const getUser = gql`
  query($login: String!) {
    user(login: $login) {
      login
      id
      name
      bio
      email
      avatarUrl
      repositories(first: 10) {
        edges {
          node {
            id
            name
            description
            url
          }
        }
      }
    }
  }
`
