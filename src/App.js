import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li>Home</li>
            <li>GetInvolved</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home</h1>
         </div>
      )
   }
}
export default {App, Home};

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "Home" component = {Home} />
        <Route path = "Get Involved" component = {GetInvolved} />
     </Route>
  </Router>
), document.getElementById('app'))