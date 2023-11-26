import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function Availability() {
  const Separator = styled('div')(({ theme }) => `
    height: ${theme.spacing(3)};
  `);

  const weeks = [
    { value: 10, label: 'Day 01' },
    { value: 20, label: 'Day 02' },
    { value: 30, label: 'Day 03' },
    { value: 40, label: 'Day 04' },
    { value: 50, label: 'Day 05' },
    { value: 60, label: 'Day 06' },
    { value: 70, label: 'Day 07' },
  ];

  const [firstValueSlider1, setFirstValueSlider1] = useState(30);
  const [lastValueSlider1, setLastValueSlider1] = useState(50);
  const [firstValueSlider1Slider, setFirstValueSlider1Slider] = useState(10);

  const [firstValueSlider2, setFirstValueSlider2] = useState(20);
  const [lastValueSlider2, setLastValueSlider2] = useState(40);

  function valuetext(value) {
    return `${value}`;
  }

  const handleSlider1Change = (event, newValue) => {
    setFirstValueSlider1(newValue[0]);
    setLastValueSlider1(newValue[1]);
  };

  const handleSlider1SliderChange = (event, newValue) => {
    setFirstValueSlider1Slider(newValue);
  };

  const handleSlider2Change = (event, newValue) => {
    setFirstValueSlider2(newValue[0]);
    setLastValueSlider2(newValue[1]);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      {/* First slider with two handles */}
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        value={[firstValueSlider1Slider, lastValueSlider1]}
        onChange={handleSlider1SliderChange}
        marks={weeks}
      />
      <Separator />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      {/* Second slider with two handles */}
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        value={[firstValueSlider2, lastValueSlider2]}
        onChange={handleSlider2Change}
        marks={weeks}
      />
    </Box>
  );
}

export default Availability;
