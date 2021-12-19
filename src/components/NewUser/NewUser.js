import React from 'react';
import UserForm from './UserForm';
import List from '@mui/material/List';

const NewUser = (props) => {
  const saveUserDataHandler = (newUserData) => {
    props.onAddUser(newUserData);
  }
  return (
    <div>
      <UserForm saveUserDataHandler={saveUserDataHandler}/>
    </div>
  )
};

export default NewUser;
