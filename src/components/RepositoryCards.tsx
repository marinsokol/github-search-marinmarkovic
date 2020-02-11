import React from 'react'
import Card from 'react-bootstrap/Card'
import { NodeRepository } from '../client/queries/searchRepositories'

const RepositoryCards = (props: { repositories: NodeRepository[] }) => (
  <React.Fragment>
    {props.repositories.map(({ node }) => (
      <Card key={node.id}>
        <Card.Title>{node.name}</Card.Title>
        {node.description && <Card.Body>{node.description}</Card.Body>}
        <Card.Link href={node.url} target="_blank">
          Visit repo on Github
        </Card.Link>
      </Card>
    ))}
  </React.Fragment>
)

export default RepositoryCards
