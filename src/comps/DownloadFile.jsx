import React, { Component } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

class DownloadFile extends Component {
    componentDidMount() {
        var storage = firebase.storage().ref('Photos/storybook.png');

        storage.getDownloadURL().then(function(url) {
            // Insert url into an <img> tag to "download"
            alert(url)
          }).catch(function(error) {
          
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors


            switch (error.code) {
              case 'storage/object-not-found':
                // File doesn't exist
                break;
          
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
          
              case 'storage/canceled':
                // User canceled the upload
                break;          
              
              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
          });

    }
    constructor(props) {
        super(props);
        this.state = {  };
        

    }
    render() {
        return null
    }
}

export default DownloadFile;