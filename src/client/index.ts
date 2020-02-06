import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: process.env.API_URL,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      }
    })
  }
})
