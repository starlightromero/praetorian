import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Containers/Welcome/Welcome'
import Login from './Containers/Login/Login'
import Apply from './Containers/Apply/Apply'
import Confirmation from './Containers/Confirmation/Confirmation'
import Dashboard from './Containers/Dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/confirmation' component={Confirmation} />
        <Route eact path='account' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
