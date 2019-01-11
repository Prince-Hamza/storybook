import firebase from 'firebase'
import './Styles/Login.css'
import React, { Component } from 'react';

class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            LoginInfo:[],
            F:false
         };     

       

    }

    Login = () => {        

            var provider = new firebase.auth.GoogleAuthProvider();
        
           return firebase.auth().signInWithPopup(provider).then((result) =>  {
                var token = result.credential.accessToken;
                // Userinfo = result.user;

                this.setState({LoginInfo:result.user,F:true})
                this.props.OnComplete(this.state.LoginInfo)
        
               // console.log(JSON.stringify(Userinfo))
        
           //          
            
              }).catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // // The email of the user's account used.
                // var email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                // ...
              });
        
    }


    render() {
       
        return (
            <div>
     <img onClick ={()=>{this.Login()}} id = 'GoogleLogin' src = 'https://i.stack.imgur.com/XzoRm.png' />
            </div>
            
        );
    }
}

export default GoogleLogin;


