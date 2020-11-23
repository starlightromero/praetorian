import React from 'react'
import classes from './DetailView.module.css'
import { ReactComponent as Close } from '../../assets/close.svg'

const DetailView = props => {
  let praetorian = <h1>No Active Praetorian</h1>

  if (props.praetorian) {
    praetorian = <h1>{props.praetorian}</h1>
  }

  return (
    <div
      className={classes.View}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(50vw)',
        opacity: props.show ? 1 : 0
      }}>
      <Close className={classes.Close} onClick={props.clicked} />
      <h1>Detail View</h1>
      {praetorian}
    </div>
  )
}

export default DetailView
