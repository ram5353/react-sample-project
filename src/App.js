import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {

  const [usersList, setUsersList] = useState([])

  const addUsersList = (uName, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {username: uName, age: age, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUsersList}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
