import React from 'react';
import WeekCheckbox from './WeekCheckbox';
import WeekSlider from './WeekSlider';
import Box from '@mui/material/Box';


// Combined component for each week containing checkbox and slider
function Week({ weekNumber, state, onSliderChange, onCheckboxChange }) {
  const { selectedRanges, sliderDisabled } = state;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
      <WeekCheckbox weekNumber={weekNumber} checked={!sliderDisabled} onChange={onCheckboxChange} />
      <WeekSlider selectedRanges={selectedRanges} onSliderChange={(values) => onSliderChange(weekNumber, values)} sliderDisabled={sliderDisabled} />
    </Box>
  );
}

export default Week;
