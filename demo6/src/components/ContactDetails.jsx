import React, { Component } from 'react'

export default class ContactDetails extends Component {
  render() {
    return (
    
      <div>
        <h3>
            Contact Details
        </h3>
        { 
        this.props.firstName === 'anjana'?
        <div>
        <h5>Mobile:80897434</h5>
        <h5>Email:anjana@gmail.com</h5>
</div>:
        <h5>user dont want contact details</h5>
  }
      </div>
    
    )
  }
}
