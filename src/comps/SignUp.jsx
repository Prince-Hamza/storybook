import React, { Component } from 'react';
import './Styles/Signup.css'
import FbLogin from './FbLogin';
import GoogleLogin from './GoogleLogin'
import SmsAuth from './SmsAuth';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {SmsAuth:false};
    }

    LoginFinish = (data) =>{
        this.props.move(data)
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

                 <div className = 'SignInput' id = 'Si4'  onClick = {()=>{this.props.move()}} >
                <img id = 'fblogo' src = 'https://www.freeiconspng.com/uploads/facebook-f-logo-transparent-facebook-f-22.png' />
                 <p  id ='Si4text' > Facebook Login </p>
                 </div>


                <button onClick ={()=>{this.props.SmsAuth()}} id ='signup' >Sign Up</button>
                <p id ='or' >OR</p>

                <GoogleLogin OnComplete = {this.LoginFinish} />

            
                                     



                            
                </div>
            </div>            
        );
    }
}

export default SignUp;


