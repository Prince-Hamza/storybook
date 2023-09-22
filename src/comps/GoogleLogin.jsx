import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/Login.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'

class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginInfo:[],
            F:false,
            profileLink:undefined
         };



    }

     Login = () => {

            var provider = new firebase.auth.GoogleAuthProvider();

           return firebase.auth().signInWithPopup(provider).then((result) =>  {
                //var token = result.credential.accessToken;
                var Userinfo = result.user;
                var i = firebase.auth().currentUser.uid
                var x = result.additionalUserInfo.isNewUser;
                if(x){
                    firebase.database().ref('users/' + i).set({
                        ID:i,
                        Name: Userinfo.displayName,
                        Photo:Userinfo.photoURL,
                        Online:true
                    })
                }

                this.setState({LoginInfo:Userinfo,F:true})

                if (Userinfo) {
                  // console.log(JSON.stringify(Userinfo))
                  // alert('google login successful')
                  // this.props.OnComplete(Userinfo)
                 this.setState({...this.state , profileLink:`/profile/${Userinfo.uid}` , })
                 let link = document.getElementById('profile')

                 setTimeout(()=>{
                   link.click()
                 },1000)


                }

           //

              }).catch(function(error) {

                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                alert(`error : ${errorMessage}`)
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
                 
                 <nav id={'profileLink'} style={{display:'none'}} >
                     <Link id="profile" to={this.state.profileLink} >
                         Profile
                     </Link>
                 </nav>
            </div>
        );
    }
}

export default GoogleLogin;
