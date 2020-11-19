import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'
import Apply from './Containers/Apply/Apply'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
