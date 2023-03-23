import React, { Component } from 'react';
import './Styles/Profile.css'
import './Styles/ProfileButtons.css'
import {Image} from 'react-bootstrap'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class ProPix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CoverPic: 'https://buddhisteconomics.net/wp-content/uploads/2017/10/hdwp693968124.jpg',
            ProfilePic:'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/06/edinburgh_meadows_2008_middle_meadow_walk_by_catharine_ward_thompson.jpg?itok=ysmDaSjD&fc=50,50'
      }
      var i = this.props.Key
      firebase.database().ref('users/' + i).once('value')
      .then((x)=>{
          var data = x.val()
          var ProfilePhoto = data.ProfilePhoto || false
          var CoverPhoto = data.CoverPhoto || false
          if (!ProfilePhoto){} else {
            this.setState({ProfilePic:CoverPhoto})
          }
          if (!CoverPhoto) {} else {
              this.setState({CoverPic:CoverPhoto})
          }

      })



    }
    render() {

        if (this.state.ProfilePic && this.state.CoverPic) {
            return (
                <div>
    
                    <button className = 'ProfileButtons' id = 'Pbtn1' >Friend</button>
                    <button className = 'ProfileButtons' id = 'Pbtn2' >Follow</button>
                    <button className = 'ProfileButtons' id = 'Pbtn3' >Message</button>
    
    
                    <div id = 'coverdiv' >
                    <img id = 'cover' 
                     src = {this.state.CoverPic}
                     />
                    </div>
                   
    
                    <img id = 'Profilepic' 
                    className = 'rounded-circle'
                    src = {this.state.ProfilePic}  />
                </div>            
            );
        }

  
    }
}

export default ProPix;