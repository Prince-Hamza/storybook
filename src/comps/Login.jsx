import React, { Component } from 'react';
import firebase from 'firebase'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    iLogin = () => {        

        var provider = new firebase.auth.GoogleAuthProvider();
    
       return firebase.auth().signInWithPopup(provider).then((result) =>  {
            var token = result.credential.accessToken;

            this.setState({LoginInfo:result.user,F:true})
            this.props.OnComplete(this.state.LoginInfo) 
        
          }).catch(function(error) {
            // var errorCode = error.code;
            // var errorMessage = error.message;          
          });
    
}
    render() {
        return (
           <div>
               <p id = 'pe' >Email or Phone</p>
               <input  className = 'LoginInput' id = 'Password' ></input>
               <p id='pp' >Password</p>
               <input className = 'LoginInput' id = 'Email' ></input>
               <button id = 'Login' onClick = {()=>{this.iLogin()}} >Login</button>
           </div> 
        );
    }
}

export default Login;