import React, { Component } from 'react'
import Post2 from './Post2'
import './Styles/Overlayer.css'

class OVerlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { Post:true };
    }

    Up = () =>{
        this.props.Off()
    }

   
    render() {
        return (
            <div> 
 
                <div id = 'Overlayer' >

             {this.state.Post &&  <Post2 Key = {this.props.Key} Close = {this.Up} /> }   

                </div>

            </div>            
        );
    }
}

export default OVerlayer;