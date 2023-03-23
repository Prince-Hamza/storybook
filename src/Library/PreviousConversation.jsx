import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/ChatStyle.css'
 import $ from 'jquery'



class Conversation extends Component {
    
componentDidMount() {

    setTimeout(()=>{
      
        $("#" + this.props.Convo).animate({ scrollTop: 70000 }, 1000); 

    },1000)
    

}
    constructor(props) {
        super(props);
        this.state = {
            Messages : [] ,
            Complete : false
        }
        if (this.props.Convo){
            //alert( 'pc: ' + this.props.Convo)
            firebase.database()
            .ref( 'chats/' + this.props.Convo + '/messages' )
            .once('value').then((Json)=>{

                var State = Json.val() || 'Anonym'
                if(State !== 'Anonym'){
                    Json.forEach((x)=>{     
                        var v = x.val()  
                        //alert(JSON.stringify(v))             
                        MyArray.push(v)
                        this.setState({Messages:MyArray})                                                       
                 })
                 this.setState({ 
                    Complete:true 
                 })
                }
                            
                           
            })            
        }

    
        
        
    }
    render() {

        if(this.state.Complete){          
          
            return (
                <div>
                    {this.state.Messages.map(Message=>{   k++                                                                 
                             if (Message.By == this.props.User1.ID ){
                                 x = this.props.User1.Photo
                             } else {
                                 x = this.props.User2.Photo
                             }                 
                        return(
                        <div key = {k} className = 'msgdiv' >
                           <img id = 'Msgfaces' className = 'rounded-circle' src = {x} ></img>
                           <p className = 'msgtexts' >{Message.says}</p> 
                           <br></br>      <br></br>                                              
                        </div>
                            )
                    })}
                            
                </div>            
                );
        }

        return (
        <div>

        </div>            
        );
    }
}

export default Conversation;
var MyArray = []
var C = 0;
var x , k = 1
