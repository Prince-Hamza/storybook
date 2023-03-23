import React, { Component } from 'react';
import Main from './comps/Main.jsx'
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from './comps/Profile'
import Feed from './comps/Feed.jsx'
import Groups from './comps/Groups.jsx'
import Search from './comps/Search.jsx'
import Dynamic from '../src/Library/Dynamic.js'
import initialize from './comps/initialise'

import './App.css'


class App extends Component {
  componentDidMount() {
    initialize()
  }

  render() {
    return (
      <BrowserRouter>     
      <div className="App">    
 
        <Route exact path="/" component = {Main}  />

         <Route  exact path="/Profile/:id"  render = {(props)=>  <Profile {...props} />    }  />

        <Route  exact path="/Feed/:id"  render = {(props)=>  <Feed {...props} />    }  />

        <Route  exact path="/Groups/:id"  render = {(props)=>  <Groups {...props} />    }  />

        <Route  exact path="/Search/:id"  render = {(props)=>  <Dynamic {...props} />    }  />


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
