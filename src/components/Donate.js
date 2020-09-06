import React, { Component } from 'react'

export class Donate extends Component {
    render() {
        return (
        <div id="donate">
            <div id="donate-content">
                <h1>Pay it forward.</h1>
                <br />
                <p>
                    Your generous, tax-deductible donation will be used to support our
                    services and effort to make a difference in the lives of single parents.
                </p>
                <br />
                <button className="button" id="donate-btn">DONATE NOW</button>
            </div>
        </div>
        )
    }
}

export default Donate
