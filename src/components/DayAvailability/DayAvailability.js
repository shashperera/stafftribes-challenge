import React from 'react';
import Box from '@mui/material/Box';
import Week from './Week';
import './DayAvailability.css';


// Compoenent to manage all the weeks
const daysOfWeek = ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07'];

function DayAvailability() {
  // State for all weeks
  const [weeks, setWeeks] = React.useState(Array.from({ length: 7 }, (_, i) => i).map(() => ({ selectedRanges: [[0, 2], [3, 5]], sliderDisabled: false })));

  // Handler for slider value change
  const handleSliderChange = (weekNumber, values) => {
    setWeeks((prevWeeks) => {
      const newWeeks = [...prevWeeks];
      newWeeks[weekNumber].selectedRanges = values;
      return newWeeks;
    });
  };

  // Handler for checkbox change
  const handleCheckboxChange = (weekNumber) => {
    setWeeks((prevWeeks) => {
      const newWeeks = [...prevWeeks];
      newWeeks[weekNumber].sliderDisabled = !newWeeks[weekNumber].sliderDisabled;
      return newWeeks;
    });
  };

  // //Handling of adding a new range to slider on button click
  // const handleAddRangeClick = (weekNumber) => {
  //   setWeeks((prevWeeks) => {
  //     const newWeeks = [...prevWeeks];
  //     const currentRange = newWeeks[weekNumber].selectedRanges[0];
  //     newWeeks[weekNumber].selectedRanges.push([currentRange[1] + 1, currentRange[1] + 3]); // Add a new range
  //     return newWeeks;
  //   });
  // };

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

  return (
    <Box sx={{ width: '80%', marginInlineStart: 10 }}>
      {weeks.map((week, index) => (
        <Week
          key={index}
          weekNumber={index}
          state={week}
          onSliderChange={handleSliderChange}
          onCheckboxChange={handleCheckboxChange}
          onToggleRangeClick={handleToggleRangeClick}
        />
      ))}
    </Box>
  );
}

export default DayAvailability;
