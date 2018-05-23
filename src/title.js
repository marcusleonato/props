'use strict'

import React from 'react'

const Title = ({name, lastName}) => (
  <h1>Olá {`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem Sobrenome'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastName: 'Sem Sobrenome'
//     }
//   },
//   render: function () {
//     return (
//       <h1>Ola {this.props.name + ' ' + this.props.lastName}!</h1>
//     )
//   }
// })

export default Title
