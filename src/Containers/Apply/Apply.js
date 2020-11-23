import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { ReactComponent as Papers } from '../../assets/papers.svg'
import BackButton from '../../Components/BackButton/BackButton'
import ApplyForm from '../../Components/ApplyForm/ApplyForm'

const Apply = props => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
      <BackButton />
      <Row className='w-100 align-items-center'>
        <Col md='6'>
          <ApplyForm />
        </Col>
        <Col md='6' className='text-center'>
          <h1 className='text-white display-3 mb-5'>Apply</h1>
          <Papers />
        </Col>
      </Row>
    </Container>
  )
}

export default Apply
