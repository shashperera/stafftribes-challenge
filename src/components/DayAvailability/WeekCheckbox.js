import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Checkbox component for each week
function WeekCheckbox({ weekNumber, checked, onChange }) {
  return (
    <FormControlLabel
      sx={{ display: 'flex', alignItems: 'center', marginRight: 4 }}
      label={`Week ${weekNumber + 1}`}
      control={<Checkbox checked={checked} onChange={() => onChange(weekNumber)} />}
    />
  );
}

export default WeekCheckbox;
