import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import $ from 'jquery'

export default class ChatEngine {

    construcor (){
        this.xperia = 0
    }


    Set_Initial_Structure(){

        this.SetUsers()
       .then(()=>{
            this.SetUserInbox()                    
       })
           

    }

    SetUserInbox(){
        var i = firebase.auth().currentUser.uid
        const inboxref = 'users/' + i + '/inbox'

        firebase.database().ref(inboxref)
        .once('value').then((snapshot)=> {
            var x = snapshot.val() || 'Anonym'
            console.log(x)        
            if (x === 'Anonym'){
                 this.NewSet()
            .then(()=>{
            this.ReadLastkey('chats' , i)
            .then((key)=>{
            this.Inform(i,key)   
               })})}
               })}

    Inform (i,key,U2) {

        console.log('u1: ' + i)
        console.log('key: ' + key)
        console.log('u2: ' + U2)


        
        if(U2 === undefined) {
            console.log('undef')

            firebase.database().ref('storage').once('value')
            .then((x)=>{var data = x.val();U2 = data.value

                firebase.database().ref('users/' + i + '/inbox').push({
                    Partner : U2,
                    Convo : '$' + key
                })
        alert('my inbox set')
                firebase.database().ref('users/' + U2 + '/inbox').push({
                    Partner : i,
                    Convo : '$' + key
                })
        
              //  firebase.database().ref('chats/created').remove()           

            })} else {


                firebase.database().ref('users/' + i + 'inbox')
                .push({
                    Partner:U2,
                    Convo:key
                })



            }
        
       
    }

  async ReadLastkey (ref , Myid)  {    
        return firebase.database().ref(ref).limitToLast(1).once('value')
              .then((x) => {
                  var data = x.val()
                  var lastkey = Object.keys(data)
                  console.log('last key : ' + lastkey)
                  firebase.database().ref('chats/' + lastkey + '/messages').push({
                      By:Myid,
                      says:'thanks'
                  }) 
                  return lastkey             
              })        
           }

    NewSet () {
        //alert('anonym')
        return firebase.database()    
        .ref('chats').push({        
            system : true        
        })
    }





    async SetUsers(){
        return this.SetSystem()
        .then(()=>{ return this.SetMe()
        })
    }

    async SetMe  ()  {
        var i = firebase.auth().currentUser.uid
        this.RefExist('users/' + i)
        .then((x)=>{
           // alert(x)
            if(!x){                
                    console.log('setme')
                    return firebase.database().ref('users/' +  i)
                    .set({
                        ID:i,
                        IP:'ip',
                        Name:'My Name',
                        Online:false,
                        Photo:'photo'                    
                    })
               
            
            }})}

    async SetSystem () {
       console.log('system')
       firebase.database().ref('unique')
       .push({created:true})
       this.LastRead('unique').then((key)=>{console.log('key: ' + key)
       key = key + ''
       firebase.database().ref('storage').set({value:key})       
       firebase.database().ref('users/' + key).set({
           Name:'System',
           ID:key,
           IP:'1.2.3.4.5',
           Photo:'hkhjkhjkhjk',
           Online:true
        })

    })
}
    



    Animate(Chatpadkey){

        $("#" + Chatpadkey).animate({ scrollTop: $(document).height() }, 1000);   


    }

    Track_Online_Users (){
       this.RefExist('OnlineUsers') 
       .then((x) => {
        if(x){
         this.MyIP()
            .then((data)=>{
               this.SetKey('OnlineUsers/Existing' , data.ip)
               setInterval (()=>{
                this.MyIP()
                .then((data)=>{  
                 this.Clean()                 
                 this.SetKey('OnlineUsers/Updating' , data.ip)
                 this.PatternMatch()                  
                })                                         
              },7000)
         })


        } else {
            this.Createref('OnlineUsers')
            this.Track_Online_Users()
        }
    })  

   
  

             

    }

    Clean(){
        firebase.database()
        .ref('OnlineUsers/Updating')
        .remove()
    }

    async RefExist (ref){
       return firebase.database().ref(ref)
        .once('value')
        .then((v)=>{
            var S = v.val() || 'Anonym' 
            if(S !== 'Anonym')  {
                return true
            }  else {
                return false
            }      
        })
    }

    MyIP(){          
       return $.getJSON('https://api.ipify.org?format=json', function(data){
           return data
        })    
    }

    Createref(ref){
        firebase.database().ref(ref)
        .push({
            created:true
        })
    }

    SetKey(ref,value){
        var i = firebase.auth().currentUser.uid
        firebase.database().ref(ref)
        .push({
            ID:i,
            IP:value
        })

    }

    PatternMatch (found){
        firebase.database()
        .ref('OnlineUsers/Updating')
        .on('value' , (x) => {
            x.forEach((i)=>{
                var data = i.val()
                MyArray2.push(data)
            })
            this.MapArray('OnlineUsers/Existing' , MyArray1)
            .then(()=>{
                MyArray2.forEach((i)=>{
                    MyArray1.forEach((ie)=>{
                        if (i.IP === ie.IP){
                            found = true                                                        
                        } 
                    })
                    found = false
                //   if(!found){
                    firebase.database().ref('users/' + i.ID)
                    .update({  Online:false     }) 
                    console.log('updated')                    
                //   }                 
                })
            })
        })        
    }
    MapArray(ref , MyArray) {
        if (ref === undefined || MyArray === undefined )
            {  console.error('MapArray :: Arguments Undefined ');}            
        return firebase.database().ref(ref)
       .once('value', (crowd) => { 
       crowd.forEach((person) => {  
            MyArray.push(person.val())         
            }) 
        })        
      } 


 async FindKey (User1id  , User2id , result) {
     
    const Superbase = firebase.database()
    const i = User1id ; var Key = '' ; var found = false
  
      return Superbase.ref('users/' + i + '/inbox')
          .once('value').then((Convos) => {            
              Convos.forEach((c) => {
                  var data = c.val()
                  if (data.Partner === User2id) {
                      var CC = data.Convo
                      Key = CC.slice(1,CC.length)
                      found = true
                      return Key
                  }                
              })          
              if(found){return Key}
              if(Key === ''){
                  alert('not found')
                  firebase.database().ref('chats')
                  .push({created:true})
                  return this.LastRead('chats')
                  .then((mykey)=>{
                      alert('lll' + mykey)

                      this.Inform(User1id ,mykey , User2id)
                      this.Inform(User2id, mykey , User1id)

                      return mykey



                     
                  })

            }
          })

   
 }


iinform( i  , pid , key) {
    key += ''    
    if(pid === undefined){        
    firebase.database().ref('storage').once('value')
    .then((x)=>{var data = x.val();pid = data.value})        
    }
    firebase.database().ref('users/' + i + '/inbox' )
    .push({
        Partner: pid,
        Convo: '$' + key
    }) 

}

 async CheckInbox(User1id,User2id){
    const Superbase = firebase.database()
        return Superbase.ref('users/' + User1id + '/inbox')
          .once('value').then((Cs)=>{
              return Cs
    })    
      }


 CreateNewKey () {
    firebase.database().ref('chats').push({
        Created: true
    })

    return this.ReadLast('chats')

    
 }

 async ReadLast (ref,User1id){

    console.log('created new , reading....')

    return firebase.database()
    .ref(ref).limitToLast(1).once('value')
              .then((x) => {
                  var data = x.val()
                  var lastkey = Object.keys(data)
                  console.log('last key : ' + lastkey)
                  firebase.database().ref('chats/' + lastkey + '/messages').push({
                      By:User1id,
                      says:'Connected'
                  }) 
                  return lastkey             
              })      

 }



async LastRead(ref){
    console.log('created new , reading....')
    return firebase.database()
    .ref(ref).limitToLast(1).once('value')
              .then((x) => {
                  var data = x.val()
                  var lastkey = Object.keys(data)
                  console.log('last key : ' + lastkey)               
                  return lastkey             
              }) 
            }
}


var MyArray1 = []
var MyArray2 = []

