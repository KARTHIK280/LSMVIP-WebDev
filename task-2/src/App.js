import React,{Component, useState} from 'react';
import { render } from '@testing-library/react';
import './App.css';

function App() {
  const [users,setUser] = useState([]);

  const loadUsers = async() =>{ 
    console.log("before await");

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonResponse = await response.json();

    setUser(jsonResponse.data);
    console.log(users);
  }

  return (
      <div className="container">

          <div className="first">
                    <h2>ZIPPY</h2>
                    <button onClick={loadUsers}>Get Data</button>
                    <h4><span class="blink">press the button to get user data</span> </h4>
               
          </div>


          <div className="second">
                <div className="main-sec">
                  {users.map(({id,email,first_name,last_name,avatar}) =>(
                    <div className="users">
                         <img key={id} src={avatar}></img>
                         <h3 key = {id}>{first_name} {last_name}</h3>
                         <p>{email}</p>
                    </div>
                  ))}
                </div>
           </div>


      </div>

  );
}

export default App;