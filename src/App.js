import './App.css';
import React from "react";
import MainPage from "./ Components/Main/MainPage";
import LoginPage from "./Login/LoginPage";
import {Routes, Route,  Navigate} from 'react-router-dom';

const App = () => {


  return (
    <div className='app'>
        <Routes>
            <Route exact path='/' element={<Navigate to='/main'/>} />
            <Route path='/main/' element={<MainPage/>} />
            <Route path='/login/*' element={<LoginPage/>} />
        </Routes>
     </div>
  );
}

export default App;
