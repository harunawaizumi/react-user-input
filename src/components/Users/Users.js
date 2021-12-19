import React from 'react';
import ReactDOM from 'react-dom';
import UserItem from './UserItem';
import List from '@mui/material/List';

const Users = (props) => {
  console.log(props.items);
  return (
    <React.Fragment>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </List>
    </React.Fragment>
  )
};

export default Users;
