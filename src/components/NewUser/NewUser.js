import React from 'react';
import UserForm from './UserForm';
import List from '@mui/material/List';

const NewUser = (props) => {
  const saveUserDataHandler = (newUserData) => {
    const userData = {
      ...newUserData,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
  }
  return (
    <div>
      <UserForm saveUserDataHandler={saveUserDataHandler}/>
    </div>
  )
};

export default NewUser;
