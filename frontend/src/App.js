import React from 'react';
import './App.css';
import AvailabilityResults from './components/FriendsAvailability/AvailabilityResults';
import DayAvailability from './components/DayAvailability/DayAvailability';
import { useGlobalContext } from './context/globalContext';
import Friends from './components/FriendsAvailability/Friends';

function App() {


  const global = useGlobalContext()
  console.log(global)


  return (
    <div className="App">
      <div className="card">
        <h2>MY FRIENDS</h2>
        <Friends/>
        {/* <AvailabilityResults /> */}
      </div>

      <div className="card">
        <h2>MY AVAILABILITY FOR THE NEXT 7 WEEKS</h2>
        <DayAvailability />
      </div>
    </div>
  );
}

export default App;
