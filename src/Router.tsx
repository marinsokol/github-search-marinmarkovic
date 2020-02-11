import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import User from './routes/User'
import Toolbar from './components/Toolbar'

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Toolbar />
        <Switch>
          <Route path="/user/:userId" component={User} />
          <Route path="/:search" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default Router
