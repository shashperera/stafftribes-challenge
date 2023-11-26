import React from 'react';
import Box from '@mui/material/Box';
import Week from './Week';

// Main component managing all weeks
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

  return (
    <Box sx={{ width: 550, marginInlineStart: 20 }}>
      {weeks.map((week, index) => (
        <Week key={index} weekNumber={index} state={week} onSliderChange={handleSliderChange} onCheckboxChange={handleCheckboxChange} />
      ))}
    </Box>
  );
}

export default DayAvailability;
