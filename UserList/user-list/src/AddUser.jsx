import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  // State to track user input
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  // Function to handle form submission
  const handleAddUser = () => {
    // Check if all fields are filled
    if (username && gender && dob) {
      // Create a new user object
      const newUser = {
        username,
        gender,
        dob,
      };

      // Pass the new user to the parent component
      onAddUser(newUser);

      // Clear the input fields after submission
      setUsername('');
      setGender('');
      setDob('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddUser}>Submit</button>
    </div>
  );
};

export default AddUser;
