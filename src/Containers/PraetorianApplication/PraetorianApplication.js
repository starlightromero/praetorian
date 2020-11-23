import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import classes from './PraetorianApplication.module.css'

class PraetorianApplication extends Component {

  render () {
    return (
      <Form className={classes.Form}>
        <FormGroup>
          <Label for='experience'>Experience</Label>
          <CustomInput
            step='1'
            min='0'
            max='10'
            type='range'
            class='custom-range'
            id='experience' />
        </FormGroup>
        <FormGroup>
          <Label for='phone'>Phone</Label>
          <Input type='tel' id='phone' name='phone' pattern='[+]{1}[0-9]{11,14}' placeholder='Enter your phone number' />
        </FormGroup>
        <FormGroup>
          <Label for='address'>Address</Label>
          <Input type='text' name='address' id='address' placeholder='Enter your address' />
        </FormGroup>
        <FormGroup>
          <Label for='city'>City</Label>
          <Input type='text' name='city' id='city' placeholder='Enter your city' />
        </FormGroup>
        <FormGroup>
          <Label for='state'>State</Label>
          <Input type='text' name='state' id='state' placeholder='Enter your state' />
        </FormGroup>
        <FormGroup className='form-inline'>
          <Label for='travel' className='mr-3 noselect'>Willing to travel?</Label>
          <CustomInput type='switch' id='travel' name='travel' />
        </FormGroup>
        <FormGroup className='form-inline'>
          <Label for='background' className='mr-3 noselect'>Willing to submit to a background check?</Label>
          <CustomInput type='switch' id='background' name='background' />
        </FormGroup>
        <Button color='primary' block>Submit Application</Button>
      </Form>
    )
  }
}

export default PraetorianApplication
