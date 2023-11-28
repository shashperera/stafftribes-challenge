import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGlobalContext } from '../../context/globalContext';
import AvailabilityResults from './AvailabilityResults';

function Friends() {
  const { friends, getFriends, getJustForFunFriends, justForFunFriends, getMoreSeriousFriends, moreSeriousFriends, setFilteredFriends } = useGlobalContext();
  const [category, setCategory] = useState('All'); // Initialize category state

  useEffect(() => {
    const fetchData = async () => {
      await getFriends();
    };

    fetchData();
  }, []);

  //handle just for fun and more srious filters
  const handleCategoryButtonClick = async (selectedCategory) => {
    // Handle button clicks for different categories
    setCategory(selectedCategory); // Update category state
    if (selectedCategory === 'JustForFun') {
      // Fetch just for fun friends
      await getJustForFunFriends();
    } else if (selectedCategory === 'MoreSerious') {
      // Fetch more serious friends
      await getMoreSeriousFriends();
    }
  };



  return (
    <div>
      <div className="filter-buttons">
        <ButtonGroup>
          <Button onClick={() => handleCategoryButtonClick('JustForFun')}>
            Just For Fun
          </Button>
          <Button onClick={() => handleCategoryButtonClick('MoreSerious')}>
            More Serious
          </Button>
        </ButtonGroup>
      </div>
      {/* <div className="filter-buttons">
        <ButtonGroup>
          <Button onClick={() => handleAvailabilityFilter('All')}>
            All ({getFilteredFriendCount('All')})
          </Button>
          <Button onClick={() => handleAvailabilityFilter('This Week')}>
            This Week ({getFilteredFriendCount('1')})
          </Button>
          <Button onClick={() => handleAvailabilityFilter('Next Week')}>
            Next Week ({getFilteredFriendCount('Next Week')})
          </Button>
          <Button onClick={() => handleAvailabilityFilter('Best Week')}>
            Best Week ({getFilteredFriendCount('Best Week')})
          </Button>
        </ButtonGroup>

        <FormControl>
          <InputLabel id="week-filter-label">Week</InputLabel>
          <Select
            labelId="week-filter-label"
            id="week-filter"
            value={weekFilter}
            onChange={(e) => handleWeekFilter(e.target.value)}
          >
            <MenuItem value="1">Week 01</MenuItem>
            <MenuItem value="2">Week 02</MenuItem>
            <MenuItem value="3">Week 03</MenuItem>
            <MenuItem value="4">Week 04</MenuItem>
            <MenuItem value="5">Week 05</MenuItem>
            <MenuItem value="6">Week 06</MenuItem>
            <MenuItem value="7">Week 07</MenuItem>
          </Select>
        </FormControl>
      </div> */}


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><th>Name</th></TableCell>
              <TableCell><th>Availability</th></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {(category === 'JustForFun' ? justForFunFriends :
              (category === 'MoreSerious' ? moreSeriousFriends : [])
            )
              .map((friend) => (
                <AvailabilityResults
                
                  key={friend._id}
                  name={friend.name}
                  availability={friend.availability}
                  action={friend.action}
                  indicatorColor="var(--color-green)"
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}

export default Friends;
