import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Checkbox component for each week
function WeekCheckbox({ weekNumber, checked, onChange }) {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={() => onChange(weekNumber)} />}
      label={`Week ${weekNumber + 1}`}
    />
  );
}

export default WeekCheckbox;
