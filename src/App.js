import './App.css';
import React from 'react';
import Content from './Components/Content/Content';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      pagdf djfd
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Content/>}/>
                  </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
