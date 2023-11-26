import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomSlider from './Slider/CustomSlider';

// Slider component for each week
function WeekSlider({ selectedRanges, onSliderChange, sliderDisabled }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Typography variant="caption" gutterBottom>
        First Range: {selectedRanges[0][0]} - {selectedRanges[0][1]}
      </Typography>
      <Typography variant="caption" gutterBottom>
        Second Range: {selectedRanges[1][0]} - {selectedRanges[1][1]}
      </Typography> */}
      <CustomSlider value={selectedRanges.flat()} onChange={onSliderChange} disabled={sliderDisabled} />
    </Box>
  );
}

export default WeekSlider;
