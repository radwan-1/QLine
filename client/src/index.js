import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import User from './Components/User.jsx';
import * as serviceWorker from './serviceWorker';
import Business from './component/business.jsx';
import creatQueue from './component/creatQueue.jsx';
import Profile from './Components/Profile.jsx';
import { Router, Route, browserHistory } from 'react-router';
import Login from './popLogin.js';
import SignUp from './popSignUp.js';
import BusinessQueue from './component/businessQueue.jsx';
import BusinessGridList from './component/businessGridList.jsx';
import Loading from './Loading.js';
import CreatQueue from './component/creatQueue.jsx';
import BusinessDashBord from './component/businessDashBord.jsx';
import HowItWorks from './HowItWorks.jsx';
import ContactUs from "./ContactUs.jsx";
import AdminDash from './AdminDashboard.jsx'

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="/sign-in" exact component={Login} />
              <Route path="/sign-up" exact component={SignUp} />
            </Route>
              <Route path="/profile" exact component={Profile} />
              <Route path="/business" exact component={Business} />
              <Route path="/user" exact component={User} />
              <Route path="/CreatQueue" exact component={CreatQueue} />
              <Route path="/BusinessDashBord/:queue_id" exact component={BusinessDashBord} />
              <Route path="/ContactUs" exact component={ContactUs} />
        </Router>
      );
    }
  }

ReactDOM.render(<Loading/>, document.getElementById('root'));
setTimeout(()=>{

ReactDOM.render(<AdminDash/>, document.getElementById('root1'));

},5000);
// setTimeout(()=>{
//   window.responsiveVoice.speak("Welcome to Q Line........ How can I Help you?")
// }, 5000)

