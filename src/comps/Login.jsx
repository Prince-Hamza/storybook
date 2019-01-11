import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div>
               <p id = 'pe' >Email or Phone</p>
               <input  className = 'LoginInput' id = 'Password' ></input>
               <p id='pp' >Password</p>
               <input className = 'LoginInput' id = 'Email' ></input>
               <button id = 'Login'>Login</button>
           </div> 
        );
    }
}

export default Login;