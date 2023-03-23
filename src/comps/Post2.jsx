import React, { Component } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/Post2.css'
import UploadFile from './UploadFile';
import Mind from './Mind.jsx'
import Photo from './Photo.jsx'
import PostButton from './PostButton.jsx'

class Post2 extends Component {
    constructor(props) {
        super(props);
       this.state = {
           Go:false,
           ImageUrl:'',
           Text : ''
       }
    }


    GetPhotoURL = (url) => {
        this.setState({ImageUrl:url})        
    }
    InputText = (i) => {
        this.setState({Text:i})
    }

  

    render() {
        return (

            <div>
            <div id = 'propost2' >
            <Mind Close = {this.props.Close} Text = {this.InputText} />
            <Photo PhotoURL = {this.GetPhotoURL}  />  
            <PostButton  ImageURL = {this.state.ImageUrl} iText = {this.state.Text} Key = {this.props.Key}   />
            </div>
            </div>
            
        );
    }
}

export default Post2;
