import React, { Component } from 'react';
import Head from './Head.jsx';
import SignUp from './SignUp';
import PropTypes from 'prop-types';
import SmsAuth from './SmsAuth.jsx';
import { initializeApp } from "firebase/app"
import firebase from 'firebase/compat/app'
import {firebaseConfig} from '../config.js'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { SmsAuth: false }
    }

   componentDidMount = () => {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
   }

    Navigate = (data) => {
    //  alert(`data:${JSON.stringify(data)}`)
      alert(`router:${JSON.stringify(this.context)}`)
      //  this.context.router.history.push('/Profile/' + data.uid)
    }

    SmsAuth = () => {
        this.setState({ SmsAuth: !this.state.SmsAuth })
    }

    render() {
        return (
            <div>
                <div>
                </div>
                <div>
                    <Head />
                    <SignUp Navigate={this.Navigate} SmsAuth={this.SmsAuth} />
                    {this.state.SmsAuth && <SmsAuth OFF={this.SmsAuth} />}
                </div>
            </div>
        );
    }
}

export default Main;

Main.contextTypes = {
    router: PropTypes.object
}
