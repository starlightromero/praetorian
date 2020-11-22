import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import BackButton from '../../Components/BackButton/BackButton'
import { ReactComponent as ProtectionIcon } from '../../assets/exclamation-sign.svg'
import { ReactComponent as PlaneIcon } from '../../assets/plane.svg'
import { ReactComponent as BrickWallIcon } from '../../assets/brick-wall.svg'

const LearnMore = props => {
  return (
    <>
      <Container fluid className='m-0 p-0'>
        <BackButton />
        <Row className='justify-content-end m-0 p-0'>
          <Col md='2' className='mt-3 text-right'>
            <NavLink
              exact
              to='/apply'>
              <Button outline color='light'>APPLY</Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className='align-items-end'>
          <Col md='4' className='text-center'>
            <ProtectionIcon />
            <h1 className='text-white mt-5 mb-0'>Protection</h1>
            <h4 className='text-grey'>Against Harm</h4>
          </Col>
          <Col md='4' className='text-center'>
            <PlaneIcon />
            <h1 className='text-white mt-5 mb-0'>Security</h1>
            <h4 className='text-grey'>Against Harm</h4>
          </Col>
          <Col md='4' className='text-center'>
            <BrickWallIcon />
            <h1 className='text-white mt-5 mb-0'>Defense</h1>
            <h4 className='text-grey'>Against Harm</h4>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LearnMore
