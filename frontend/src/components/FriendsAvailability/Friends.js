import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useGlobalContext } from '../../context/globalContext';
import AvailabilityResults from './AvailabilityResults';

function Friends() {
  const { friends, getFriends } = useGlobalContext();

  useEffect(() => {
    console.log("Context value:", { friends, getFriends });
    if (!friends || !friends.length) {
      // If friends is undefined or an empty array, fetch data
      const fetchData = async () => {
        const data = await getFriends();
        console.log("Fetched Data:", data);
      };
  
      fetchData();
    }
  }, [friends, getFriends]);
  

  return (
    <div>
      <h1>Friends</h1>
      <div className="income-content">
        <div className="form-container">
          {/* Include your Form component here */}
        </div>
      </div>
      <div>
        <div className="income">
          {friends && friends.map((friend) => (
            <AvailabilityResults
              key={friend._id}
              id={friend._id}
              name={friend.name}
              availability={friend.availability}
              action={friend.action}
              indicatorColor="var(--color-green)"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
