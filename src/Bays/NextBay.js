import React from 'react';
import Bay from './Bay';



function NextBay(props){
    
return (
        <div>
            <h1>Right Now You Are Signed Into Bay</h1>
            <Bay aisle = {props.aisle} bay = {props.bay}></Bay>
            <br></br>
            
            
        </div>

);

}

export default NextBay;