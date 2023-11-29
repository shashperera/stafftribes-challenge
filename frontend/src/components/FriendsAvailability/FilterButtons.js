import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function FilterButtons({ handleCategoryButtonClick, handleWeekChange }) {
  return (
    <div className="filter-buttons">
      <ButtonGroup sx={{ marginLeft: 2 }}>
        <Button onClick={() => handleCategoryButtonClick('JustForFun')}>Just For Fun</Button>
        <Button onClick={() => handleCategoryButtonClick('MoreSerious')}>More Serious</Button>
      </ButtonGroup>
    </div>
  );
}

export default FilterButtons;
