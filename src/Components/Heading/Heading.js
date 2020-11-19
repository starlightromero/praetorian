import React from 'react'
import classes from './Heading.module.css'
import { Jumbotron, Container, Button } from 'reactstrap'

const Heading = props => {
  return (
    <div className={classes.Heading}>
      <Jumbotron fluid className={classes.Jumbotron}>
        <Container fluid className='text-center'>
          <div className={classes.TextBox}>
            <h1 className='display-3'>Praetorian</h1>
            <p className='lead text-primary'>In a busy world protect what matters most - yourself.</p>
          </div>
          <Button color='primary'>Learn More</Button>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Heading
