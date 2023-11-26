import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomSlider from './CustomSlider';

const daysOfWeek = ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07'];

function DayAvailability() {
  const [selectedRanges, setSelectedRanges] = React.useState([[0, 2], [3, 5]]);

  const handleSliderChange = (values) => {
    setSelectedRanges(values);
    // Display the updated values in the console
    console.log('Updated Values:', values.map(range => `${daysOfWeek[range[0]]} - ${daysOfWeek[range[1]]}`));
  };

  return (
    <Box sx={{ width: 550, marginInlineStart: 20 }}>
      <Typography variant="caption" gutterBottom>
        First Range: {daysOfWeek[selectedRanges[0][0]]} - {daysOfWeek[selectedRanges[0][1]]}
      </Typography>
      <Typography variant="caption" gutterBottom>
        Second Range: {daysOfWeek[selectedRanges[1][0]]} - {daysOfWeek[selectedRanges[1][1]]}
      </Typography>
      <CustomSlider value={selectedRanges.flat()} onChange={handleSliderChange} />
    </Box>
  );
}

export default DayAvailability;
