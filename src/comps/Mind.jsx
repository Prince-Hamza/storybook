import React, { Component } from 'react';

class Mind extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

                

<div id = 'Upper' > 
<p onClick = {()=>{this.props.Close()}} >close</p>
</div> {/* upper */}
<input id ='mind2' placeholder = "What's on your mind" onChange = {(e)=>{this.props.Text(e.target.value)}} ></input>  




            </div>
            
        );
    }
}

export default Mind;