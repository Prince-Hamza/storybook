import React, { Component } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import './Styles/UploadFile.css'
import DownloadFile from './DownloadFile';




class UploadFile extends Component {
    componentDidMount() {

        var uploader = document.getElementById('uploader')
        var fileButton = document.getElementById('fileButton')
        var photo = document.getElementById('image')

        fileButton.addEventListener('change' , function (e){

            // get File
           

            file = e.target.files[0]
            var storageref = firebase.storage().ref('Photos/' + file.name)
            var task = storageref.put(file)


            task.on('state_changed' , function Progress (x){

                var percentage = (x.bytesTransferred / x.totalBytes) * 100
                uploader.value = percentage
              
            },function error (e){
                alert('error' + e)
            },function Complete (){
                alert('done')
                var storage = firebase.storage().ref('Photos/' + file.name);

                storage.getDownloadURL().then(function(url) {
                    
                    MyURL = url                  
                  
                    photo.src = url

                    
                  }).catch(function(error) {
                  
                
                  });
        
                
                            
            })       })
       
        
    }
    constructor(props) {
        super(props);
        this.state = {Download:false};

       var x = setInterval(()=>{
            if (MyURL !== ''){
                alert( '$ Hello :: '  + MyURL)
                clearInterval(x)
                this.props.Loaded(MyURL)
              
            }
        },1000)
     
        
    }

  
    
    

    render() {
     
        return (
            <div>

         <div style = {{position:'absolute',top:'90%',left:0,width:'100%',height:'50%'}} >

         <img id = 'image' 
         
         style = {{position:'absolute', top:'-180%' , left:'0%' , width:'100%' , height:'160%' }} />

         <progress value = '' max = '100' id = 'uploader'>0%</progress>  

                <input type = 'file'  id = 'fileButton' onClick = {()=>{
                    this.props.Per('oka')                    
                    }}  />
                             
            </div>
            </div>
        );
    }
}

export default UploadFile;

var file
var MyURL = ''


