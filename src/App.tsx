import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Card from 'react-bootstrap/Card'

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

  return (
    <Card>
      <Card.Body>
        <Card.Title>App: {data.viewer.login}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default App
