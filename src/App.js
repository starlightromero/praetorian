import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Welcome from './Containers/Welcome/Welcome'
import Login from './Containers/Login/Login'
import LearnMore from './Containers/LearnMore/LearnMore'
import Apply from './Containers/Apply/Apply'
import FullApplication from './Containers/FullApplication/FullApplication'
import Confirmation from './Containers/Confirmation/Confirmation'
import Dashboard from './Containers/Dashboard/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/learn-more' component={LearnMore} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/praetorian-application' component={FullApplication} />
        <Route exact path='/confirmation' component={Confirmation} />
        <Route exact path='/account' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
