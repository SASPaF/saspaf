import React, {Component} from 'react';
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "pages/Home"
import GetInvolved from "pages/GetInvolved";
import AboutUs from "pages/About";
import BlogPage from "pages/Blog";
import OurTeam from "pages/OurTeam"
import ContactUs from "pages/Contact";
import{ BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{
  render() {
    return (
        <Router>
          <div className = "App">
            <div className = "container">
              <Route exact path = "/" render = {props => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )} />
              <Route path = "/about" render = {props => (
                <React.Fragment>
                  <AboutUs />
                </React.Fragment>
              )} />
              <Route path = "/get-involved" render = {props => (
                <React.Fragment>
                  <GetInvolved />
                </React.Fragment>
              )} />
              <Route exact path = "/blog" render = {props => (
                <React.Fragment>
                  <BlogPage />
                </React.Fragment>
              )} />
              <Route path = "/our-team" render = {props => (
                <React.Fragment>
                  <OurTeam />
                </React.Fragment>
              )} />
              <Route exact path = "/contact" render = {props => (
                <React.Fragment>
                  <ContactUs />
                </React.Fragment>
              )} />
            </div>
          </div>
        </Router>
    )
  }
}

export default App;
