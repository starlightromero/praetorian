import React from 'react'
import classes from './PraetorianList.module.css'
import PraetorianItem from './PraetorianItem/PraetorianItem'

const PraetorianList = props => {
  return (
    <div className={classes.List}>
      <PraetorianItem />
      <PraetorianItem />
      <PraetorianItem />
    </div>
  )
}

export default PraetorianList
