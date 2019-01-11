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
        alert( 'timeline : '  + this.props.Key)
         firebase.database().ref('users/' + this.props.Key + '/Timeline')
         .once('value').then((x)=>{
            x.forEach(i => {
                var data = i.val()    
                Posts.push(data)                                            
            })      
            
            this.setState({Complete:false})

         })       
         
         // $ Posts [] :: Read Objectx (x)

    }
    render() {
        return (
            <div>

                <div id = 'Timeline'>

                {Posts.map(i=>{
                    {Tops += 550}
                    return (

                        <div style = {{top:Tops}} className = 'PostView' >


                        <h5>username</h5>
                        <input className = 'TextArea'  value = {i.Text} />

                        <img className = 'PostImage'
                         src = {i.Image} />
                         <div className = 'Reactions'  />                                                                           
                
                
                        </div>                    

                    )
                })}

             
                </div>

            </div>            
        );
    }
}

export default TImeline;

var Posts = []
var Tops = -488