import React from 'react';


function CurrentBay(props){
return (
        <div>
            <h1>Right Now You Are Signed Into Bay</h1>
            <h2>Aisle: {props.aisle} | CurrentBay: {props.children}</h2>
            <button>Go to Next Bay</button>
        </div>

);

}

export default CurrentBay;