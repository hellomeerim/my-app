import './App.css';
import React from 'react';
import Content from './Components/Content/Content';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllComponents from './Components/AllComponents';

function App() {
  return (
    <div>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllComponents/>}/>
                  </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
