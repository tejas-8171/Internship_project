import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users`);
    loadUser();
  }

  

  return (
    <div className="container">
      <div className="py-4">
        <h1>Admin Page</h1>
        <div className="search-filter">
            <input type="search" className="mb-3" placeholder="Search" />
        </div>
        <Link className="btn btn-success text-end mb-3 p-2" to='/adduser'>Add User +</Link>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn-outline-dark m-3" to={`/view/${user.id}`}><i class="fa-solid fa-eye"></i></Link>

                        <Link className="btn-outline-secondary m-3" to={`/edituser/${user.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>

                        <Link className="btn-outline-danger m-3" onClick={() => deleteUser(user.id)}><i class="fa-regular fa-trash-can"></i></Link>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
