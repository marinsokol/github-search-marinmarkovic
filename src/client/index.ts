import ApolloClient from 'apollo-boost'

console.log(process.env)

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer 6f00b105c65aa596069bb1626bb4b7af5c24cec4'
      }
    })
  }
})
