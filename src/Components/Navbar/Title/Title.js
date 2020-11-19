import React from 'react'
import { NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Title = props => {
  return (
    <NavLink
      exact={props.exact}
      to={props.link}>
      <NavbarBrand>
        Praetorian
      </NavbarBrand>
    </NavLink>
  )
}

export default Title
