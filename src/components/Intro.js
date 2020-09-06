import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (
            <div id="home">
                <div id="home-content">
                    <div id="home-text">
                        <h1>We are SASPAF.</h1>
                        <br />
                        <p>
                            Serving and empowering single parent families across the nation, one
                            service at a time.
                        </p>
                        <br />
                        <button id="home-btn" className="button">Learn More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
