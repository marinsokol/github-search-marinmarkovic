import { gql } from 'apollo-boost'

export type User = {
  login: string
}

export type NodeUser = {
  node: User
}

export interface SearchUser {
  search: {
    edges: NodeUser[]
  }
}

export interface SearchUsersVariable {
  search: string
}

export const searchUser = gql`
  query($search: String!) {
    search(query: $search, type: USER, first: 5) {
      edges {
        node {
          ... on User {
            login
            __typename
          }
        }
      }
    }
  }
`
