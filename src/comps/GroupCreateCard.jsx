import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/Groups.css'
import './Styles/GroupCreateCard.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Card:true,
        GroupName:''
        };
    }

    CreateGroup = (nm) => {
                var i = firebase.auth().currentUser.uid
                firebase.database().ref('users/' + i + '/MyGroups')
                .push({
                    Name: nm
                })
    }

    render() {
        return (
            <div>

              {this.state.Card &&  <div>


              <div id = 'Overlay1' onClick = {()=>{this.setState({Card:false})}} >                                  
              </div>

<div id='Card' >            
<h5></h5>
<h4 id = 'CreateGroup' > Create  Group</h4>

<input id = 'GroupName' placeholder='Group Name' 
onChange = {(e)=>{ this.setState ({GroupName:e.target.value }) } }  />              

<button id = 'CreateGroupBtn' onClick = {()=>{alert(this.state.GroupName);this.CreateGroup(this.state.GroupName)}} > Create </button>
</div>  

</div>
              
                 }

            </div>
        );
    }
}

export default Card;