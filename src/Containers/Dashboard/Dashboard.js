import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ReactComponent as Shield } from '../../assets/shield.svg'
import api from '../../api'
import PraetorianList from '../../Components/PraetorianList/PraetorianList'
import DetailView from '../../Components/DetailView/DetailView'
import AddButton from '../../Components/AddButton/AddButton'
import AddView from '../../Components/AddView/AddView'
import LogoutButton from '../../Components/LogoutButton/LogoutButton'

const Dashboard = props => {
  const [ praetorians, setPraetorians ] = useState([])
  const [ showDetail, setShowDetail ] = useState(false)
  const [ showAdd, setShowAdd ] = useState(false)
  const [ activePraetorian, setActivePraetorian ] = useState(null)

  api.get('/praetorians').then(res => {
    setPraetorians(res.data.praetorians)
  }).catch(err => {
    console.log(err)
  })

  const detailShowHandler = praetorian => {
    addCloseHandler()
    changeActivePraetorian(praetorian)
    setShowDetail(true)
  }

  const detailCloseHandler = () => {
    setShowDetail(false)
  }

  const changeActivePraetorian = praetorian => {
    setActivePraetorian(praetorian)
  }

  const addShowHandler = () => {
    detailCloseHandler()
    setShowAdd(true)
  }

  const addCloseHandler = () => {
    setShowAdd(false)
  }

  const removePraetorianHandler = () => {

  }

  return (
    <Container fluid className='h-100'>
      <LogoutButton {...props} />
      <Row className='h-100'>
        <Col md='6' className='text-center'>
          <PraetorianList
            praetorians={praetorians}
            showDetail={detailShowHandler} />
          <AddButton clicked={addShowHandler} />
        </Col>
        <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
          <AddView
            show={showAdd}
            clicked={addCloseHandler} />
          <DetailView
            show={showDetail}
            clicked={detailCloseHandler}
            removeClicked={removePraetorianHandler}
            praetorian={activePraetorian} />
          <h1 className='text-white display-3'>Account</h1>
          <Shield />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
