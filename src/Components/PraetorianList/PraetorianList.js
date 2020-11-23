import React from 'react'
import classes from './PraetorianList.module.css'
import PraetorianItem from './PraetorianItem/PraetorianItem'

const PraetorianList = props => {
  let praetorianList = (
    props.praetorians.map(praetorian => (
      <PraetorianItem
        key={praetorian}
        name={praetorian}
        clicked={props.showDetail}
        status='Active' />
    ))
  )

  return (
    <div className={classes.List}>
      {praetorianList}
    </div>
  )
}

export default PraetorianList
