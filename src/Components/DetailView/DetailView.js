import React from 'react'
import { Button } from 'reactstrap'
import Modal from '../UI/Modal/Modal'

const DetailView = props => {
  return (
    <Modal {...props}>
      <h1>Detail View</h1>
      <h1>{props.praetorian}</h1>
      <Button color='primary' onClick={props.removeClicked}>
        Remove {props.praetorian}
      </Button>
    </Modal>
  )
}

export default DetailView
