import { React } from 'react'
import { Container, Col, Row } from 'reactstrap'
import BackButton from '../../Components/BackButton/BackButton'
import ApplyForm from '../../Components/ApplyForm/ApplyForm'

const Apply = () => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
      <BackButton />
      <Row className='w-100'>
        <Col md='6'>
          <ApplyForm />
        </Col>
        <Col md='6' className='text-center'>
          <h1 className='text-white display-3'>APPLY</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Apply
