import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function FilterButtons({ handleCategoryButtonClick, handleWeekChange }) {
  const [justForFunVariant, setJustForFunVariant] = useState('contained');
  const [moreSeriousVariant, setMoreSeriousVariant] = useState('outlined');

  const handleJustForFunClick = () => {
    setJustForFunVariant('contained');
    setMoreSeriousVariant('outlined');
    handleCategoryButtonClick('JustForFun');
  };

  const handleMoreSeriousClick = () => {
    setJustForFunVariant('outlined');
    setMoreSeriousVariant('contained');
    handleCategoryButtonClick('MoreSerious');
  };

  return (
    <div className="filter-buttons">
      <ButtonGroup sx={{ marginLeft: 2 }}>
        <Button variant={justForFunVariant} onClick={handleJustForFunClick}>
          Just For Fun
        </Button>
        <Button variant={moreSeriousVariant} onClick={handleMoreSeriousClick}>
          More Serious
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FilterButtons;
