import React, { Component } from 'react';
import styled from 'styled-components';
import TimeSlot from './TimeSlot'

import { connect } from "react-redux";
import { stat } from 'fs';


let ColumnShape = styled.div`
    padding-top: 2vw;
    width: 20vw;
`



class TimeSlotColumn extends Component {

    render() {
        return (
            <ColumnShape>
                {this.props.time_range_list.map( time => {
                    return <TimeSlot time = {time} />
                })}
            </ColumnShape>
        );
    }
}

const mapStateToProps = state => {
    return {time_range_list: state.time_range_list}
}

export default connect(mapStateToProps)(TimeSlotColumn);