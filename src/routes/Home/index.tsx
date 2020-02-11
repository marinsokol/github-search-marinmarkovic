import React from 'react'
import { match as Match } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import {
  searchRepositories,
  SearchRepositories,
  SearchRepositoriesVariable
} from '../../client/queries/searchRepositories'
import RepositoryCards from '../../components/RepositoryCards'

import './home.css'

const Home = (props: { match: Match<{ search: string }> }) => {
  const { params } = props.match
  if (!params.search) {
    return (
      <div className="home-containter">
        <Card>
          <Card.Body>Search for repositories</Card.Body>
        </Card>
      </div>
    )
  }

  const { loading, error, data } = useQuery<SearchRepositories, SearchRepositoriesVariable>(searchRepositories, {
    variables: { search: params.search }
  })
  return (
    <div>
      {!loading && !error && <div className="home-title">Search results for: {params.search}</div>}
      <div className="home-containter">
        {loading && (
          <Card>
            <Card.Body className="loading">
              <Spinner animation="grow" />
              Loading...
            </Card.Body>
          </Card>
        )}
        {error && (
          <Card>
            <Card.Body className="error">ff000070</Card.Body>
          </Card>
        )}
        {!loading && !error && <RepositoryCards repositories={data.search.edges} />}
      </div>
    </div>
  )
}

export default Home
