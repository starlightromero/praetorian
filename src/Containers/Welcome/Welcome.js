import React from 'react'
import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Shield } from '../../assets/shield-large.svg'
import classes from './Welcome.module.css'

const Welcome = props => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
      <Shield className={classes.Shield} />
      <h1 className='display-1 text-white'>PRAETORIAN</h1>
      <h3 className='text-white'>In a busy world protect what matters most - yourself.</h3>
      <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
        <Link
          exact
          to='/login'>
          <Button outline color='light'>LOGIN</Button>
        </Link>
        <Link
          exact
          to='/learn-more'>
          <Button outline color='light'>LEARN MORE</Button>
        </Link>
        <Link
          exact
          to='/apply'>
          <Button outline color='light'>APPLY</Button>
        </Link>
      </div>
    </Container>
  )
}

export default Welcome
