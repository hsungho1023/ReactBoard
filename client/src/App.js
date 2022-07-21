import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Board';
import Axios from 'axios';
import BoardTop from './BoardTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  const [listData, setListData] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:8000/list")
    .then((res) => {
      console.log(res.data);
      setListData(res.data);
    });
  }

  useEffect(getData, [listData]);

  return (
    <div className='App'>
      <BrowserRouter>
        <BoardTop/>
        <Routes>
          <Route path="/" element={<Board items={listData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
