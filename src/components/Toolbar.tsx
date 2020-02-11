import React, { useState, ChangeEvent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { History } from 'history'
import { debounce } from 'lodash'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'
import { useQuery } from '@apollo/react-hooks'
import { searchUser, SearchUsersVariable, SearchUser } from '../client/queries/searchUser'

import './toolbar.css'

const initState = {
  search: '',
  query: ''
}

const Toolbar = (props: { history: History }) => {
  const [state, setState] = useState<{ search: string; query: string }>(initState)
  const { loading, error, data } = useQuery<SearchUser, SearchUsersVariable>(searchUser, {
    variables: { search: state.query }
  })
  const user = !loading && !error ? data.search.edges.find(({ node }) => node.login.indexOf(state.search) === 0) : null

  const onQueryChange = debounce(() => setState(s => ({ ...s, query: s.search })), 1000)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    onQueryChange()
    setState(s => ({ ...s, search: text }))
  }
  const onSearch = () => {
    setState(initState)
    props.history.push(`/${state.search}`)
  }

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="toolbar">
        <Navbar.Brand href="/">Github Search</Navbar.Brand>
        <Dropdown show={Boolean(state.search.length)}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" value={state.search} onChange={onChange} />
          <Dropdown.Menu show={Boolean(state.search.length)}>
            <Dropdown.Item onClick={onSearch} as="div">
              <div>Search repositories</div>
            </Dropdown.Item>
            {user && (
              <Dropdown.Item as="div">
                <Link to={`/user/${user.node.login}`}>Go to user's {user.node.login} page</Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </React.Fragment>
  )
}

export default withRouter(Toolbar)
