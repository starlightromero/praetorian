import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { ReactComponent as Shield } from '../../../assets/shield.svg'

const FeatureCard = props => {
  return (
    <Card color='primary'>
      <Shield />
      <CardBody>
        <CardTitle tag='h5'>{props.title}</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted'>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}

export default FeatureCard
