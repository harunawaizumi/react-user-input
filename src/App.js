import react, {useState} from 'react';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
import './App.css';

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

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      console.log(user);
      console.log(users);

      return [user, ...prevUser];
    })
    console.log(users);
  }
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
}

export default App;
