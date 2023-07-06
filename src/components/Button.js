import classes from './Button.module.css';

import React from 'react'

const Button = (props) => {
  return (
    <div className={`${classes.btn} ${props.className}`}>{props.description}</div>
  )
}

export default Button