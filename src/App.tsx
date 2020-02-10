import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import User from './routes/User'
import Toolbar from './components/Toolbar'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Toolbar />
        <Switch>
          <Route path="/user/:id" component={User} />
          <Route path="/:search" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App
