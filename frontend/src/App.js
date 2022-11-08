import React, { useState, useEffect} from 'react';
import { BrowserRouter} from "react-router-dom";

import YodlrApi from './api';
import Routes from './routes/Routes';
import NavBar from './routes/Navbar';
import './App.css';

function App() {

  const [user, setUser] = useState();

  async function register(registrationData){
    try{
      let user = await YodlrApi.register(registrationData);
      setUser(user);
      return {success : true}
    }catch(err){
      console.error("Registration failed", err);
      return {success : false, err }
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes register={register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
