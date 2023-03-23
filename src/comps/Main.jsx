import React, { Component } from 'react';
import Head from './Head.jsx';
import SignUp from './SignUp';
import PropTypes from 'prop-types';
import SmsAuth from './SmsAuth.jsx';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { SmsAuth: false };
    }

    Navigate = (data) => {
        this.context.router.history.push('/Profile/' + data.uid)
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
                    <SignUp move={this.Navigate} SmsAuth={this.SmsAuth} />
                    {this.state.SmsAuth && <SmsAuth OFF={this.SmsAuth} />}
                </div>
            </div>
        );
    }
}

export default Main;

Main.contextTypes = {
    router: PropTypes.object
};