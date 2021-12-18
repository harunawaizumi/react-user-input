import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const UserItem = (props) => {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.name}
          secondary={props.age}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  )
};

export default UserItem;
