import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import 'bulma/css/bulma.min.css';
import TimeSlotColumn from './components/TimeSlotColumn'
import { createStore } from "redux";
import { Provider } from "react-redux";



///////// STYLING

let PageContainer = styled.div`
    padding-top: 2vw;
    background-color: #f5f5f5;
    height: 100vh;
`

let ScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
`



//////// REDUX UTILITIES
let timeWindowReducer = () => {
  return {
    time_range_list: ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
  }
}
const store = createStore(timeWindowReducer);



/////////////////////////////////
/////////// COMPONENT DEFINITION
////////////////////////////////

function App() {

  //////// CONSTANTS
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currDate = new Date().toLocaleDateString(undefined, options);
  // const currTime = new Date().toLocaleTimeString();
  

  return (
    <PageContainer className="App">
        <Provider store={store}>
          <h1 class="subtitle is-2">
            Single-Page Appointment Schdeuling Front-End
          </h1>
          <h1 class="subtitle is-5">
            {currDate} 
          </h1>
            
          {/* <ScheduleContainer> */}
            <TimeSlotColumn/>  
          {/* </ScheduleContainer> */}
        </Provider>
          
        
      </PageContainer>
  );
}

export default App;
