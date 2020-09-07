import React, {Component} from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './components/layout/AppBar'
import Footer from './components/layout/Footer'
import Intro from './components/Intro'
import Mission from './components/Mission'
import Donate from './components/Donate'
import Impact from './components/Impact'
import VolunteerInfo from './components/VolunteerInfo'
import './App.css'

class App extends Component{
  render(){
    return(
      <Router>
        <div className = "App">
          <div className = "container">
            <AppBar />
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <Intro />
                <Mission />
                <Impact />
                <Donate />
              </React.Fragment>
            )} />
            <Route path = "/get-involved" render = {props =>(
              <React.Fragment>
                <VolunteerInfo />
                <Donate />
              </React.Fragment>
            )} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}


export default App;