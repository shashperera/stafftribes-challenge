import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Friends from './Friends';

// function createData(id, name, availability, action) {
//   return { id, name, availability, action };
// }

// const rows = [
//   createData(1, 'Shashi', 1, 'View'),
//   createData(2, 'Rakitha', 237, 'View'),
//   createData(3, 'Madhara', 262, 'View'),
// ];

function AvailabilityResults({ id, name, availability, action }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell align="right"><b>Availability</b></TableCell>
              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">Weeks {availability}</TableCell>
              <TableCell align="right"><Button>View</Button></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AvailabilityResults;
