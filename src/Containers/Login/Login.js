import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { ReactComponent as Lock } from '../../assets/lock.svg'

const Login = props => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
      <Row className='w-100'>
        <Col md='6'>
          <LoginForm />
        </Col>
        <Col md='6' className='text-center'>
          <h1 className='text-white display-3'>LOGIN</h1>
          <Lock />
        </Col>
      </Row>
    </Container>
  )
}

export default Login
