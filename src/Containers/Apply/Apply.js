import { React, Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import api from '../../api.js'
import Loader from '../../UI/Loader/Loader'
import BackButton from '../../Components/BackButton/BackButton'

class Apply extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false
  }

  applyHandler = event => {
    event.preventDefault()
    alert('hi')
    this.setState({ loading: true })
    const { name, email, password } = this.state
    api.post('/user', {
      name: 'Starlight',
      email: 'starlight@starlight.com',
      password: 'password',
    }).then(response => {
      console.log(response.data)
      this.setState({ loading: false })
      this.props.history.push('/confirmation')
    }).catch(error => {
      this.setState({ loading: false })
    })
  }

  render () {
    let form = (
      <Form color='primary'>
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
            <option>2</option>
          </Input>
        </FormGroup>
        <Button onClick={this.applyHandler}>Apply</Button>
      </Form>
    )

    if (this.state.loading === true) {
      form = <Loader />
    }
    
    return (
      <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
        <BackButton />
        <Row className='w-100'>
          <Col md='6'>
            {form}
          </Col>
          <Col md='6' className='text-center'>
            <h1 className='text-white display-3'>APPLY</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Apply
