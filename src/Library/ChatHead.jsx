import React, { Component } from 'react';
import './Styles/ChatStyle.css'
import 'react-bootstrap'
import './Styles/Chathead.css'

class ChatHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Online:[]
          };
    }
    render() {
        if (this.props.data){

            return (
                <div>
        
        <div className = 'Header' >         
        <img className= 'rounded-circle' id = 'image' src = {this.props.data.Photo} />        
        <h3 id = 'name' > {this.props.data.Name} </h3>  
        <img onClick ={()=>{this.props.hideme()}} id ='cross'  src = 'https://img.icons8.com/metro/1600/delete-sign.png' />              

        </div>                   
                </div>            
                );

        }

    }
}

export default ChatHead;