import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Users() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://studentsprofiles.onrender.com/')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('https://studentsprofiles.onrender.com/deleteuser/' + id)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="users">
      <div className="users-form">
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/edit/${user._id}`}
                      className="button button-update"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="button button-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/create" className="button button-add">
          Add +
        </Link>
      </div>
    </div>
  );
}

export default Users;
