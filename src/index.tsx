import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import { client } from './client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
