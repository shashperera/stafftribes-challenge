import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function AvailabilityResults({ name, availability, availableFor, action }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">Weeks {availability.join(', ')}</TableCell>
              <TableCell align="right">
                <IconButton onClick={action} style={{ color: '#28afd5' }}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={action} style={{ color: '#66c427' }}>
                  <SendIcon />
                </IconButton>
                <IconButton onClick={action} style={{ color: '#fdd62b' }}>
                  <EmailIcon />
                </IconButton>
                <IconButton onClick={action} style={{ color: '#b19be0' }}>
                  <ChatBubbleIcon />
                </IconButton>
                <IconButton onClick={action} style={{ color: 'red' }}>
                  <PersonRemoveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AvailabilityResults;
