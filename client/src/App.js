import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Board';
import Axios from 'axios';
import BoardTop from './BoardTop';

function App() { 
  const [listData, setListData] = useState([]);
  
  const getData = () => {
    Axios.get("http://localhost:8000/list")
    .then((res) => {
      console.log(res.data);
      setListData(res.data);
    });
  }

  useEffect(getData, []);

  return (
    <div className='App'>
        <BoardTop/>
        <Board items={listData}/>
    </div>
  );
}


export default App;
