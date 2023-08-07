import React, { Component } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import {connect} from 'react-redux'



let Padding = styled.div`
    padding-bottom: 2vw;
`

const initialState = {name: '', number: '', emails: '', bookingNotes:''}


class ModalAppointment extends Component {

    state = {
        name: '',
        number: '',
        emails: '',
        bookingNotes:'',
      }

    resetModalValues = () => {
        this.setState(initialState);
    }

    storeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
   

    render() {
        const {name, number, emails, bookingNotes} = this.state;
        const date = this.props.dateReducer;
        return (
            <div>
                <div class= {this.props.modal_visibility}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head has-text-left">
                                <p class="modal-card-title"> <p class="is-size-5"> 60 MINUTE CALL </p>
                                    <p class="is-size-6"> <span class="iconis-small"> <i class="fas fa-clock"></i> 1 hour</span> </p>
                                    <p class="is-size-6"> <span> <i class="fas fa-location-dot"></i> Online Zoom Call </span> </p>
                                </p> 
                                <span class="column is-two-fifths"> 
                                    <p> {date} </p> 
                                    <p> {this.props.time} - {parseInt(this.props.time.substring(0,2)) === 12 ? 1 : parseInt(this.props.time.substring(0,2)) + 1} {parseInt(this.props.time.substring(0,2)) > 11 || (this.props.time.slice(-2) === "pm") ? "pm" : "am"} </p>  
                                    <p class="is-clickable" onClick={this.props.make_modal_invisible}>Edit timeslot <i class="fas fa-pencil is-small  has-text-danger"></i> </p> 
                                </span>
                                
                        <button onClick={this.props.make_modal_invisible} class="delete" aria-label="close"></button>
                        </header>

                        <section class="modal-card-body  has-text-left  ">
                            <h1 class="subtitle is-3  has-text-weight-semibold"> Contact </h1>
                            <div class="field">
                                <label class="label"> Name* </label>
                                <div class="control">
                                    <input onChange={this.storeValue} class="input" type="text" name="name" value={name} placeholder="e.g Alex Smith"/>
                                </div>
                            </div>

                            <Padding> </Padding>

                            <div class="field">
                                <label class="label"> Phone Number </label>
                                <div class="control">
                                    <input onChange={this.storeValue} class="input" type="tel" name="number" value={number} placeholder="e.g. 999-999-999"/>
                                </div>
                            </div>

                            <div class="field  is-flex-direction-row  is-justify-content-center "> 
                                 <label class="label"> E-mail* </label>
                                    <div class="columns is-gapless">
                                        <div class="column is-four-fifth">
                                            <div class="control">
                                                <input onChange={this.storeValue} class="input" type="email" name="emails" value={emails}/>
                                            </div>
                                        </div>  
                                        <span class="column is-one-fifth" ><button class="button"> Add Guests</button> </span>
                                     </div>
                                
                            </div>

                            <div class="field">
                                <label class="label"> Notes for booking </label>
                                <div class="control">
                                    <textarea onChange={this.storeValue} class="textarea" type="tel" name="bookingNotes" value={bookingNotes} placeholder="optional"> </textarea>
                                </div>
                            </div>

                        </section>

                        <footer class="modal-card-foot">
                        <button onClick={this.props.on_tile_select} class="button is-danger  is-rounded  is-fullwidth"> Book It </button>
                        <button onClick={() => {this.props.make_modal_invisible(); this.props.set_tile_initial(); this.resetModalValues()}} class="button  is-rounded">Cancel</button>
                        </footer>
                    </div>
                </div>
                
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        dateReducer: state.dateReducer
    }
}

export default connect(mapStateToProps)(ModalAppointment);