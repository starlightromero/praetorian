import React from 'react'
import classes from './LogoutButton.module.css'
import { ReactComponent as PowerIcon } from '../../assets/power-button.svg'

const LogoutButton = props => {
  const logoutHandler = () => {
    props.history.push('/')
  }

  return (
    <PowerIcon className={classes.PowerButton} onClick={logoutHandler} />
  )
}

export default LogoutButton
