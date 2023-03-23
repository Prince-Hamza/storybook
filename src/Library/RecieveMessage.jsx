import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/ChatStyle.css'
 import $ from 'jquery'



class RecieveMessage extends Component {

    constructor(props) {

        super(props);
        this.state = {
            Message : [] ,
            Complete : false
        }
        if (this.props.Convo){
            firebase.database()
            .ref( 'chats/' + this.props.Convo + '/messages' )
            .limitToLast(1).on('child_added' , (x) =>{                                
                var data = x.val()
                this.setState({ 
                     Message:data
                        })                        
                    }) }       
            }

    
            Jquery(x,Message) {                
                $("#" + this.props.Convo).append("  <div> " +                                                           
               " <div class = 'msgdiv' >" +
                  "  <img id = 'Msgfaces' class = 'rounded-circle' src = " + x + " ></img>" +
                   " <p class = 'msgtexts' > " + Message.says + "</p> " +
                  "  <br></br> "  +                                            
                   "  </div>  "  +                                                 
                " </div> " )                                
            } 
 
            
    render() {    

        if(this.state.Message){   

            $("#" + this.props.Convo).animate({ scrollTop: 7000 }, 1000); 

            if (this.state.Message.By == this.props.User1.ID ){
                x = this.props.User1.Photo
                this.Jquery(x ,this.state.Message)
            } else {
                x = this.props.User2.Photo
                this.Jquery(x ,this.state.Message)
            }                       
        }

        return (
        <div>
        </div>            
        );
    }
}

export default RecieveMessage;
var MyArray = []
var C = 0;
var x



