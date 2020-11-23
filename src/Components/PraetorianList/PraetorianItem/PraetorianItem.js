import React from 'react'
import classes from './PraetorianItem.module.css'

const PraetorianItem = props => {
  return (
    <div
      className={classes.Item}
      onClick={() => props.clicked(props.name)}>
      <h6>{props.name}</h6>
      <h6>{props.status}</h6>
    </div>
  )
}

export default PraetorianItem
