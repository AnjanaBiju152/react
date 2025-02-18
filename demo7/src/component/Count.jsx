import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    incrementCount=()=>{
        this.setState((prevCount)=>({
            count: prevCount.count+1
        }))
    }
  render() {
    return (
      <>
      <h1>Counter</h1>
      <h2>Count:{this.state.count}</h2>
      <button onClick={this.incrementCount}>Increment</button>
      </>
    )
  }
}
