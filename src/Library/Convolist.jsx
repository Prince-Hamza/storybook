import React, { Component } from 'react';
import 'react-bootstrap'
import './Styles/Convolist.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import Chatbox2 from './Chatbox2'

class Convolist extends Component {
    constructor (props){
        super(props)
        this.state = {
            Complete : false,
            active : 0
          }
        alert('convolist')

        var i = firebase.auth().currentUser.uid
        if(this.props.Data){
            firebase.database()
            .ref('users/' + i + '/inbox')
            .once('value' , (x) => {
                x.forEach((n)=>{
                    var V = n.val()
                    this.props.Data.map(user => {
                        if(user.ID === V.Partner) {
                            iArray.push(user)
                        } 
                        if(user.ID === i){MyInfo = user}                  
                    })
                })
                this.setState({Complete:true})
            })
        }       
    }

    Open_Command = (i) => {
        
        Top = -20
        Where = EmptySpace
        if(HowMany === 1 && Where === 300 ){Where = 850}
        if(HowMany === 1 && Where === 850) {Where = 300}
        HowMany++;
        alert(this.state.active)
       if(this.state.active === 1){
          this.setState({active:this.state.active - 1}) }
        this.setState({
            Choosen : this.props.Data,
            active: this.state.active + 1
                     }) 
    
    }

    Toggle = (empty) => {

        EmptySpace = empty
        alert(EmptySpace)
        HowMany -= 1    
        this.setState({active:this.state.active - 1})
    
    }
  
    render() {
        if(this.state.Complete){
            return (
                <div>
                    {this.state.active === 1  && <Chatbox2 Me = {MyInfo} Partner = {Selected} Toggle ={this.Toggle} Left = {Where}   /> }
                    {this.state.active === 2  && <Chatbox2 Me = {MyInfo} Partner = {Selected} Toggle ={this.Toggle} Left = {Where}   /> }
                    <div className = 'unique' >               
                   {iArray.map(i=> {
                        Top += 50;    
                        return(
                            <div key = {Top}>                          
                            <div style = {{top:Top}} className = 'Slide' >
                            <img onClick = {()=>{Selected = i;}} src = {i.Photo} id = 'abc' className = 'rounded-circle' ></img>
                            <p onClick = {() =>{Selected = i;this.Open_Command()}}  className = 'Pname' >{i.Name}</p>
                            </div>
                            </div>
                        )                       
                    })}
    
                   </div>           
                </div>
                
            );
            
        }

        return(<p></p>)
    
    }
}

export default Convolist ;

var Where,HowMany = 0,EmptySpace = 850
var iArray = []
var Top = 30
var Selected
var MyInfo 