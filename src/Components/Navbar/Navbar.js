import React from 'react'
import { Navbar } from 'reactstrap'
import classes from './Navbar.module.css'
import Title from './Title/Title'
import NavItem from './NavItem/NavItem'

const NavBar = () => (
  <Navbar color='primary' dark className={classes.Navbar}>
    <Title link='/' exact />
    <div className='float-right'>
      <NavItem link='/apply' exact>Apply</NavItem>
      <NavItem link='/apply' exact>Login</NavItem>
    </div>
  </Navbar>
)

export default NavBar
