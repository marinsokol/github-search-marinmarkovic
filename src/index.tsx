import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './Router'
import { client } from './client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root')
)
