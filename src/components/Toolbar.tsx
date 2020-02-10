import React, { useState, ChangeEvent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { History } from 'history'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const Toolbar = (props: { history: History }) => {
  const [search, setState] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value)
  const onSearch = () => props.history.push(`/${search}`)

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Github Search</Navbar.Brand>
        <Dropdown>
          <div className="form-inline">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={onChange} />
            <Button variant="outline-success" onClick={onSearch}>
              Search
            </Button>
          </div>
          <Dropdown.Menu show={false}>
            <Dropdown.Item>
              <Link to="/">Search repositories</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/user">Go to user page</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </React.Fragment>
  )
}

export default withRouter(Toolbar)
