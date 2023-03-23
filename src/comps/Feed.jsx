import React, { Component } from 'react';
import './Styles/Feed.css'
import FeedSide from './FeedSide';
import Slide from './Slide';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div>   
                
                <Slide/> 

                <FeedSide/>            
             


            </div>            
        );
    }
}

export default Feed;