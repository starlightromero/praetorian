import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import classes from './LoginForm.module.css'
import Loader from '../../UI/Loader/Loader'

class LoginForm extends Component {
  state = {
    loginForm: {
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
        validText: 'Your email address is valid',
        invalidText: 'Please enter a valid email address',
        touched: false
      },
      password: {
        type: 'password',
        display: 'Password',
        name: 'password',
        placeholder: 'Enter your password',
        value: '',
        validation: {
          required: true,
          minLength: 8,
          maxLength: 20,
        },
        validText: 'Your password is valid',
        invalidText: 'Password must be between 8 and 20 characters',
        valid: false,
        touched: false
      },
    },
    formIsValid: false,
    loading: false
  }

  loginHandler = event => {
    event.preventDefault()
    alert('complete')
  }

  checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
      return true
    }
    if(rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      isValid = pattern.test(value) && isValid
    }

    return isValid
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm
    }
    const updatedFormElement = {
      ...updatedLoginForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedLoginForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid
    }
    this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid})
  }


  render () {
    const formElementsArray = []
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      })
    }

    let form = (
      <Form className={classes.Form} onSubmit={this.loginHandler}>
      {formElementsArray.map(formElement => {
        let feedback = (
          <FormText>
            {formElement.config.invalidText}
          </FormText>
        )
        if (formElement.config.valid) {
          feedback = (
            <FormFeedback valid>
              {formElement.config.validText}
            </FormFeedback>
          )
        } else if (!formElement.config.valid && formElement.config.touched) {
          feedback = (
            <FormFeedback invalid>
              {formElement.config.invalidText}
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
              invalid={formElement.config.touched ? !formElement.config.valid : false}
              onChange={event => this.inputChangedHandler(event, formElement.id)} />
            {feedback}
          </FormGroup>
        )})}
        <Button
          block
          color='primary'
          onClick={this.loginHandler}
          disabled={!this.state.formIsValid}>
          Login
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

export default LoginForm
