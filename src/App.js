import React from 'react';
import './App.css';
import AvailabilityResults from './components/FriendsAvailability/AvailabilityResults';
import DayAvailability from './components/DayAvailability/DayAvailability';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2>My Friends</h2>
        <AvailabilityResults />
      </div>

      <div className="card">
        <h2>My Availability for the next 7 weeks</h2>
        <DayAvailability />
      </div>
    </div>
  );
}

export default App;
