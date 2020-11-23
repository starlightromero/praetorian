import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import classes from './ApplyForm.module.css'
import api from '../../api.js'
import Loader from '../../UI/Loader/Loader'

class ApplyForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false
  }

  applyHandler = event => {
    event.preventDefault()
    window.location.href='confirmation/'
    // this.props.history.push('/confirmation')
    // this.setState({ loading: true })
    // const { name, email, password } = this.state
    // api.post('/user', {
    //   name: 'Star',
    //   email: 'star@starlight.com',
    //   password: 'password',
    // }).then(response => {
    //   console.log(response.data)
    //   this.setState({ loading: false })
    //   this.props.history.push('/confirmation')
    // }).catch(error => {
    //   this.setState({ loading: false })
    // })
  }
  
  render () {
    let form = (
      <Form className={classes.Form}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='name' name='name' id='name' placeholder='Enter your name' />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='email' name='email' id='email' placeholder='Enter your email' />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' name='password' id='password' placeholder='Enter a password' />
        </FormGroup>
        <FormGroup>
          <Label for='select'>Select</Label>
          <Input type='select' name='select' id='select'>
            <option>Praetorian</option>
            <option>Executive</option>
          </Input>
        </FormGroup>
        <Button color='primary' onClick={this.applyHandler}>Apply</Button>
      </Form>
    )

    if (this.state.loading === true) {
      form = <Loader />
    }
    
    return (
      <>
        {form}
      </>
    )
  }
}

export default ApplyForm
