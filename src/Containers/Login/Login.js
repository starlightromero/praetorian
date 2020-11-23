import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import classes from './Login.module.css'
import { ReactComponent as Lock } from '../../assets/lock.svg'
import BackButton from '../../Components/BackButton/BackButton'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = props => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
      <BackButton />
      <Row className='w-100 align-items-center'>
        <Col md='6'>
          <LoginForm />
        </Col>
        <Col md='6' className='text-center'>
          <h1 className='text-white display-3 mb-5'>Login</h1>
          <Lock className={classes.Lock} />
        </Col>
      </Row>
    </Container>
  )
}

export default Login
