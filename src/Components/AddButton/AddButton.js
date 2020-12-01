import React from 'react'
import { ReactComponent as AddIcon } from '../../assets/add-button.svg'
import classes from './AddButton.module.css'

const AddButton = props => (
  <div className={classes.AddContainer}>
    <AddIcon className={classes.AddButton} onClick={props.clicked} />
  </div>
)

export default AddButton
