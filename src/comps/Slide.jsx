import React, { Component } from 'react';
import './Styles/Slide.css'
import PropTypes from 'prop-types';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }

    Route = (p) => {
		this.context.router.history.push('/Search/' + p)            
    }

    render() {
        return (
            <div>
                <div id ='slide'>
                <p id = 'story' >Storybook</p>
                <input onChange ={(e)=>{p = e.target.value}} 
                onKeyPress ={(e)=>{
                    if(e.key === 'Enter'){
                        this.Route(p)
                    }
                }} 
                id ='searchbar' />
                <button id = 'searchbtn' >search</button>
              <p id = 'me' onClick ={()=>{this.Route(this.props.Key)}}  > UserName </p>
                </div>
            </div>
        );
    }
}

export default Slide;

var p

Slide.contextTypes = {
	router: PropTypes.object
};

