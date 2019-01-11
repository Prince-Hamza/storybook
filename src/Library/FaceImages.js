import React, { Component } from 'react';
import 'react-bootstrap'
// import './Styles/Chathead.css'

class FaceImages extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

           <img className= 'rounded-circle' id = 'X' src = {this.props.X.Photo} />
           <img className= 'rounded-circle' id = 'Y' src = {this.props.Y.Photo} />        
        


            </div>            
        );
    }
}

export default FaceImages;