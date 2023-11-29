import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, TableHead } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function AvailabilityResults({ name, availability, availableFor, action }) {
  return (
      <TableRow sx={{ width: '25%' }}>
        <TableCell sx={{ marginLeft: 50 }}>{name}</TableCell>
        <TableCell>Weeks {availability.join(', ')}</TableCell>
        <TableCell><IconButton style={{ color: '#28afd5' }}>
                   <VisibilityIcon />
                 </IconButton>
                 <IconButton style={{ color: '#66c427' }}>
                   <SendIcon />
                 </IconButton>
                 <IconButton style={{ color: '#fdd62b' }}>
                   <EmailIcon />
                 </IconButton>
                 <IconButton style={{ color: '#b19be0' }}>
                   <ChatBubbleIcon />
                 </IconButton>
                 <IconButton style={{ color: 'red' }}>
                   <PersonRemoveIcon />
                 </IconButton></TableCell>
      </TableRow>
  );
}

export default AvailabilityResults;
