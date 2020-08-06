import React ,{useState} from 'react';


function NextBay(props){
    const[bay, setBay] = useState(props.bay);
    const[aisle, setAisle] = useState(props.aisle);
return (
        <div>
            <h1>Right Now You Are Signed Into Bay</h1>
            <h2>Aisle: {aisle} | NextBay: {bay}</h2>
            <button onClick={()=> setAisle(aisle + 1)}>Go to Next Aisle</button>
            <button onClick={()=> setBay(bay + 2)}>Go to Next Bay</button>
        </div>

);

}

export default NextBay;