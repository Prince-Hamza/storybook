import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class PostButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }

    Push = () =>{
      
       alert(this.props.ImageURL)
       alert(this.props.iText)
         firebase.database().ref('users/' + this.props.Key + '/Timeline')
         .push({
            Text:this.props.iText,
            Image:this.props.ImageURL
           })
           
           alert('Posted Successfully Refresh to see changes') 

    }


    render() {
        return (
            <div>
                
  <div id = 'final' >
  <button id = 'postbtn'  onClick ={(e)=>{ this.Push() }} >Post</button>

  </div>  

            </div>
            
        );
    }
}

export default PostButton;
