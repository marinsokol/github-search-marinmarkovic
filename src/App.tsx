import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import User from './routes/User'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
