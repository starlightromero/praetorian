import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'
import api from '../../api'
import PraetorianList from '../../Components/PraetorianList/PraetorianList'
import DetailView from '../../Components/DetailView/DetailView'
import AddButton from '../../Components/AddButton/AddButton'
import AddView from '../../Components/AddView/AddView'
import LogoutButton from '../../Components/LogoutButton/LogoutButton'

class Dashboard extends Component {
  state = {
    praetorians: [],
    showDetail: false,
    showAdd: false,
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
    this.addCloseHandler()
    this.changeActivePraetorian(praetorian)
    this.setState({ showDetail: true })
  }

  detailCloseHandler = () => {
    this.setState({ showDetail: false })
  }

  changeActivePraetorian = praetorian => {
    this.setState({ activePraetorian: praetorian })
  }

  addShowHandler = () => {
    this.detailCloseHandler()
    this.setState({ showAdd: true })
  }

  addCloseHandler = () => {
    this.setState({ showAdd: false })
  }

  render() {
    const { praetorians, showDetail, showAdd, activePraetorian } = this.state
    
    return (
      <Container fluid className='h-100'>
        <LogoutButton {...this.props} />
        <Row className='h-100'>
          <Col md='6' className='text-center'>
            <PraetorianList
              praetorians={praetorians}
              showDetail={this.detailShowHandler} />
            <AddButton clicked={this.addShowHandler} />
          </Col>
          <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
            <AddView
              show={showAdd}
              clicked={this.addCloseHandler} />
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
