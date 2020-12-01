import React, { useState, useEffect, useCallback } from 'react'
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

  // useEffect(() => {
  //   api.get('/praetorians').then(res => {
  //     setPraetorians(res.data.praetorians)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  const addCloseHandler = useCallback(() => {
    setShowAdd(false)
  }, [])

  const changeActivePraetorian = useCallback(praetorian => {
    setActivePraetorian(praetorian)
  }, [])

  const detailShowHandler = useCallback(praetorian => {
    addCloseHandler()
    changeActivePraetorian(praetorian)
    setShowDetail(true)
  }, [addCloseHandler, changeActivePraetorian])

  const closeDetailHandler = useCallback(() => {
    setShowDetail(false)
  }, [])

  const showAddMenuHandler = useCallback(() => {
    closeDetailHandler()
    setShowAdd(true)
  }, [closeDetailHandler])

  const addPraetorianHandler = useCallback(() => {

  }, [])

  const removePraetorianHandler = useCallback(() => {

  }, [])

  return (
    <Container fluid className='h-100'>
      <LogoutButton {...props} />
      <Row className='h-100'>
        <Col md='6' className='text-center'>
          <PraetorianList
            praetorians={praetorians}
            clicked={detailShowHandler} />
          <AddButton clicked={showAddMenuHandler} />
        </Col>
        <Col md='6' className='text-center d-flex flex-column justify-content-center align-items-center'>
          <AddView
            show={showAdd}
            close={addCloseHandler}
            addPraetorian={addPraetorianHandler} />
          <DetailView
            show={showDetail}
            clicked={closeDetailHandler}
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
