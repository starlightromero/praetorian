import React from 'react'
import classes from './Modal.module.css'
import { ReactComponent as Close } from '../../../assets/close.svg'

const Modal = props => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(50vw)'
      }}>
      <Close className={classes.Close} onClick={props.clicked} />
      {props.children}
    </div>
  )
}

export default Modal
