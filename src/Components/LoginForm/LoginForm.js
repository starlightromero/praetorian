import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import classes from './LoginForm.module.css'
import api from '../../api.js'
import Loader from '../UI/Loader/Loader'

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
    this.setState({ loading: true })
    const formData = {}
    for (let formElementIdentifier in this.state.loginForm) {
      formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value
    }
    const { email, password } = formData
    api.post('/login', {
      email,
      password
    }).then(response => {
      console.log(response.data)
      this.setState({ loading: false })
      this.props.history.push('/account')
    }).catch(error => {
      this.setState({ loading: false })
    })
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
          <FormText key={`text-${formElement.id}`}>
            {formElement.config.invalidText}
          </FormText>
        )
        if (formElement.config.valid) {
          feedback = (
            <FormFeedback valid key={`valid-${formElement.id}`}>
              {formElement.config.validText}
            </FormFeedback>
          )
        } else if (!formElement.config.valid && formElement.config.touched) {
          feedback = (
            <FormFeedback invalid key={`invalid-${formElement.id}`}>
              {formElement.config.invalidText}
            </FormFeedback>
          )
        }

        return (
          <FormGroup key={`group-${formElement.id}`}>
            <Label
              key={`label-${formElement.id}`}
              for={formElement.config.name}
              className='text-grey'>
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
