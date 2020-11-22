import React from 'react'
import { Container } from 'reactstrap'

const Confirmation = props => {
  return (
    <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>'>
      <h1 className='text-grey'>Thank you for applying</h1>
      <h1 className='text-grey'>We will be in touch</h1>
    </Container>
  )
}

export default Confirmation
