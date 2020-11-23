import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'
import api from '../../api'
import PraetorianList from '../../Components/PraetorianList/PraetorianList'
import DetailView from '../../Components/DetailView/DetailView'
import AddButton from '../../Components/AddButton/AddButton'

class Dashboard extends Component {
  state = {
    praetorians: [],
    showDetail: false,
    activePraetorian: null
  }

  componentWillMount () {
    api.get('/praetorians').then(res => {
      this.setState({'praetorians': res.data.praetorians})
    }).catch(err => {
      console.log(err)
    })
  }

  detailShowHandler = praetorian => {
    this.changeActivePraetorian(praetorian)
    this.setState({ showDetail: true })
  }

  detailCloseHandler = () => {
    this.setState({ showDetail: false })
  }

  changeActivePraetorian = praetorian => {
    this.setState({ activePraetorian: praetorian })
  }

  render() {
    const { praetorians, showDetail, activePraetorian } = this.state
    return (
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Col md='6' className='text-center'>
            <PraetorianList
              praetorians={praetorians}
              showDetail={this.detailShowHandler} />
            <AddButton />
          </Col>
          <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
            <DetailView
              show={showDetail}
              clicked={this.detailCloseHandler}
              praetorian={activePraetorian} />
            <h1 className='text-white display-3'>Account</h1>
            <Shield />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
