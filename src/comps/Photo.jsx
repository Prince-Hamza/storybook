import React, { Component } from 'react';
import UploadFile from './UploadFile.jsx'
import './Styles/UploadFile.css'


class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Uploading:false
         };
    }
    Change = (per) =>{
       this.setState({Uploading:true})
    }
    Uploaded = (Url) => {
        alert('trans: ' + Url)
        this.props.PhotoURL(Url)
    }
    render() {

        return (
            <div>             
            <div id = 'downpost' > 
        {this.state.Uploading && <h1 id = 'uploading' > Uploading...</h1> }             
            <UploadFile Per = {this.Change} Loaded = {this.Uploaded} /> 
            </div>  
            </div>            
        );
    }
}
export default Photo



