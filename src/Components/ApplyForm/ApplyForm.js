import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
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
        validText: 'Your name has been approved',
        invalidText: 'Name cannot be empty',
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
        validText: 'Your email address is valid',
        invalidText: 'Please enter a valid email address',
        touched: false
      },
      password: {
        type: 'password',
        display: 'Password',
        name: 'password',
        placeholder: 'Enter a password',
        value: '',
        validation: {
          required: true,
          minLength: 8,
          maxLength: 20,
        },
        validText: 'The password has been approved',
        invalidText: 'Password must be between 8 and 20 characters',
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
        validText: '',
        invalidText: '',
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }

  applyHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const formData = {}
    for (let formElementIdentifier in this.state.applyForm) {
      formData[formElementIdentifier] = this.state.applyForm[formElementIdentifier].value
    }
    const { name, email, password, account } = formData
    api.post('/user', {
      name,
      email,
      password,
      account
    }).then(response => {
      console.log(response.data)
      this.setState({ loading: false })
      this.props.history.push('/confirmation')
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
              onChange={event => this.inputChangedHandler(event, formElement.id)}>
            {options}
            </Input>
            {feedback}
          </FormGroup>
        )})}
        <Button
          block
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
