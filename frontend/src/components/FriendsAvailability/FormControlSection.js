import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function FormControlSection({ handleWeekChange, selectedWeek, response }) {
  return (
    <div className="filter-buttons" style={{ marginTop: 5 }}>
      Availability:
      <ButtonGroup sx={{ marginLeft: 2 }}>
        <Button onClick={() => handleWeekChange({ target: { value: null } })}>
          All ({response.length})
        </Button>
        <Button onClick={() => handleWeekChange({ target: { value: '1' } })}>
          This week ({response.length})
        </Button>
        <Button onClick={() => handleWeekChange({ target: { value: '2' } })}>
          Next week ({response.length})
        </Button>
        <Button onClick={() => handleWeekChange({ target: { value: '5' } })}>
          Best Week ({response.length})
        </Button>
      </ButtonGroup>
      <FormControl sx={{ marginLeft: 2, width: 800, height: 50 }}>
        <InputLabel id="choose-week-label">Choose Week </InputLabel>
        <Select
          labelId="choose-week-label"
          style={{ width: '150px' }}
          value={selectedWeek}
          onChange={handleWeekChange}
        >
          {['1', '2', '3', '4', '5', '6', '7'].map((week) => (
            <MenuItem key={week} value={week}>
              {`Week ${week}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FormControlSection;
