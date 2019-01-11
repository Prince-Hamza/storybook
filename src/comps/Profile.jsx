import React, { Component } from 'react';
import ProPix from './ProPix.jsx'
import Menu from './ProMenu.jsx'
import ProPost from './ProPost.jsx';
import About from './About.jsx'
import Friends from './Friends.jsx'
import Slide from './Slide.jsx'
import Timeline from './Timeline.jsx'
import FeedSide from './FeedSide.jsx'
import './Styles/Profile.css'

class Profile extends Component {
    componentDidMount() {
      
    }
    constructor(props) {
        super(props);
        this.state = { 
            Timeline:true,
            Profile:true,
            About:false
         };
        var Data = this.props.match              
        var params = Data.params;
        Routeid = params.id  




        }

      Change = () => {
          alert('Switch')
          this.setState({
              Timeline:false,
              About:true,
              Profile:false
            })
      }


    render() {      
        return (<div>

            <FeedSide />            
            <Slide />
            <ProPix/>            
            <Menu Hello = {this.Change} />   

             { this.state.Timeline && <Timeline Key = {Routeid} />}

              {   this.state.Profile && <ProPost Key = {Routeid} />  }   
              {   this.state.About &&  <About/>     }  
              {   this.state.About &&  <Friends/>     }  
             

        </div>           
        );
    }
}

export default Profile;

var Routeid

