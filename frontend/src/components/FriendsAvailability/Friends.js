import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useGlobalContext } from '../../context/globalContext';
import AvailabilityResults from './AvailabilityResults';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

function Friends() {
  const {
    friends,
    getFriends,
    getJustForFunFriends,
    justForFunFriends,
    getMoreSeriousFriends,
    moreSeriousFriends,
    setFilteredFriends,
  } = useGlobalContext();

  const [category, setCategory] = useState('JustForFun');

  useEffect(() => {
    const fetchData = async () => {
      // Get all friends initially
      await getFriends();

      // Then, get Just For Fun friends
      await getJustForFunFriends();
    };

    fetchData();
  }, []);

  const handleCategoryButtonClick = async (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'JustForFun') {
      await getJustForFunFriends();
    } else if (selectedCategory === 'MoreSerious') {
      await getMoreSeriousFriends();
    }
  };

  return (
    <div>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card sx={{ padding: 2, textAlign: 'left' }}>
          <div className="filter-buttons">
            <ButtonGroup sx={{ marginLeft: 2 }}>
              <Button onClick={() => handleCategoryButtonClick('JustForFun')}>
                Just For Fun
              </Button>
              <Button onClick={() => handleCategoryButtonClick('MoreSerious')}>
                More Serious
              </Button>
            </ButtonGroup>
          </div>
          <div className="filter-buttons" style={{ marginTop: 5 }}>
            Availability:
            <ButtonGroup sx={{ marginLeft: 2 }}>
              <Button>All</Button>
              <Button>This Week</Button>
              <Button>Next Week</Button>
              <Button>Best Week</Button>
            </ButtonGroup>
            <FormControl sx={{ marginLeft: 2, width:800, height:50}}>
              <InputLabel id="choose-week-label">Choose Week  </InputLabel>
              <Select labelId="choose-week-label" style={{ width: '150px' }}>
                <MenuItem value="Week 01">Week 01</MenuItem>
                <MenuItem value="Week 02">Week 02</MenuItem>
                <MenuItem value="Week 03">Week 03</MenuItem>
                <MenuItem value="Week 04">Week 04</MenuItem>
                <MenuItem value="Week 05">Week 05</MenuItem>
                <MenuItem value="Week 06">Week 06</MenuItem>
                <MenuItem value="Week 07">Week 07</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Card>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <pre><h3>Name                                                          Availability                                                                  Action options</h3></pre>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(category === 'JustForFun' ? justForFunFriends :
              (category === 'MoreSerious' ? moreSeriousFriends : friends)
            ).map((friend) => (
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