import React, {useState} from 'react';
import FlatButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const UserForm = (props) => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setNewAge(event.target.value);
  }

  const submitHander = (event) => {
    event.preventDefault();
    const newUserData = {
      name: newName,
      age: newAge
    }
        console.log('new user');
        console.log(newUserData);
    props.saveUserDataHandler(newUserData);

    setNewName('');
    setNewAge('');
  }



  return (
    <form onSubmit={submitHander}>
    <TextField id="standard-basic" label="name" variant="standard" onChange={nameChangeHandler}/>
    <TextField id="standard-basic" label="age" variant="standard" onChange={ageChangeHandler}/>
    <FlatButton type="submit" variant="contained">Submit</FlatButton>
    </form>
  )
};

export default UserForm;
