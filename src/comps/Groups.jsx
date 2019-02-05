import React, { Component } from 'react';
import FeedSide from './FeedSide.jsx';
import Slide from './Slide.jsx'
import './Styles/Groups.css'
import Timeline from './Timeline.jsx'
import Post from './Post.jsx'
import Overlayer from './Overlayer.jsx'

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            Overlayer:false
        };
       // var Data = this.props.match  
     
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

                <Slide/>
                <FeedSide />

                <img 
                id = 'GroupCover' 
                src = 'https://cdn2.outdoorphotographer.com/2018/05/a7RIIYNPSpringApr2015_DSC5460ElCapitanThreeBrothersReflection_OP.jpg'
                />

                <div id='undercover'>              
                </div>

                <Post Overlayer ={this.AdvPost}  />
                {this.state.Overlayer && <Overlayer Key = {this.props.Key} Off = {this.NoOverlayer}   /> }       

                <Timeline /> 




            </div>            
        );
    }
}

export default Groups;