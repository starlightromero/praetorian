import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Containers/Welcome/Welcome'
import Login from './Containers/Login/Login'
import Apply from './Containers/Apply/Apply'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/apply' component={Apply} />
      </Switch>
    </Router>
  )
}

export default App
