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

export interface SearchRepositoriesVariable {
  search: string
}

export const searchRepositories = gql`
  query($search: String!) {
    search(query: $search, type: REPOSITORY, first: 40) {
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
