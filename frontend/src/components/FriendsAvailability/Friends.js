import React, { useState, useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AvailabilityResults from './AvailabilityResults';  
import FilterButtons from './FilterButtons';  
import FormControlSection from './FormControlSection';  
import ResponseLengthDisplay from './ResponseLengthDisplay'; 
import { useGlobalContext } from '../../context/globalContext';

function Friends() {
  const {
    friends,
    getFriends,
    getJustForFunFriends,
    justForFunFriends,
    getMoreSeriousFriends,
    moreSeriousFriends,
    filterFriendsByWeek,
    setFilteredFriends,
  } = useGlobalContext();

  const [category, setCategory] = useState('JustForFun');
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [commonFriendsCount, setCommonFriendsCount] = useState(0);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getFriends();
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

    // Reset selected week and common friends count when changing the category
    setSelectedWeek(null);
    setCommonFriendsCount(0);
  };

  const handleWeekChange = async (e) => {
    const weekValue = e.target.value;
    setSelectedWeek(weekValue);
    filterFriends(weekValue);
    return weekValue;
  };

  const filterFriends = async (week) => {
    try {
      if (week) {
        const response = await filterFriendsByWeek(week);
        setResponse(response);
        // Calculate and set the common friends count
        setCommonFriendsCount(
          friends.filter(
            (friend) =>
              justForFunFriends.some((funFriend) => funFriend._id === friend._id) &&
              moreSeriousFriends.some((seriousFriend) => seriousFriend._id === friend._id)
          ).length
        );
      } else {
        const friendsList =
          category === 'JustForFun'
            ? justForFunFriends
            : category === 'MoreSerious'
              ? moreSeriousFriends
              : friends;

        // Reset common friends count
        setCommonFriendsCount(0);

        setResponse(friendsList);
      }
    } catch (error) {
      console.error('Error filtering friends:', error);
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
          <FilterButtons
            handleCategoryButtonClick={handleCategoryButtonClick}
            handleWeekChange={handleWeekChange}
            selectedWeek={selectedWeek}
            response={response}
          />
          <FormControlSection
            handleWeekChange={handleWeekChange}
            selectedWeek={selectedWeek}
            response={response}
          />
          {selectedWeek && <ResponseLengthDisplay response={response} />}
        </Card>
      </Box>
      <TableContainer sx={{ width: '100%' }} component={Paper}>
        <Table style={{ minwidth: 1000}}>
        <TableHead>
            <TableRow>
              <TableCell style={{ width: '23%' }}>
                <Typography variant="h6">Name</Typography>
              </TableCell>
              <TableCell style={{ width: '60%' }}>
                <Typography variant="h6">Availability</Typography>
              </TableCell>
              <TableCell style={{ width: '20%' }}>
                <Typography variant="h6">Action options</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {(category === 'JustForFun'
                ? justForFunFriends
                : category === 'MoreSerious'
                  ? moreSeriousFriends
                  : friends
              ).map((friend, index) => (
                <AvailabilityResults
                  key={friend._id}
                  name={friend.name}
                  availability={friend.availability}
                  action={friend.action}
                  indicatorColor="var(--color-green)"
                // Conditionally render header only for the first row
                />
              ))}
            </TableBody>
        </Table>

      </TableContainer>

    </div>

  );
}

export default Friends;
