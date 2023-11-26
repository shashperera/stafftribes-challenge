import React from 'react';
import './App.css';
import AvailabilityResults from './components/FriendsAvailability/AvailabilityResults';
import DayAvailability from './components/DayAvailability/DayAvailability';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2>MY FRIENDS</h2>
        <AvailabilityResults />
      </div>

      <div className="card">
        <h2>MY AVAILABILITY FOR THE NEXT 7 WEEKS</h2>
        <DayAvailability />
      </div>
    </div>
  );
}

export default App;
