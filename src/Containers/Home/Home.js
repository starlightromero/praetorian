import React from 'react'
import classes from './Home.module.css'
import Heading from '../../Components/Heading/Heading'
import Features from '../../Components/Features/Features'

const Home = () => {
  return (
    <div className={classes.Home}>
      <Heading />
      <Features />
    </div>
  )
}

export default Home
