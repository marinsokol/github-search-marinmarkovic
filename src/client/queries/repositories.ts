import { gql } from 'apollo-boost'

export type Repository = {
  id: string
  name: string
  description: string
  url: string
}

export type NodeRepository = {
  node: Repository
}

export interface SearchRepositories {
  search: {
    edges: NodeRepository[]
  }
}

export const searchRepositories = gql`
  query($search: String!) {
    search(query: $search, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
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
