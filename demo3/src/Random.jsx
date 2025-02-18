 import React, { Component } from 'react'

 class Random extends Component {
  render() {
    console.log("data from parent component");
    console.log(this.props)
    console.log(this.props.userMessage)
    
    
    
    return (
      <>
     
      <div>Random</div>
      {/* render dymanic data send from parent component */}
      <h3>{this.props.userMessage}</h3>
      <h3>
      
      </h3>
      </>
    )
  }
}
export default Random;