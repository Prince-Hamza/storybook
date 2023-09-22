import React, { Component } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import {Col,Row} from 'react-bootstrap'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        };
    }


    emailLogin = () => {

      firebase.auth().signInWithEmailAndPassword(this.state.password, this.state.email)
        .then((result) => {
          var Userinfo = result.user;
          var i = firebase.auth().currentUser.uid
          var x = result.additionalUserInfo.isNewUser;

          // if(x){
          //     firebase.database().ref('users/' + i).set({
          //         ID:i,
          //         Name: Userinfo.displayName,
          //         Photo:Userinfo.photoURL,
          //         Online:true
          //     })          //
          // } else {
          //   alert('user has already signed up')
          // }

          alert('Sign in successful')
          this.setState({...this.state , profileLink:`/profile/${Userinfo.uid}` , })
          let link = document.getElementById('signInNav')
          setTimeout(()=>{link.click() },1000)

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        });

}



    render() {
        return (
            <Row>
            <Col lg={12} xs={12} >
              <Row>
                 <p id='pe' >Email </p>
                 <input className='LoginInput' id='Email' type="password" value={this.state.email} onChange={(e)=>{ this.setState({ email:e.target.value })   }} ></input>
              </Row>
            </Col>

            <Col lg={12} xs={12} >
               <p id='pp' >Password</p>
               <input className='LoginInput'  id='Password' value={this.state.password} onChange={(e)=>{ this.setState({ password:e.target.value })   }} ></input>
            </Col>

            <button id='Login' onClick={() => { this.emailLogin() }}>
                Login
            </button>

            <nav style={{display:'none'}} >
                <Link id="signInNav" to={this.state.profileLink} >
                    Signin
                </Link>
            </nav>

            </Row>
        )
    }
}

export default Login;
