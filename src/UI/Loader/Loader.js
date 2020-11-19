import React from 'react'
import classes from './Loader.module.css'

const Loader = () => (
  <div className='container'>
    <div className='row'>
      <div className={`${classes.RippleContainer} ${classes.RippleBackground}`}>
        <span className={`${classes.Ripple} ${classes.RippleBackground}`} />
        <span className={`${classes.Ripple} ${classes.RippleBackground}`} />
        <span className={`${classes.Ripple} ${classes.RippleBackground}`} />
      </div>
    </div>
  </div>
)

export default Loader
