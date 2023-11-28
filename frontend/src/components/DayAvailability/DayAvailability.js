import React from 'react';
import Box from '@mui/material/Box';
import Week from './Week';
import './DayAvailability.css';
import { Alert, Button } from '@mui/material';
import { useGlobalContext } from '../../context/globalContext';

// Component to manage all the weeks

function DayAvailability() {
  // Access the global context
  const { handleCheckboxChange } = useGlobalContext();

  // State for all weeks
  const [weeks, setWeeks] = React.useState(Array.from({ length: 7 }, (_, i) => i).map(() => ({ selectedRanges: [[0, 2], [3, 5]], sliderDisabled: false })));
  const [showAlert, setShowAlert] = React.useState(false);

  // Handler for slider value change
  const handleSliderChange = (weekNumber, values) => {
    setWeeks((prevWeeks) => {
      const newWeeks = [...prevWeeks];
      newWeeks[weekNumber].selectedRanges = values;
      return newWeeks;
    });
  };

// Handler for checkbox change
const handleCheckboxChangeLocal = (weekNumber) => {
  // Call the global context function
  handleCheckboxChange(weekNumber);

  // Add a console.log to see the output
  console.log(`Checkbox changed for week ${weekNumber + 1}`);

  // Update the local state if needed
  setWeeks((prevWeeks) => {
    const newWeeks = [...prevWeeks];
    newWeeks[weekNumber].sliderDisabled = !newWeeks[weekNumber].sliderDisabled;
    return newWeeks;
  });
};

  // Toggle of adding/removing a new range to the slider on button click
  const handleToggleRangeClick = (weekNumber) => {
    setWeeks((prevWeeks) => {
      const newWeeks = [...prevWeeks];
      const currentRanges = newWeeks[weekNumber].selectedRanges;

      // If there is only one range, add a new range; otherwise, remove the last range
      if (currentRanges.length === 1) {
        newWeeks[weekNumber].selectedRanges.push([currentRanges[0][1] + 1, currentRanges[0][1] + 3]);
      } else {
        newWeeks[weekNumber].selectedRanges.pop();
      }
      // Toggle the displayAddRange flag
      newWeeks[weekNumber].displayAddRange = !newWeeks[weekNumber].displayAddRange;
      return newWeeks;
    });
  };

  const handleSaveClick = () => {
    // Handle the save action for all weeks
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000); // 1 second timeout
  };

  return (
    <Box sx={{ width: '80%', marginInlineStart: 10 }}>
      {weeks.map((week, index) => (
        <Week
          key={index}
          weekNumber={index}
          state={week}
          onSliderChange={handleSliderChange}
          onCheckboxChange={handleCheckboxChangeLocal}
          onToggleRangeClick={handleToggleRangeClick}
        />
      ))}
      <Button sx={{ color: '#fff', float: 'right', backgroundColor: '#1890ff',marginTop:2 }} onClick={handleSaveClick}>
        Save
      </Button>

      {showAlert && (
        <Alert
          severity="success"
          sx={{ position: 'fixed', top: '10%', left: '80%', transform: 'translate(-50%, -50%)' }}
        >
          Updated your week availability
        </Alert>
      )}
    </Box>
  );
}

export default DayAvailability;
