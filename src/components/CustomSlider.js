import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const daysOfWeek = ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07'];

function CustomSlider({ value, onChange }) {
  const trackStyle = { backgroundColor: '#1890ff' };
  const handleStyle = { borderColor: '#1890ff' };
  const railStyle = { backgroundColor: '#bfbfbf' };

  const handleChange = (values) => {
    // Ensure that the first range ends on values[1] without connecting with the second range
    const transformedValues = [
      [values[0], values[1]],
      [values[1] + 1, values[1] + 2], // Set the second range to start from values[1] without connecting
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
      trackStyle={[trackStyle, trackStyle]}
      handleStyle={[handleStyle, handleStyle]}
      railStyle={railStyle}
      marks={{
        0: daysOfWeek[0],
        1: daysOfWeek[1],
        2: daysOfWeek[2],
        3: daysOfWeek[3],
        4: daysOfWeek[4],
        5: daysOfWeek[5],
        6: daysOfWeek[6],
      }}
    />
  );
}

export default CustomSlider;
