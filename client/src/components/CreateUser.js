import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://studentsprofiles.onrender.com/create', { name, email, age })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="users">
      <div className="users-form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="form-input">
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="">Age:</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="button button-submit-update">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
