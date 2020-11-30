import React from 'react'
import { Button } from 'reactstrap'
import SideMenu from '../UI/SideMenu/SideMenu'

const DetailView = props => {
  return (
    <SideMenu {...props}>
      <h1>Detail View</h1>
      <h1>{props.praetorian}</h1>
      <Button color='primary' onClick={props.removeClicked}>
        Remove {props.praetorian}
      </Button>
    </SideMenu>
  )
}

export default DetailView
