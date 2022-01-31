import './App.css';
import { useState, useEffect } from 'react';
import Heading from './components/Heading';
import DiaryEntry from './components/DiaryEntry';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasePage from './components/BasePage';

function App() {

  const [entries, setEntries] = useState([])

  const publishHandler = (entry) => {
    setEntries([...entries, entry])
    axios.post("http://localhost:5000/entry/add",entry)
         .then((res) => {
           console.log(res.data)
         })
  }

  const editHandler = (entry) => {
    setEntries([...entries].map((en)=>{
      if (en.id !== entry.id){
        return en
      }
      else{
        return entry
      }
    }))
    axios.put(`http://localhost:5000/entry/edit/${entry.id}`, entry)
         .then((res) => {
           console.log(res.data)
         })
  }

  const findHandlerById = (id) => {
    return entries.find((entry)=>{
      return entry.id === id
    })
  }

  useEffect(()=>{
    axios.get("http://localhost:5000/entry")
         .then((res)=>{
           setEntries(res.data)
         })
        .catch((err)=>{
          console.log(err)
        })
  }, [])

  return (
    <Router>
      <Heading />
      <Routes>
        <Route exact path="/" element={<BasePage entries={entries}/>} />
        <Route exact path="/create" element={<DiaryEntry publishHandler={publishHandler}/>} />
        <Route path="/edit/:id" element={<DiaryEntry editHandler={editHandler} findHandler={findHandlerById}/>} />
      </Routes>
    </Router>
  );
}

export default App;
