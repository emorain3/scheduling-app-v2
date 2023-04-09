import React, { Component } from 'react';
import ModalAppointment from './ModalAppointment';
import styled from 'styled-components';




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
            this.setState({tile_state: "tile is-child notification is-danger"})
        }

        on_tile_select = () => {
            this.make_modal_invisible()
            this.set_tile_red()
        }


    render() {
        return (
            <div>

                <ClickableTile>
                    <div onClick={this.make_modal_visible} class={this.state.tile_state}>
                        <p class="title"> {this.props.time} </p>
                    </div>
                </ClickableTile>
                
                <ModalAppointment
                    modal_visibility={this.state.modal_visibility}
                    make_modal_invisible={this.make_modal_invisible}
                    make_modal_visible={this.make_modal_visible}
                    on_tile_select={this.on_tile_select}
                    time={this.props.time}
                />
            </div>
        );
    }
}





export default TimeSlot;