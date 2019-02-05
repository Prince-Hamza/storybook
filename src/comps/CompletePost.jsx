import React, { Component } from 'react';
import 'react-bootstrap'

class CompletePost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                      <div key = {k} className = 'Post' >
                               <img src = {MyInfo[0].Photo} className = 'rounded-circle'  />
                               <h3 className = 'nm' >{MyInfo[0].Name}</h3>
                               <input className = 'PostText' onChange={()=>{console.log('ok')}} value = {x.Text} ></input>
                               <img className = 'PostImage' src = {x.Image} /> 
                               <div className = 'Reaction' >                                
                               <h3 onClick = {()=>{  this.Like(x.key) }} id = 'like' > Like  </h3>
                               <h3 id = 'Comment' > Comments </h3>
                               <h3 onClick ={()=>{this.Share(x)}} id = 'share' > Share </h3>
                             </div>                                                      
                      </div> 

            </div>            
        );
    }
}

export default CompletePost;