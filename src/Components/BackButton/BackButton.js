import React from 'react'
import { ReactComponent as BackIcon } from '../../assets/back-button.svg'
import classes from './BackButton.module.css'

const BackButton = props => {

  const handleBackClick = () => {
    props.history.goBack()
  }

  return (
    <>
      <BackIcon className={classes.BackButton} onClick={handleBackClick} />
    </>
  )
}

export default BackButton
