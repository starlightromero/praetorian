import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import classes from './LoginForm.module.css'

const LoginForm = props => {
  return (
    <Form className={classes.Form}>
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' name='email' id='email' placeholder='Enter your email' />
      </FormGroup>
      <FormGroup>
        <Label for='pasword'>Password</Label>
        <Input type='password' name='password' id='password' placeholder='Enter your password' />
      </FormGroup>
      <Button color='primary'>Login</Button>
    </Form>
  )
}

export default LoginForm
