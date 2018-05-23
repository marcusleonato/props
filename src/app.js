'use strict'

import React, {Component} from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('contructor')
    super()
    this.state = {
      color: 'green',
      showTimer: true,
      time: 0
    }
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer timer={this.state.time} />}
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props</button>
      </div>
    )
  }
}

export default App
