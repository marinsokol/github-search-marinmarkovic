import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface ViewerData {
  viewer: { login: string; name: string }
}

const VIEWER = gql`
  {
    viewer {
      login
      name
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery<ViewerData, {}>(VIEWER)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return <h1>App: {data.viewer.login}</h1>
}

export default App
