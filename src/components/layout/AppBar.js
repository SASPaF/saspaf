import React, { Component } from 'react'
import '../styles/AppBar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

export class AppBar extends Component {
    render() {
        return (
            <div id="navbar">
                <div id="nav-container">
                    <div className="left">
                        <div className="nav-link" id="nav-logo">
                            <img src={logo} style={{height: '80px'}}/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav-link">
                            <Link className = "left-animate" to = "/">Home</Link>
                        </div>
                        <div className="nav-link">
                            <a href="#" className="left-animate">Our Services</a>
                        </div>
                        <div className="nav-link">
                            <Link className = "left-animate" to = "/get-involved">Get Involved</Link>
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
