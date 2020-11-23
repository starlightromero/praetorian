import React from 'react'
import classes from './PraetorianItem.module.css'

const PraetorianItem = props => {
  return (
    <div className={classes.Item}>
      <h6>Praetorian's Name</h6>
      <h6>Status</h6>
    </div>
  )
}

export default PraetorianItem
