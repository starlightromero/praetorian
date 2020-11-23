import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'
import PraetorianList from '../../Components/PraetorianList/PraetorianList'

const Dashboard = props => {
  return (
    <Container fluid className='h-100'>
      <Row className='h-100'>
        <Col md='6' className='text-center'>
          <PraetorianList />
        </Col>
        <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-white display-3'>Account</h1>
          <Shield />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
