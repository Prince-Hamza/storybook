import React, { Component } from 'react';
import './Styles/Signup.css'
import FbLogin from './FbLogin';
import GoogleLogin  from './GoogleLogin'
import firebase from 'firebase/compat/app'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          SmsAuth:false,
          profileLink:undefined,
          email:'',
          password:''
        };
    }

    LoginFinish = (data) =>{
        this.props.Navigate(data)
    }

    Login = () => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => {

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

              alert('Sign up successful')

              this.setState({...this.state , profileLink:`/profile/${Userinfo.uid}` , })

              let link = document.getElementById('signupNav')
              setTimeout(()=>{link.click() },1000)

          } else {
            alert('user has already signed up')
          }

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        });

}


    render() {
        return (
            <div>
                <img id ='mainpic' src ='http://sfwallpaper.com/images/background-wallpaper-images-2.jpg' ></img>
                <div id = 'SCon'>

                <h1 id ='Create' >Create an account</h1>
                <h3 id ='free' >its free and always will be free</h3>

                <input placeholder='Email' className='SignInput'  id = 'Si1' onChange={(e)=>{ this.setState({...this.state, email:e.target.value })   }}  ></input>
                <input placeholder='Password' className='SignInput' type="password"  id = 'Si2' onChange={(e)=>{ this.setState({...this.state, password:e.target.value })   }}    ></input>
                <input placeholder='Mobile number' className='SignInput' id = 'Si3' ></input>

                 {/* <div className = 'SignInput' id = 'Si4'  onClick = {()=>{this.props.move()}} >
                <img id = 'fblogo' src = 'https://www.freeiconspng.com/uploads/facebook-f-logo-transparent-facebook-f-22.png' />
                 <p  id ='Si4text' > Facebook Login </p>
                 </div> */}


                <button onClick ={()=>{this.Login()}} id ='signup' >Sign Up</button>
                <p id ='or' >OR</p>

                <GoogleLogin OnComplete = {this.LoginFinish} />


                <nav style={{display:'none'}} >
                    <Link id="signupNav" to={this.state.profileLink} >
                        Signup
                    </Link>
                </nav>

                </div>
            </div>
        );
    }
}

export default SignUp;
