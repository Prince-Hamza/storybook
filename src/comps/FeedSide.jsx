import React, { Component } from 'react';
import Card from './GroupCreateCard.jsx'
import PropTypes from 'prop-types';
import './Styles/Feed.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class FeedSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Active:false,
            Route:false,
            GroupNames:[]
         };

        var i = firebase.auth().currentUser.uid
         firebase.database().ref('users/' + i + '/MyGroups')
         .once('value' , (res) => {
             res.forEach((group)=>{
                 var Group = group.val()
                 GNs.push(Group.Name)                                  
             })
             this.setState({GroupNames:GNs})
         })

         


    }

    

    Route = () => {
        alert('Routing')            	
		this.context.router.history.push('/Groups/Groupid')            
    }


    render() {
       
        return (
            <div>
            
            <div id = 'feedside'>
            <br></br><br></br>
        <p className = 'Feedtext' id = 'Shortcuts' >Shortcuts</p>


        {this.state.GroupNames.map(groupname => {
            return (
                <h3 className = 'Feedtext' id = 'Sname' onClick ={()=>{this.Route()}} > {groupname} </h3>
            )
        })}









        <br></br><br></br>

<p className = 'Feedtext' id = 'Create'>Create</p>

        <h6 className = 'Feedtext' id = 'CreateGroup'
         onClick= {()=>{this.setState({Active:!this.state.Active})}} > Group</h6>

       
        </div>

          {this.state.Active && <Card    />  }
            
          </div> );
    }
}

export default FeedSide;


var GNs = []


FeedSide.contextTypes = {
	router: PropTypes.object
};