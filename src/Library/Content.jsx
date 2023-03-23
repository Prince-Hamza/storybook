import React, { Component } from 'react';
import './Styles/Why.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import Chatbox2 from './Chatbox2'
import 'react-bootstrap'
import Event from  './Event'


class Content extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            active:0,
            Choosen:[]
        }

      
    }
      
Open_Command (FE){
    Where = EmptySpace
    if(HowMany === 1 && Where === 300 ){Where = 850}
    if(HowMany === 1 && Where === 850) {Where = 300}
    HowMany++;
    this.setState({
        Choosen : this.props.Data,
        active: this.state.active + 1
                 }) 

}

OCFEC = (DFE) =>{ // open command from event comp

    Where = EmptySpace
    if(HowMany === 1 && Where === 300 ){Where = 850}
    if(HowMany === 1 && Where === 850) {Where = 300}
    HowMany++;
    this.setState({
        Choosen :DFE, // data from event comp
        active: this.state.active + 1
                 }) 

}

Toggle = (empty) => {

    EmptySpace = empty
    HowMany -= 1    
    this.setState({active:this.state.active - 1})

}

Initialized = () =>{

}
    render() {    
        if (this.props.Data){
            var i = firebase.auth().currentUser.uid           
            if (this.props.Data.ID == i){MyInfo = this.props.Data}
                return (
                    <div> 

{this.props.Launch && <Event init = {this.OCFEC} />}
{this.state.active === 1  && <Chatbox2 Me = {MyInfo} Partner = {this.state.Choosen} Toggle ={this.Toggle} Left = {Where}   /> }
{this.state.active === 2  && <Chatbox2 Me = {MyInfo} Partner = {this.state.Choosen} Toggle ={this.Toggle} Left = {Where}  /> }

                 <div className = 'Y' >
                    { this.state.Online && <div id = 'GreenCircle' className = 'rounded-circle'  /> }
                     <p className ='name' >{this.props.Data.Name}</p>
                     <img id = 'pic' className ='rounded-circle' src = {this.props.Data.Photo} />
                     <button className = 'msgbtn'  onClick = {()=>{

                         this.Open_Command()     
      
                         }} >  message </button>
                        </div>                                                                       
                  </div>            
                );         
        }                   
         return(<p></p>)    
    }}
export default Content;

var MyInfo = []
var HowMany = 0
var Where 
var EmptySpace = 850




