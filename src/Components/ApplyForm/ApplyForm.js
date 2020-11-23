import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import classes from './ApplyForm.module.css'
import api from '../../api.js'
import Loader from '../../UI/Loader/Loader'

class ApplyForm extends Component {
  state = {
    applyForm: {
      name: {
        type: 'text',
        display: 'Name',
        name: 'name', 
        placeholder: 'Enter your name',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        type: 'email',
        display: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        type: 'password',
        display: 'Password',
        name: 'password',
        placeholder: 'Enter your password',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      account: {
        type: 'select',
        display: 'Account Type',
        name: 'account',
        options: [
          {value: 'praetorian', display: 'Praetorian'},
          {value: 'executive', display: 'Executive'},
        ],
        value: 'praetorian',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }

  applyHandler = event => {
    event.preventDefault()
    alert('complete')
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

  checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
      return true
    }
    if(rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      isValid = pattern.test(value) && isValid
    }

    return isValid
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedApplyForm = {
      ...this.state.applyForm
    }
    const updatedFormElement = {
      ...updatedApplyForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedApplyForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedApplyForm) {
      formIsValid = updatedApplyForm[inputIdentifier].valid && formIsValid
    }
    this.setState({applyForm: updatedApplyForm, formIsValid: formIsValid})
  }
  
  render () {
    const formElementsArray = []
    for (let key in this.state.applyForm) {
      formElementsArray.push({
        id: key,
        config: this.state.applyForm[key],
      })
    }
    
    let form = (
      <Form className={classes.Form} onSubmit={this.applyHandler}>
      {formElementsArray.map(formElement => {
        let options = null
        
        if (formElement.config.type === 'select' && formElement.config.options) {
          options = formElement.config.options.map(option => (
            <option value={option.value}>{option.display}</option>
          ))
        }

        let feedback = (
          <FormFeedback invalid>
            Oh no! that name is not available
          </FormFeedback>
        )
        if (formElement.config.valid) {
          feedback = (
            <FormFeedback valid>
              Sweet! that name is available
            </FormFeedback>
          )
        }

        return (
          <FormGroup>
            <Label for={formElement.config.name} className='text-grey'>
              {formElement.config.display}
            </Label>
            <Input
              key={formElement.id}
              type={formElement.config.type}
              value={formElement.config.value}
              placeholder={formElement.config.placeholder}
              valid={formElement.config.valid}
              invalid={!formElement.config.valid}
              onChange={event => this.inputChangedHandler(event, formElement.id)}>
            {options}
            </Input>
            {feedback}
          </FormGroup>
        )})}
        <Button
          color='primary'
          onClick={this.applyHandler}
          disabled={!this.state.formIsValid}>
          Apply
        </Button>
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
