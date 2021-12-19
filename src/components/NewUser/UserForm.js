import React, {useState, useRef} from 'react';
import FlatButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [error, setError] = useState('');

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setNewAge(event.target.value);
  }

  const submitHander = (event) => {
    event.preventDefault();
    if (newName.length === 0 || newAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valide name and age'
      });
      return;
    }
    if (+newAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid name and age'
      })
      return ;
    }
    const newUserData = {
      name: newName,
      age: newAge
    }
    props.saveUserDataHandler(newUserData);

    setNewName('');
    setNewAge('');
  }

const errorHandler = () => {
  setError(null);
}


  return (
    <div>
  {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <form onSubmit={submitHander}>
    <TextField id="standard-basic" label="name" variant="standard" value={newName} onChange={nameChangeHandler}/>
    <TextField id="standard-basic" label="age" variant="standard" value={newAge} onChange={ageChangeHandler}/>
    <FlatButton type="submit" variant="contained">Submit</FlatButton>
    </form>
    </div>
  )
};

export default UserForm;
