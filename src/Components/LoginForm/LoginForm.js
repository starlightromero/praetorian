import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import classes from './LoginForm.module.css'

const LoginForm = props => {
  return (
    <Form className={classes.Form}>
      <FormGroup>
        <Label for='email' className='text-grey'>Email</Label>
        <Input type='email' name='email' id='email' placeholder='Enter your email' />
      </FormGroup>
      <FormGroup>
        <Label for='pasword' className='text-grey'>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Enter your password' />
      </FormGroup>
      <NavLink
        exact
        to='/account'>
        <Button color='primary' className='w-100'>Login</Button>
      </NavLink>
    </Form>
  )
}

export default LoginForm
