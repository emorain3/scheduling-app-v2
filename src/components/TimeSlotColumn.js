import React from 'react';
import TimeSlot from './TimeSlot'
import { useSelector } from "react-redux";


//  ---- Originally these values were hard-coded   
// PROS: Cohesive. Single-responsibility. This component only generates the Time SLot Column. No data is stored here. Translated to larger projects with MANY classes.
// CONS: Tightly Coupled.   If someone else were t work on this it would not be immediately obvious that there is a critical dependency in this class. 



function TimeSlotColumn() {
    const time_range_list = useSelector(state => state.timeWindowReducer)
    return (

        <div class="columns">
            <div class="column">
            </div>


            <div class="column is-one-quarter">
                {time_range_list.map( time => {
                    return <TimeSlot time = {time} />
                })}
            </div>


            <div class="column">
            </div>

        </div>
        
    );
}


export default TimeSlotColumn;