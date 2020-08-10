import React,{Fragment} from 'react';

function Question(props){
     
    return(
        <Fragment>
            <h2>{props.question}</h2>
            <button>Yes</button>
            <button>No</button>
            <button>Maybe</button>
        </Fragment>
        
    )

}

export default Question;
