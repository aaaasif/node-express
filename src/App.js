import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[users, setUsers] = useState([]);

  useEffect( () =>{
    fetch('http://localhost:5000/users')
    .then(res =>res.json())
    .then(data =>setUsers(data));

  },[])
  return (
    <div className="App">
      <h2>Found users: {users.length}</h2>
    </div>
  );
}

export default App;
