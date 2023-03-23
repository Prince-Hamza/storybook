import React, { Component } from 'react';
// import './Styles/ChatStyle.css'
// import 'react-bootstrap'
import ChatHead from './ChatHead'
import Conversation from './PreviousConversation'
import FaceImages from './FaceImages';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import RecieveMessage from './RecieveMessage'
import ChatEngine from './ChatEngine'


class Chatbox2 extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            ConvoKey:false,
            MyProps:false,  
            active:true       
        }     

        if (this.props.Partner && !this.state.ConvoKey){ 
            var App = new ChatEngine
            var result
            App.FindKey(this.props.Me.ID , this.props.Partner.ID , result )
            .then((key)=>{
                alert(key)
                this.setState({ConvoKey:key})
            })

        } } 


 

 keyPress = (e) =>{
    if(e.keyCode === 13){ 
           var i = firebase.auth().currentUser.uid
           firebase.database().ref('chats/' + this.state.ConvoKey + '/messages')
           .push({
               By:i,
               says: e.target.value
           })
        }
 } 
 
Hidez = ()  => {
    this.props.Toggle(this.props.Left)
}
     render() {            

         if(this.state.ConvoKey) {  
              return (
                <div>
              <div style = {{left:this.props.Left}} className = 'Chatbox' >
              
              <ChatHead hideme = {this.Hidez}  data = {this.props.Partner} />
                    <div onClick = {()=>{alert(this.state.ConvoKey)}} className = 'ChatPad' id = {  this.state.ConvoKey } >
                    <br></br><br></br><br></br><br></br><br></br>
                    <FaceImages X = {this.props.Me} Y = {this.props.Partner} />
                    <Conversation Convo = {this.state.ConvoKey}  User1 = {this.props.Me} User2 = {this.props.Partner} />    
                    <RecieveMessage Convo = {this.state.ConvoKey} User1 = {this.props.Me} User2 = {this.props.Partner}  />
                    </div>                   
                    <input type = 'text' onKeyDown={this.keyPress} className= 'WritePad' placeholder = 'Type a Message Here'  />               
              </div> 
              </div>
               );   
         } return (<p></p>) }}

export default Chatbox2;
