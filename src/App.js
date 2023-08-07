import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import 'bulma/css/bulma.min.css';
import TimeSlotColumn from './components/TimeSlotColumn'


///////// STYLING

let PageContainer = styled.div`
    padding-top: 2vw;
    background-color: #f5f5f5;
    height: 100vh;
`



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
        
        <h1 class="subtitle is-2">
          Single-Page Time Slot Reservation Demo (Front-End Only)
        </h1>
        <h1 class="subtitle is-5">
          {currDate} 
        </h1>
          
        {/* <ScheduleContainer> */}
          <TimeSlotColumn/>  
        {/* </ScheduleContainer> */}
          
        
      </PageContainer>
  );
}

export default App;
