import React, { Component } from 'react';
import FeedSide from './FeedSide.jsx';
import Slide from './Slide.jsx'
import './Styles/Groups.css'

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
                src ='https://upload.wikimedia.org/wikipedia/commons/d/d5/Pic_de_neige_cordier_Face_E.jpg'
                />

                <div id='undercover'>
                <button>Joined</button>
                <button>Share</button>
                </div>


            </div>            
        );
    }
}

export default Groups;