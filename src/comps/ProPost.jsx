import React, { Component } from 'react';
import Overlayer from './Overlayer'
import Post from './Post.jsx'
import './Styles/Post.css'

class ProPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            Overlayer:false
        };
    
    }

    NoOverlayer = () => {
        this.setState({Overlayer:false})        
    }

    AdvPost = () =>{
        this.setState({Overlayer:true})
    }
    render() {
        return (
            <div>

                <Post Overlayer ={this.AdvPost}  />

                {this.state.Overlayer && <Overlayer Key = {this.props.Key} Off = {this.NoOverlayer}   /> }       
    

            </div>            
        );
    }
}

export default ProPost;