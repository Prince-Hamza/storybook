import React, { Component } from 'react'
import firebase from 'firebase'
import './Styles/Timeline.css'

class TImeline extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = { 
            Complete:false
         };
        var keynum = 0
         firebase.database().ref('users/' + this.props.Key + '/Timeline')
         .once('value').then((x)=>{             Void = x.val() || true

             var keys = Object.keys(Void)
             
                            
            x.forEach(i => { 
                var data = i.val()  
                
                data.key = keys[keynum];
             //   alert(data)
                

                
                Posts.push(data)                 
                keynum += 1
            })  
            firebase.database().ref('users/' + this.props.Key).once('value' ,(x) =>{ 
                MyInfo.push(x.val())
                this.setState({Complete:true})
            })             
         })       
         
         // $Posts [] :: Read Objectx (x) 

    }

    Like = (PostKey) => {
        var i = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + this.props.Key + '/Timeline/' + PostKey + '/Likes' )
        .push({By:i})
      //  alert('liked')

    }

    Share = (Post) => {
        var i = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + this.props.Key + '/Timeline/')
        .push({Text:Post.Text,Image:Post.Image})
     //   alert('Shared to Your Timeline')

        
    }


    render() {
        if (this.state.Complete) {
            if(Void === true){
              //  alert('void')
                return(<h1 className = 'void' >There are no posts to show</h1>)
            }
            

            return (
                <div>
                     <div className ="flex-container">

                     {Posts.map(x=>{
                                           
                         return(
                            <div className = 'Post' >
                               <img src = {MyInfo[0].Photo} className = 'roundface'  />
                               <h3 className = 'nm' >{MyInfo[0].Name}</h3>
                               <input className = 'PostText' value = {x.Text} ></input>
                               <img className = 'PostImage' src = {x.Image} /> 


                             <div className = 'Reaction' >
                                
                               <h3 onClick = {()=>{  this.Like(x.key) }} id = 'like' > Like  </h3>
                               <h3 id = 'Comment' > Comments </h3>
                               <h3 onClick ={()=>{this.Share(x)}} id = 'share' > Share </h3>

                             </div>
                               


                               


                           </div> 
                         )
                     })}
                     </div>

</div>
 )
            
        }

        return(<p></p>)
 
    }
}

export default TImeline;

var Posts = [] , MyInfo = []
var Void = false
