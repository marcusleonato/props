'use strict'

import React from 'react'

const Square = ({color}) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px',
    float: 'left'
  }} />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
