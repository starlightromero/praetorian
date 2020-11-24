import React from 'react'
import Modal from '../UI/Modal/Modal'

const DetailView = props => {
  return (
    <Modal {...props}>
      <h1>Detail View</h1>
      <h1>{props.praetorian}</h1>
    </Modal>
  )
}

export default DetailView
