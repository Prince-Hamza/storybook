import React, { Component } from 'react';
import './Styles/Groups.css'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

                <div id = 'Overlay1'>

                <div id='Card' >
            
                <h5></h5>

                <h4>Create  Group</h4>
                <input placeholder='Group Name'  />              
                <button>Create</button>

                </div>

                                


                </div>


            </div>
        );
    }
}

export default Card;