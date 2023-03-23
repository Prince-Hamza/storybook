import React, { Component } from 'react';
import './Styles/Sms.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class SmsAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SmsAuth = () => {
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    var Num = "+923405588495";
    firebase.auth().signInWithPhoneNumber(Num, appVerifier)
      .then(function (confirmationResult) {
        console.log("success");
        window.confirmationResult = confirmationResult;
        console.log(JSON.stringify(confirmationResult))
      }).catch(function (error) {
        console.log("Error");
      });

  }
  render() {
    return (
      <div>

        <div onClick={() => { this.props.OFF() }} id='smsoverlayer' >
        </div>


        <div id='smscard'>
          { /*      <input id ='mobilenum' />  */}
          <button onClick={() => { this.SmsAuth() }} id='smsbtn'>Send Sms</button>



          <ion-content padding>
            <div id="recaptcha-container"></div>

            <ion-item>
              <ion-label stacked>Phone Number</ion-label>
              <ion-input type="number"  ></ion-input>
            </ion-item>


          </ion-content>


        </div>

      </div>
    );
  }
}

export default SmsAuth;

