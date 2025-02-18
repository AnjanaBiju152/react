import React, { Component } from 'react'

export default class Random extends Component {
    constructor(){
        super();
        this.state={
            carName:"POLO"
        }
    }
  changeCar(name){

  
        this.setState({carName:name})
    }
  render() {
<>
<h2>my car </h2>
<h3>car: {this.state.carName} </h3>
<button onClick={()=>this.changeCar("Swift")}>Change car</button>
</>
    return (
      <div>Random</div>
    )
  }
}
