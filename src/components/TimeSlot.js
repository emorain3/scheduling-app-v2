import React, { Component } from 'react';
import ModalAppointment from './ModalAppointment';
import styled from 'styled-components';
/////////////////////////////////////////////////////////          DEMO FACTS          /////////////////////////////////////////////////////////////////////////////////////
//     Interesting features: The Modal and TimeSlot button are linked. The modal always exists within the dDOM of this project it's invivibility is just changed. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////// STYLING
let ClickableTile = styled.div`
    cursor: pointer;
    opacity: .8;
    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
`


/////////////////////////////////
/////////// COMPONENT DEFINITION
////////////////////////////////

class TimeSlot extends Component {

    state = {
        modal_visibility: "modal", 
        tile_state: "tile is-child box"
    }


    ////  UTILITY FUNCTIONS  ////

        make_modal_invisible = () => {
            this.setState({modal_visibility: "modal"})
        }
        
        make_modal_visible = () => {
            this.setState({modal_visibility: "modal is-active"})
        }

        set_tile_red = () => {
            this.setState({tile_state: "tile is-child is-danger is-light"})
        }

        set_tile_initial = () => {
            this.setState({tile_state: "tile is-child box"})
        }

        on_tile_select = () => {
            this.make_modal_invisible()
            this.set_tile_red()
        }


    render() {
        return (
            <div>

                <button
                    onClick={this.make_modal_visible} 
                    className={`button ${this.state.tile_state} is-fullwidth is-large is-responsive`}>
                    {this.props.time} 
                </button>
                
                <ModalAppointment
                    modal_visibility={this.state.modal_visibility}
                    make_modal_invisible={this.make_modal_invisible}
                    make_modal_visible={this.make_modal_visible}
                    set_tile_initial={this.set_tile_initial}
                    on_tile_select={this.on_tile_select}
                    time={this.props.time}
                />
            </div>
        );
    }
}





export default TimeSlot;