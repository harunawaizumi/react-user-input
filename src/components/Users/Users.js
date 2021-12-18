import React from 'react';
import UserItem from './UserItem';
import List from '@mui/material/List';

const Users = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </List>
  )
};

export default Users;
