import React from 'react';
import WeekCheckbox from './WeekCheckbox';
import WeekSlider from './WeekSlider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './DayAvailability.css';


// Combined component for each week containing checkbox, slider, and add/remove range button
function Week({ weekNumber, state, onSliderChange, onCheckboxChange, onToggleRangeClick }) {
  const { selectedRanges, sliderDisabled, displayAddRange } = state;

  return (
    <Box className="weekBox" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 3}}>
    <WeekCheckbox weekNumber={weekNumber} checked={!sliderDisabled} onChange={onCheckboxChange} />
    <WeekSlider selectedRanges={selectedRanges} onSliderChange={(values) => onSliderChange(weekNumber, values)} sliderDisabled={sliderDisabled} />
    {sliderDisabled ? null : (
      <IconButton onClick={() => onToggleRangeClick(weekNumber)} sx={{ marginLeft: 2, color: '#fff', backgroundColor: '#1890ff', width: 30, height: 30 }} className="button-primary">
        {displayAddRange ? <AddIcon /> : <RemoveIcon />}
      </IconButton>
    )}
  </Box>
  );
}

export default Week;
