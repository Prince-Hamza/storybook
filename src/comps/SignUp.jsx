import React, { Component } from 'react';
import './Styles/Signup.css'
import FbLogin from './FbLogin';
import GoogleLogin  from './GoogleLogin'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {SmsAuth:false};
    }

    LoginFinish = (data) =>{
        this.props.move(data)
    }

    Login = () => {        

        var provider = new firebase.auth.GoogleAuthProvider();
    
       return firebase.auth().signInWithPopup(provider).then((result) =>  {
            var token = result.credential.accessToken;
            var Userinfo = result.user;
            var i = firebase.auth().currentUser.uid
            var x = result.additionalUserInfo.isNewUser;if(x){
                firebase.database().ref('users/' + i).set({
                    ID:i,
                    Name: Userinfo.displayName,
                    Photo:Userinfo.photoURL,
                    Online:true
                })
            }

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
                <img id ='mainpic' src ='http://sfwallpaper.com/images/background-wallpaper-images-2.jpg' ></img>
                <div id = 'SCon'>

                <h1 id ='Create' >Create an account</h1>
                <h3 id ='free' >its free and always will be free</h3>

                <input placeholder = 'Username' className = 'SignInput' id = 'Si1' ></input>
                <input placeholder = 'Password' className = 'SignInput' id = 'Si2' ></input>
                <input placeholder = 'Mobile number' className = 'SignInput' id = 'Si3' ></input>

                 {/* <div className = 'SignInput' id = 'Si4'  onClick = {()=>{this.props.move()}} >
                <img id = 'fblogo' src = 'https://www.freeiconspng.com/uploads/facebook-f-logo-transparent-facebook-f-22.png' />
                 <p  id ='Si4text' > Facebook Login </p>
                 </div> */}


                <button onClick ={()=>{this.Login()}} id ='signup' >Sign Up</button>
                <p id ='or' >OR</p>

                <GoogleLogin OnComplete = {this.LoginFinish} />

            
                                     



                            
                </div>
            </div>            
        );
    }
}

export default SignUp;


