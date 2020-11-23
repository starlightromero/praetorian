import React from 'react'
import { ReactComponent as AddIcon } from '../../assets/add-button.svg'
import classes from './AddButton.module.css'

const AddButton = props => {
  return (
    <>
      <AddIcon className={classes.AddButton} />
    </>
  )
}

export default AddButton
