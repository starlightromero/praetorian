import React, { Component } from 'react'
import classes from './PraetorianList.module.css'
import PraetorianItem from './PraetorianItem/PraetorianItem'
import api from '../../api'

class PraetorianList extends Component {
  state = {
    praetorians: []
  }

  componentWillMount () {
    api.get('/praetorians').then(res => {
      this.setState({'praetorians': res.data.praetorians})
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    let praetorianList = (
      this.state.praetorians.map(praetorian => (
        <PraetorianItem
          key={praetorian} 
          name={praetorian}
          status='Active' />
      ))
    )
    
    return (
      <div className={classes.List}>
        {praetorianList}
      </div>
    )
  }
}

export default PraetorianList
