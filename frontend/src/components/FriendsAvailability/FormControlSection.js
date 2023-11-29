import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const sharedStyle = {
  marginLeft: 2,
  height: 50,
  color: '#1890ff'
};

function FormControlSection({ handleWeekChange, selectedWeek, response }) {
  const [buttonVariant, setButtonVariant] = useState({
    all: 'contained',
    thisWeek: 'outlined',
    nextWeek: 'outlined',
    bestWeek: 'outlined'
  });

  const handleButtonClick = (value) => {
    setButtonVariant((prevVariants) => ({
      all: value === null ? 'contained' : 'outlined',
      thisWeek: value === '1' ? 'contained' : 'outlined',
      nextWeek: value === '2' ? 'contained' : 'outlined',
      bestWeek: value === '5' ? 'contained' : 'outlined',
    }));
    handleWeekChange({ target: { value } });
  };

  return (
    <div className="filter-buttons" style={{ marginTop: 5 }}>
      Availability:
      <ButtonGroup sx={{ ...sharedStyle }}>
        <Button variant={buttonVariant.all} onClick={() => handleButtonClick(null)}>
          All 
        </Button>
        <Button variant={buttonVariant.thisWeek} onClick={() => handleButtonClick('1')}>
          This week ({response.length})
        </Button>
        <Button variant={buttonVariant.nextWeek} onClick={() => handleButtonClick('2')}>
          Next week ({response.length})
        </Button>
        <Button variant={buttonVariant.bestWeek} onClick={() => handleButtonClick('5')}>
          Best Week ({response.length})
        </Button>
      </ButtonGroup>
      <FormControl sx={{ ...sharedStyle, width: 800 }}>
        <InputLabel id="choose-week-label">Choose Week </InputLabel>
        <Select
          labelId="choose-week-label"
          style={{ width: '150px', height: '100%', color: '#1890ff' }}
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
