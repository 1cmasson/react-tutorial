import React from 'react';
import Bay from './Bay';
import CurrentBay from './CurrentBay';
import Question from './Question';

class Bays extends React.Component{
    state ={
        bays:[
            {aisle: 1, bay: 2},
            {aisle: 1, bay: 4},
            {aisle: 1, bay: 6},
            {aisle: 1, bay: 8},
        ],
        title: "Next Bay List",
        questions:[
            {question: "Is Bay set to POG?", answers:{question1:0, question2:0, question3:0}},
            {question: "Ones and Outs packed down?" ,answers:{question1:0, question2:0, question3:0}},
            {question: "Bay Decontaminated?" , answers:{question1:0, question2:0, question3:0}}
        ]
    }

    goToNextAisle = (aisle) => {
     
        
        const newState = this.state.bays.map((aisle) =>{
            const tempAisle = aisle;
            if(tempAisle.aisle > 19){
                tempAisle.aisle = 1;
            }else {
                tempAisle.aisle += 1;
            }
            
            return tempAisle;
        });

        this.setState({
            newState
        });
    }

    goToNextBay = (bay) => {
     
        
        const newState = this.state.bays.map((bay) =>{
            const tempBay = bay;
            if(tempBay.bay === 30){
                tempBay.bay = 1;
                
            }else if(tempBay.bay === 31){
                tempBay.bay = 2;
                tempBay.aisle += 1;
            } else {
                tempBay.bay += 2;
            }
            
            return tempBay;
            
        });

        this.setState({
            newState
        });
    }

    render(){
        return(
            <div className = "data block">
                <CurrentBay aisle = {this.state.bays[0].aisle} bay= {this.state.bays[0].bay} ></CurrentBay>
                <br></br>
                <div>
                <h1>CheckList</h1>
                <Question question = {this.state.questions[0].question}/>
                <Question question = {this.state.questions[1].question}/>
                <Question question = {this.state.questions[2].question}/>
                </div>
                <br></br>
                <div>
                <h1>{this.state.title}</h1>
                <Bay aisle = {this.state.bays[1].aisle}  bay= {this.state.bays[1].bay}/>
                <Bay aisle = {this.state.bays[2].aisle} bay= {this.state.bays[2].bay}/>
                <Bay aisle = {this.state.bays[3].aisle} bay= {this.state.bays[3].bay}/>
                <button onClick ={this.goToNextAisle}>Go to Next Aisle</button>
                <button onClick ={this.goToNextBay}>Go to Next Bay</button>
                <br></br>
                </div>
                
            </div>
        );
        
    }
}





export default Bays;
