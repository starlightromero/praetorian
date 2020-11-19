import React from 'react'
import { Row, Col, CardDeck } from 'reactstrap'
import FeatureCard from './FeatureCard/FeatureCard'

const Features = () => {
  return (
    <Row>
      <Col center lg={{ size: 10, offset: 1 }} sm={{ size: 'auto' }}>
        <CardDeck>
          <FeatureCard title='First' />
          <FeatureCard title='Second' />
          <FeatureCard title='Third' />
        </CardDeck>
      </Col>
    </Row>
  )
}

export default Features
