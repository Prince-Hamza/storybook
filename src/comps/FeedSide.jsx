import React, { Component } from 'react';
import Card from './GroupCreateCard.jsx'
import PropTypes from 'prop-types';
import './Styles/Feed.css'

class FeedSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Active:false,
            Route:false
         };
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
        <h3 className = 'Feedtext' id = 'Sname' onClick ={()=>{this.Route()}} >Group name </h3>              <br></br><br></br>

<p className = 'Feedtext' id = 'Create'>Create</p>
        <h3 className = 'Feedtext' id = 'CreateGroup'

         onClick= {()=>{this.setState({Active:!this.state.Active})}} >Group</h3>

       
        </div>

          {this.state.Active && <Card    />  }
            
          </div> );
    }
}

export default FeedSide;

FeedSide.contextTypes = {
	router: PropTypes.object
};