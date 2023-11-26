import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './CustomSlider.css';

const daysOfWeek = ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07'];

function CustomSlider({ value, onChange, disabled }) {
  const handleChange = (values) => {
    const transformedValues = [
      [values[0], values[1]],
      [values[2], values[3]],
    ];
    onChange(transformedValues);
  };

  return (
    <Slider
      range
      min={0}
      max={6}
      step={1}
      value={value}
      onChange={handleChange}
      marks={{
        0: daysOfWeek[0],
        1: daysOfWeek[1],
        2: daysOfWeek[2],
        3: daysOfWeek[3],
        4: daysOfWeek[4],
        5: daysOfWeek[5],
        6: daysOfWeek[6],
      }}
      disabled={disabled}
    />
  );
}

export default CustomSlider;
