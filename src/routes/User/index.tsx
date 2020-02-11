import React from 'react'
import { match as Match } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getUser, GetUserVariable, GetUser } from '../../client/queries/user'

import './user.css'

const User = (props: { match: Match<{ userId: string }> }) => {
  const { loading, error, data } = useQuery<GetUser, GetUserVariable>(getUser, {
    variables: { login: props.match.params.userId }
  })

  return (
    <div className="user-containter">
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
      {!loading && !error && (
        <React.Fragment>
          <Row>
            <Col md="auto">
              <img alt={data.user.name} src={data.user.avatarUrl} />
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <div>Name: {data.user.name}</div>
                  <div>Email: {data.user.email}</div>
                  <div>Bio: {data.user.bio}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div>
            <div>Repositories: </div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default User
