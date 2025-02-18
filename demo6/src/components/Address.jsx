import React, { Component } from 'react'

export default class Address extends Component {
    render() {
        return (
            <>
            {
                this.props.isShow &&
                <div>
                    {/* styling using external css */}
                    <h3 className='details'>Address</h3>
                    <h5>Name:anjana</h5>
                    <h5>Email:Anjnan@gmail.com</h5>
                    <h5>House Name: palachira</h5>
                    <h5>Location:alappuzha</h5>
                    </div>

            }
                
            </>
        )
    }
}
