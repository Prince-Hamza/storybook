import React, { Component } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import {Col,Row} from 'react-bootstrap'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    GoogleLogin = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider).then((result) => {
            var token = result.credential.accessToken;
            var Userinfo = result.user;
            var i = firebase.auth().currentUser.uid
            var x = result.additionalUserInfo.isNewUser; if (x) {
                firebase.database().ref('users/' + i).set({
                    ID: i,
                    Name: Userinfo.displayName,
                    Photo: Userinfo.photoURL,
                    Online: true
                })
            }

            this.setState({ LoginInfo: result.user, F: true })
            alert('Login Successful')

        }).catch(function (error) {
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });

    }


    EmailLogin = () => {

    }



    render() {
        return (
            <Row>
            <Col lg={12} xs={12} >
              <Row>
                 <p id='pe' >Email </p>
                 <input className='LoginInput' id='Email' ></input>
              </Row>
            </Col>

            <Col lg={12} xs={12} >
               <p id='pp' >Password</p>
               <input className='LoginInput' id='Password' ></input>
            </Col>

            <button id='Login' onClick={() => { this.EmailLogin() }}>
                Login
            </button>

            </Row>
        )
    }
}

export default Login;
