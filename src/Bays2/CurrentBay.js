import React from 'react';


class CurrentBay extends React.Component{
    state ={
        bays:[
            {aisle: 1, bay: 2},
            {aisle: 1, bay: 4},
            {aisle: 1, bay: 6},
            {aisle: 1, bay: 8},
        ],
        aisles:[
            {bay: [
                {question1:0, question2:0 , question3: }
            ]}
        ]
        ,
        title: "Next Bay List",
        questions:[
            {question: "Is Bay set to POG?"},
            {question: "Ones and Outs packed down?"},
            {question: "Bay Decontaminated?"}
        ]
    }


    render(){
        return(<h1>Hello World</h1>);
        
    }
}





export default CurrentBay;
