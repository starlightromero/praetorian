import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const NavItem = props => (
  <NavLink
    exact={props.exact}
    to={props.link}>
    <Button outline color='light' style={{ marginLeft: '1rem' }}>
      {props.children}
    </Button>
  </NavLink>
)

export default NavItem
