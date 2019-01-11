import React, { Component } from 'react';
import "./Styles/Search.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Render:false
         };
        alert('search')
    }
    render() {
        return (
            <div>

                {myArray.map(i=>{
                    {if(Render){Top += 100;}Render=true}
                    return(
                        <div style ={{top:Top}} className = 'Content' >
                            
                        </div>                        
                    )
                })}              

            </div>            
        );
    }
}

export default Search;

var myArray = [1,2,3,4,5]
var Top = 10 , Render = false