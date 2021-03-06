import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {

  const [username, setUseername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const usernameDataHandler = (event) => {
    setUseername(event.target.value)
  }

  const ageDataHandler = (event) => {
    setAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age"
        })
        return;
    }

    props.onAddUser(username, age)
    setUseername('')
    setAge('')
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} ></ErrorModal>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={usernameDataHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" min={1} value={age} onChange={ageDataHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    </div>
  );
};

export default AddUser;