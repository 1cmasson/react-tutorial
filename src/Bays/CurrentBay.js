import React from 'react';
import Bay from './Bay';



function CurrentBay(props){
    
return (
        <div>
            <h1>You Are Currently Signed Into </h1>
            <Bay aisle = {props.aisle} bay = {props.bay}></Bay>
        </div>

);

}

export default CurrentBay;