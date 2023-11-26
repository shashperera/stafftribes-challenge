import './App.css';
import AvailabilityResults from './components/AvailabilityResults';
import DayAvailability from './components/DayAvailability';



function App() {
  return (
    <div className="App">
      <div class="cardresults">
        {/* <AvailabilityResults/> */}
      </div>
     <div>
      <h2> My Availability for the next 7 weeks</h2>
      <DayAvailability/>
     </div>
    </div>
  );
}

export default App;
