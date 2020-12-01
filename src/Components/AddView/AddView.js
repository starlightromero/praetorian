import React, { useState, useEffect, useCallback } from 'react'
import api from '../../api'
import SideMenu from '../UI/SideMenu/SideMenu'
import PraetorianList from '../PraetorianList/PraetorianList'

const AddView = props => {
  const [ praetorians, setPraetorians ] = useState([])

  useEffect(() => {
    api.get('/praetorians').then(res => {
      setPraetorians(res.data.praetorians)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <SideMenu
      clicked={props.close}
      show={props.show}>
      <h1 className='mt-3 text-secondary'>Available Praetorians</h1>
      <PraetorianList praetorians={praetorians} clicked={props.addPraetorian} />
    </SideMenu>
  )
}

export default AddView
