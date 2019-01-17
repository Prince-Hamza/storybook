import React, { Component } from 'react';
import './Styles/Groups.css'
import './Styles/GroupCreateCard.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {Card:true  };
    }
    render() {
        return (
            <div>

              {this.state.Card && 
              <div id = 'Overlay1' onClick = {()=>{this.setState({Card:false})}} >

                <div id='Card' >            
                <h5></h5>
                <h4 id = 'CreateGroup' >Create  Group</h4>
                <input id = 'GroupName' placeholder='Group Name'  />              
                <button id = 'CreateGroupBtn' > Create </button>
                </div>                               


                </div>
          }

            </div>
        );
    }
}

export default Card;