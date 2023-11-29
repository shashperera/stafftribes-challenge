import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AvailabilityResults from './AvailabilityResults';


function FriendsTable({ category, justForFunFriends, moreSeriousFriends, friends }) {
  return (
    <Table sx={{ minWidth: 500 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <pre>
              <h3>Name Availability Action options</h3>
            </pre>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {(category === 'JustForFun'
          ? justForFunFriends
          : category === 'MoreSerious'
          ? moreSeriousFriends
          : friends
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
  );
}

export default FriendsTable;
