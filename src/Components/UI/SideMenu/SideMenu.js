import React from 'react'
import classes from './SideMenu.module.css'
import { ReactComponent as Close } from '../../../assets/close.svg'

const SideMenu = props => {
  return (
    <div
      className={classes.SideMenu}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(50vw)'
      }}>
      <Close className={classes.Close} onClick={props.clicked} />
      {props.children}
    </div>
  )
}

export default SideMenu
