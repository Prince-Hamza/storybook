import React, { Component } from 'react';
import './Styles/Main.css'
import Login from './Login';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div id='blue' >
                    <p id='Storybook'  >Storybook</p>
                    <Login />
                </div>
            </div>
        );
    }
}

export default Head
var P = ''
