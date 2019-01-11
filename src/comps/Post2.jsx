import React, { Component } from 'react'
import firebase from 'firebase'
import './Styles/Post2.css'

class Post2 extends Component {
    constructor(props) {
        super(props);
        alert(this.props.Key)
    }
    render() {
        return (

            <div>
                <div id = 'propost2' >

<div id = 'Upper' > 

<p onClick = {()=>{this.props.Close()}} >close</p>

<div id ='cmp' > </div> </div>

<input id ='mind2' placeholder = "What's on your mind" ></input>  

<div  id = 'downpost' > 

<div id = 'PPrV2' > <p id='PV' >Photo/Video</p>   </div>

  </div>  

  <div id = 'final' >
  <button id = 'postbtn'  onClick ={(e)=>{
      firebase.database().ref('users/' + this.props.Key + '/Timeline')
      .push({
          Text:e.target.value,
          Image:'https://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg'
        })
       alert('Posted Successfully Refresh to see changes')
  }} >Post</button>

  </div>   

</div>
            </div>
            
        );
    }
}

export default Post2;