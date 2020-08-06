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

    

    render(){
        return(
            <div className = "data block">
                <NextBay aisle = {this.state.bays[0].aisle} bay= {this.state.bays[0].bay} ></NextBay>
            </div>

        );
    }
}





export default Bays;
