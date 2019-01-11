import React, { Component } from 'react';
import Main from './comps/Main.jsx'
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from './comps/Profile'
import Feed from './comps/Feed.jsx'
import Groups from './comps/Groups.jsx'
import Search from './comps/Search.jsx'
import Dynamic from '../src/Library/Dynamic.js'
import firebase from 'firebase'
import './App.css'


class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyABEcd6LanWp3JtR8Lc7cq_5-qWN1iSLTk",
      authDomain: "superchat-b7d5b.firebaseapp.com",
      databaseURL: "https://superchat-b7d5b.firebaseio.com",
      projectId: "superchat-b7d5b",
      storageBucket: "superchat-b7d5b.appspot.com",
      messagingSenderId: "534462431203"
    };
    firebase.initializeApp(config);   
  }

  render() {
    return (
      <BrowserRouter>     
      <div className="App">    
 
        <Route exact path="/" component = {Main}  />

         <Route  exact path="/Profile/:id"  render = {(props)=>  <Profile {...props} />    }  />

        <Route  exact path="/Feed/:id"  render = {(props)=>  <Feed {...props} />    }  />

        <Route  exact path="/Groups/:id"  render = {(props)=>  <Groups {...props} />    }  />

        <Route  exact path="/Search/:id"  render = {(props)=>  <Search {...props} />    }  />


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
