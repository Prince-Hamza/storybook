import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        
            
            var i = firebase.auth().currentUser.uid
            firebase.database().ref('users/' + i + '/inbox' )
            .limitToLast(1).on('child_added' , (x) => {
                var data = x.val()
                Time++
                if(Time !== 1){
                    alert('time +')
                    console.log('1: ' + data)
                    console.log('2: ' + data.Partner)
                    alert('someone initialized a conversation ')
                    firebase.database().ref('users/' + data.Partner)
                    .once('value' , (v) =>{
                        var data = v.val()
                        console.log('3: ' + data)
                        console.log('4: ' + data.ID)
                        this.props.init(data)
                    })  }   })  
                
         

               
            
            
        

        
       

    }
    render() {
        return (
            <div>

            </div>            
        );
    }
}

export default Event;

var Time = 0
