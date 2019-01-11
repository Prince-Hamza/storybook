import React, { Component } from 'react';
import './Styles/Profile.css'
import './Styles/ProfileButtons.css'
import {Image} from 'react-bootstrap'

class ProPix extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

                <button className = 'ProfileButtons' id = 'Pbtn1' >Friend</button>
                <button className = 'ProfileButtons' id = 'Pbtn2' >Follow</button>
                <button className = 'ProfileButtons' id = 'Pbtn3' >Message</button>


                <div id = 'coverdiv' >
                <img id = 'cover' 
                 src = 'https://buddhisteconomics.net/wp-content/uploads/2017/10/hdwp693968124.jpg'
                 />
                </div>
               

                <img  id = 'Profilepic' 
                className = 'rounded-circle'
                 src = 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/06/edinburgh_meadows_2008_middle_meadow_walk_by_catharine_ward_thompson.jpg?itok=ysmDaSjD&fc=50,50' />
            </div>            
        );
    }
}

export default ProPix;