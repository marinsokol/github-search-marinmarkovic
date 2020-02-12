import React, { useState, ChangeEvent } from 'react'
import { match as Match } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { List, Grid } from 'react-bootstrap-icons'
import {
  searchRepositories,
  SearchRepositories,
  SearchRepositoriesVariable
} from '../../client/queries/searchRepositories'
import RepositoryCards from '../../components/RepositoryCards'

import './home.css'

const Home = (props: { match: Match<{ search: string }> }) => {
  const {
    params: { search }
  } = props.match
  if (!search) {
    return (
      <div className="home-containter">
        <Card>
          <Card.Body>Search for repositories</Card.Body>
        </Card>
      </div>
    )
  }

  const [{ view, sortBy }, setState] = useState<{ view: 'grid' | 'list'; sortBy: string }>({
    view: 'grid',
    sortBy: 'default'
  })
  const { loading, error, data } = useQuery<SearchRepositories, SearchRepositoriesVariable>(searchRepositories, {
    variables: { search }
  })

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.persist()
    setState(s => ({ ...s, sortBy: e.target.value }))
  }

  const getSortedRepositories = () => {
    switch (sortBy) {
      case 'match':
        return data.search.edges.sort((a, b) => {
          const aValue =
            (a.node.name && a.node.name.toLowerCase().indexOf(search) !== -1 ? 20000 : 0) +
            (a.node.description && a.node.description.toLowerCase().indexOf(search) !== -1 ? 10000 : 0)
          const bValue =
            (b.node.name && b.node.name.toLowerCase().indexOf(search) !== -1 ? 20000 : 0) +
            (b.node.description && b.node.description.toLowerCase().indexOf(search) !== -1 ? 10000 : 0)
          return bValue - aValue
        })
      case 'name':
        return data.search.edges.sort((a, b) => {
          if (a.node.name < b.node.name) return -1
          if (a.node.name > b.node.name) return 1
          return 0
        })
      default:
        return data.search.edges
    }
  }

  return (
    <div>
      {!loading && !error && (
        <div className="home-title">
          <div>Search results for: {search}</div>
          <div className="action-wrap">
            Sort: &nbsp;
            <Form.Control as="select" value={sortBy} onChange={onSelectChange}>
              <option value="default">Default</option>
              <option value="match">By best match</option>
              <option value="name">By name</option>
            </Form.Control>
            <List
              className={view === 'list' ? 'selected' : ''}
              onClick={() => setState(s => ({ ...s, view: 'list' }))}
            />
            <Grid
              className={view === 'grid' ? 'selected' : ''}
              onClick={() => setState(s => ({ ...s, view: 'grid' }))}
            />
          </div>
        </div>
      )}
      <div className={`home-containter ${view}`}>
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
            <Card.Body className="error">{error.message}</Card.Body>
          </Card>
        )}
        {!loading && !error && <RepositoryCards repositories={getSortedRepositories()} />}
      </div>
    </div>
  )
}

export default Home
