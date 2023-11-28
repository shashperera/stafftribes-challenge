import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';
import { useGlobalContext } from '../../context/globalContext';
import AvailabilityResults from './AvailabilityResults';

function Friends() {
  const { friends, getFriends, getJustForFunFriends, justForFunFriends, getMoreSeriousFriends, moreSeriousFriends, setFilteredFriends } = useGlobalContext();
  const [category, setCategory] = useState('All');

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
