import React, { Component } from 'react';
import './Styles/Profile.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
               <div id='menucontainer' >

                <div className ='PMI'id = 'pmi1' >Timeline </div> 
                <div className ='PMI' id = 'pmi2'  onClick ={()=>{this.props.Hello()}}   >About </div> 
                <div className ='PMI' id = 'pmi3' >Friends </div> 
                <div className ='PMI' id = 'pmi4' >More </div> 
                </div>
            </div>
            
        );
    }
}

export default Menu;