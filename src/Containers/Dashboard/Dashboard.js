import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'

const Dashboard = props => {
  return (
    <Container>
      <Row>
        <Col md='6'>
          <div>
            <h5>Praetorian's Name</h5>
            <h5>Status</h5>
          </div>
        </Col>
        <Col md='6' className='text-center'>
          <h1 className='text-white display-3'>Account</h1>
          <Shield />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
