import React, { Component } from 'react'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>
            <div className="footer-container scew">
              <div className="left-col">
                <p>
                  Our mission is to empower the lives of single parent families around
                  the nation.
                  <br /><br />
                  SASPAF is a non-profit organization.
                  <a href="#">Donate</a> or <a href="#">volunteer</a> with us!
                </p>
                <div className="social-media">
                  <a href="https://www.facebook.com/saspaf/"><i className="fab fa-facebook-f button" /></a>
                  <a href="#"><i className="fab fa-twitter button" /></a>
                  <a href=" https://www.instagram.com/saspaf/"><i className="fab fa-instagram button" /></a>
                  <a href="#"><i className="fab fa-linkedin-in button" /></a>
                  <a href="https://greatnonprofits.org/org/support-and-assistance-for-single-parent-families"><i className="fa fa-gratipay button" aria-hidden="true" /></a>
                </div>
              </div>
              {/*div containing links to above pages*/}
              <div className="mid-col">
                <ul id="footer-links">
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/">Our Services</Link></li>
                  <li><Link to = "/get-involved">Get Involved</Link></li>
                  <li><Link to = "/">Contact</Link></li>
                  <li><Link to = "/">Blog</Link></li>
                </ul>
                <ul id="footer-details">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Volunteer</a></li>
                  <br />
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">View Reports</a></li>
                </ul>
              </div>
              {/*div containing newsletter sign up*/}
              <div className="right-col" id="newsletter">
                <h1>Keep in touch with us!</h1>
                <form id="contact-form">
                  <input id="email-field" type="email" name="email" placeholder="Email address" autoComplete="off" />
                  <input className="button" id="submit-contact" type="submit" defaultValue="Join" />
                </form>
              </div>
            </div>
            <div id="rights-text">
              © 2020 Support and Assistance for Single Parent Families | Designed
              and developed by Kevin Lan, Tony Xin, &amp; Caleb Kim
            </div>
          </div>
        )
    }
}

export default Footer
