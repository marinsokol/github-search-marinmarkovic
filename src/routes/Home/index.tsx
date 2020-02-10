import React from 'react'
import { Link, match as Match } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Card from 'react-bootstrap/Card'
import { searchRepositories, SearchRepositories } from '../../client/queries/repositories'

const Home = (props: { match: Match<{ search: string }> }) => {
  const { match } = props
  if (!match.params.search) {
    return (
      <div>
        <Card>
          <Card.Body>Search for repositories</Card.Body>
        </Card>
      </div>
    )
  }

  const { loading, error, data } = useQuery<SearchRepositories>(searchRepositories, { variables: { search: 'hah' } })
  console.log('TCL: Home -> loading, error, data', loading, error, data)
  return (
    <div>
      Repositories
      <Link to="/user">User</Link>
    </div>
  )
}

export default Home
