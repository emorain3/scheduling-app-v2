import React, { Component } from 'react';
import styled from 'styled-components';
import TimeSlot from './TimeSlot'

import { connect } from "react-redux";
import { stat } from 'fs';


let ColumnShape = styled.div`
    border:1px solid black;
`
//  ---- Originally these values were hard-coded   
// PROS: Cohesive. Single-responsibility. This component only generates the Time SLot Column. No data is stored here. Translated to larger projects with MANY classes.
// CONS: Tightly Coupled.   If someone else were t work on this it would not be immediately obvious that there is a critical dependency in this class. 

class TimeSlotColumn extends Component {

    render() {
        return (

            <div class="columns">
                <div class="column">
                </div>


                <div class="column is-one-quarter">
                    {this.props.time_range_list.map( time => {
                        return <TimeSlot time = {time} />
                    })}
                </div>


                <div class="column">
                </div>

            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {time_range_list: state.time_range_list}
}

export default connect(mapStateToProps)(TimeSlotColumn);