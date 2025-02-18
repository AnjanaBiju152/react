import React, { Component } from 'react'

export default class Usertype extends Component {
    render() {
        return (
            <>
                <h3>User Type</h3>
                {
                    this.props.userage >= 18 ?
                        <h4>user is minor</h4> :
                        <h4>user is major</h4>

                }
            </>
        )
    }
}
