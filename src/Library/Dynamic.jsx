import React, { Component } from 'react';
import './Styles/Dynamic.css'
import Content from  './Content'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import Convolist from './Convolist'
import ChatEngine from './ChatEngine'


class Dynamic extends Component {

    componentDidMount() {
        
       // var App = new ChatEngine
      /// App.Set_Initial_Structure()

       
     
  
              
    }

    constructor() {
         super()          
      this.state = {
          Info:Arrayi,
          Complete:false,
          Render:false
        };
        firebase.database().ref('users')
        .once('value').then((users)=>{
            users.forEach((user)=>{
                Arrayi.push(user.val())
            })
            this.setState({
                Complete:true,
                Info:Arrayi
            })
        })                  
    }
           
    render() { 
        if (this.state.Complete){                                
      return(<div> 
          <Convolist Data = {Arrayi}  /> 
        {this.state.Info.map(i => { k++
           
          if (F == false){n += 300;LaunchEvent = false}  if (F == true){F = false;LaunchEvent = true}   
             return(<div style = {{'top' : n  }}  className = 'Dynamic'  key = {k}  >
               <Content Data = {i} Command = {this.state.Render} Launch = {LaunchEvent} />
               
             </div> )
        })}
       
    </div>
)}
     return(<p>

     </p>)
    
    }}

export default Dynamic;
var n = 30 , k = 0;
var F = true
var Arrayi = []
var LaunchEvent 
