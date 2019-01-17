import React, { Component } from 'react';
import FeedSide from './FeedSide.jsx';
import Slide from './Slide.jsx'
import './Styles/Groups.css'
import Timeline from './Timeline.jsx'

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
       // var Data = this.props.match  
     
    }

  

    render() {
        return (
            <div>

                <Slide/>
                <FeedSide />

                <img 
                id = 'GroupCover' 
                src = 'https://cdn2.outdoorphotographer.com/2018/05/a7RIIYNPSpringApr2015_DSC5460ElCapitanThreeBrothersReflection_OP.jpg'
                />

                <div id='undercover'>              
                </div>

                <Timeline /> 




            </div>            
        );
    }
}

export default Groups;