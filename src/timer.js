'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }
  shouldComponentUpdate (nextProps, nextState) {
    //console.log('shouldComponentUpdate tiner', this.state, nextState)
    return this.state.time !== nextState.time
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }
  componentDidMount (nextProps, nextState) {
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', prevProps, prevState)
  }
  componentWillMount () {
    clearInterval(this.timer)
  }
  render () {
    return <div> Timer: {this.state.time}</div>
  }
}

export default Timer
