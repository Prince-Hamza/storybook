import React, { Component } from 'react';
import ProPix from './ProPix.jsx'
import Menu from './ProMenu.jsx'
import ProPost from './ProPost.jsx';
import About from './About.jsx'
import Friends from './Friends.jsx'
import Slide from './Slide.jsx'
import Timeline from './Timeline.jsx'
import FeedSide from './FeedSide.jsx'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import initialize from './initialise'
import './Styles/Profile.css'

class Profile extends Component {
    componentDidMount() {
        console.log('mounted')
       setTimeout(()=>{
         this.setState({Connected:true})
       },1000)
      
   
    
    }
    constructor(props) {
        super(props);
        this.state = { 
            Timeline:true,
            Profile:true,
            About:false,
            Connected:false
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
        if(this.state.Connected){
            return (<div>
                <FeedSide />            
                <Slide Key = {Routeid} />
                <ProPix Key = {Routeid} />            
                <Menu Hello = {this.Change} />  
    
                  { this.state.Timeline && <Timeline Key = {Routeid} />}
                  {   this.state.Profile && <ProPost Key = {Routeid} />  }   
                  {   this.state.About &&  <About/>     }  
                  {   this.state.About &&  <Friends/>   }  
                 
            </div>           
            );
        }

        return(
            <p></p>
        )
     
    }
}

export default Profile;

var Routeid

