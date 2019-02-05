import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                <div id = 'propost' >

<div id = 'Upper' > 

<div id ='cmp' > </div> </div>

<input onClick = {()=>{this.props.Overlayer()}} id ='mind' placeholder = "What's on your mind" ></input>  
{/* 
<div  id = 'downpost2' > 

<div id = 'PPrV' > <p id='PV' >Photo/Video</p>   </div>

  </div>      */}

</div>
            </div>
            
        );
    }
}

export default Post;