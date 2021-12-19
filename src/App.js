import react, {useState} from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
import './App.css';
import Button from '@mui/material/Button';
const DUMMY_USERS = [
  {
    id: 'e1',
    name: 'Ryusei',
    age:28
  },
  {
    id: 'e2',
    name: 'Haruna',
    age: 31
  },
  {
    id: 'e3',
    name: 'Noriko',
    age: 58
  }
]
function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (props) => {
    setUsers((prevUser) => {
      return [{name: props.name, age: props.age, id: Math.random().toString() }, ...prevUser];
    });
  }
  console.log(ReactDOM);
  return (
    <div>
      <div id="test"></div>
     {ReactDOM.createPortal(<Button variant="text">Text</Button>, document.getElementById('root'))}
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
}

export default App;
