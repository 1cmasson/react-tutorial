import React from 'react';
import Bay from './Bay';
//import CurrentBay from './CurrentBay';
import NextBay from './NextBay';

class Bays extends React.Component{
    state ={
        bays:[
            {aisle: 1, bay: 2},
            {aisle: 1, bay: 4},
            {aisle: 1, bay: 6},
            {aisle: 1, bay: 8},
        ],
        title:"Next Bay List"
    }

    goToNextAisle = (bays) => {
     
        
        const newState = this.state.bays.map((bay) =>{
            const tempBay = bay;
            tempBay.aisle += 1;
            return tempBay;
        });

        this.setState({
            newState
        });
    }

    render(){
        return(
            <div className = "data block">
                <NextBay aisle = {this.state.bays[0].aisle} bay= {this.state.bays[0].bay} ></NextBay>
                <br></br>
                <h1>{this.state.title}</h1>
                <Bay aisle = {this.state.bays[1].aisle}>{this.state.bays[1].bay}</Bay>
                <Bay aisle = {this.state.bays[2].aisle}>{this.state.bays[2].bay}</Bay>
                <Bay aisle = {this.state.bays[3].aisle}>{this.state.bays[3].bay}</Bay>
                <button onClick ={this.goToNextAisle}>Go to Next Aisle</button>
            </div>

        );
    }
}





export default Bays;
