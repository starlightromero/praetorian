import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'
import { ReactComponent as Add } from '../../assets/add-button.svg'
import api from '../../api'
import PraetorianList from '../../Components/PraetorianList/PraetorianList'

class Dashboard extends Component {
  state = {
    praetorians: []
  }

  componentWillMount () {
    api.get('/praetorians').then(res => {
      this.setState({'praetorians': res.data.praetorians})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Col md='6' className='text-center'>
            <PraetorianList praetorians={this.state.praetorians} />
          </Col>
          <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-white display-3'>Account</h1>
            <Shield />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
