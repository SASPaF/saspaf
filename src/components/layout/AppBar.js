import React, { Component } from 'react'

export class AppBar extends Component {
    render() {
        return (
            <div id="navbar">
                <div id="nav-container">
                    <div className="left">
                        <div className="nav-link" id="nav-logo">
                            <img src="require('@/assets/logo.png')" height="80px" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav-link">
                            <a href = "#" className="left-animate">Home</a>
                        </div>
                        <div className="nav-link">
                            <a href="#" className="left-animate">Our Services</a>
                        </div>
                        <div className="nav-link">
                            <a href="#" className="left-animate">Get Involved</a>
                        </div>
                        <div className="nav-link">
                            <a href="#" className="left-animate">Contact</a>
                        </div>
                        <div className="nav-link">
                            <a href="#" className="left-animate">Blog</a>
                        </div>
                        <div className="nav-link">
                            <button id="donate-btn-nav" className="button">DONATE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBar
