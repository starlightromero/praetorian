import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
  FormText,
  FormFeedback
} from 'reactstrap'
import classes from './PraetorianApplication.module.css'
import Loader from '..//UI/Loader/Loader'
import api from '../../api'

class PraetorianApplication extends Component {
  state = {
    applicationForm: {
      experience: {
        type: 'range',
        display: 'Experience',
        name: 'experience',
        placeholder: '',
        value: '',
        step: '1',
        min: '0',
        max: '10',
        className: 'custom-range',
        validation: {},
        valid: true,
        validText: '',
        invalidText: '',
      },
      phone: {
        type: 'tel',
        display: 'Phone',
        name: 'phone',
        placeholder: 'Enter your phone number',
        value: '',
        validation: {
          required: true,
          isPhone: true
        },
        validText: 'Your phone is valid',
        invalidText: 'Enter a valid phone number',
        valid: false,
        touched: false
      },
      address: {
        type: 'text',
        display: 'Address',
        name: 'address',
        placeholder: 'Enter your address',
        value: '',
        validation: {
          required: true,
        },
        validText: 'Your address is valid',
        invalidText: 'Enter a valid address',
        valid: false,
        touched: false
      },
      city: {
        type: 'text',
        display: 'City',
        name: 'city',
        placeholder: 'Enter your city',
        value: '',
        validation: {
          required: true,
        },
        validText: 'Your city is valid',
        invalidText: 'Enter a valid city',
        valid: false,
        touched: false
      },
      state: {
        type: 'text',
        display: 'State',
        name: 'state',
        placeholder: 'Enter your state',
        value: '',
        validation: {
          required: true,
          minLength: 2,
          maxLength: 2
        },
        validText: 'Your state is valid',
        invalidText: 'Enter a valid state',
        valid: false,
        touched: false
      },
      travel: {
        type: 'switch',
        display: 'Willing to travel?',
        name: 'travel',
        placeholder: '',
        value: 'off',
        validation: {},
        validText: '',
        invalidText: '',
        valid: true,
      },
      background: {
        type: 'switch',
        display: 'Willing to submit to a background check?',
        name: 'background',
        placeholder: '',
        value: 'off',
        validation: {},
        validText: '',
        invalidText: '',
        valid: true,
      },
    },
    formIsValid: false,
    loading: false
  }

  applicationHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const formData = {}
    for (let formElementIdentifier in this.state.applicationForm) {
      formData[formElementIdentifier] = this.state.applicationForm[formElementIdentifier].value
    }
    const { experience, phone, address, city, state, travel, background } = formData
    const id = this.props.match.params.id
    api.patch('/praetorian', {
      id,
      experience: +experience,
      phone: +phone,
      address,
      city,
      state,
      travel: travel === 'on' ? true : false,
      background: background === 'on' ? true : false
    }).then(res => {
      console.log(res)
      this.setState({ loading: false })
      this.props.history.push('/confirmation')
    }).catch(err => {
      console.log(err)
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
    if (rules.isPhone) {
      const pattern = /[0-9]{10}/
      isValid = pattern.test(value) && isValid
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      isValid = pattern.test(value) && isValid
    }

    return isValid
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedApplicationForm = {
      ...this.state.applicationForm
    }
    const updatedFormElement = {
      ...updatedApplicationForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedApplicationForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedApplicationForm) {
      formIsValid = updatedApplicationForm[inputIdentifier].valid && formIsValid
    }
    this.setState({applicationForm: updatedApplicationForm, formIsValid: formIsValid})
  }

  render () {
    const formElementsArray = []
    for (let key in this.state.applicationForm) {
      formElementsArray.push({
        id: key,
        config: this.state.applicationForm[key],
      })
    }

    let form = (
      <Form className={classes.Form} onSubmit={this.applyHandler}>
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

        if (formElement.config.type === 'switch') {
          return (
            <FormGroup className='form-inline' key={`group-${formElement.id}`}>
              <Label
                key={`label-${formElement.id}`}
                for={formElement.config.name}
                className='mr-3 noselect'>
                {formElement.config.display}
              </Label>
              <CustomInput
                key={formElement.id}
                type={formElement.config.type}
                id={formElement.config.name}
                name={formElement.config.name}
                onChange={event => this.inputChangedHandler(event, formElement.id)} />
            </FormGroup>
          )
        }

        if (formElement.config.type === 'range') {
          return (
            <FormGroup key={`group-${formElement.id}`}>
              <Label for={formElement.config.name} key={`label-${formElement.id}`}>
                {formElement.config.display}
              </Label>
              <CustomInput
                key={formElement.id}
                step={formElement.config.step}
                min={formElement.config.min}
                max={formElement.config.max}
                type={formElement.config.type}
                className='custom-range'
                id={formElement.config.name}
                onChange={event => this.inputChangedHandler(event, formElement.id)} />
            </FormGroup>
          )
        }

        return (
          <FormGroup key={`group-${formElement.id}`}>
            <Label
              key={`label-${formElement.id}`}
              for={formElement.config.name}>
              {formElement.config.display}
            </Label>
            <Input
              key={formElement.id}
              id={formElement.id}
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
          onClick={this.applicationHandler}
          disabled={!this.state.formIsValid}>
          Submit Application
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

export default PraetorianApplication
