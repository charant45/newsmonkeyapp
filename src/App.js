import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

const App = ()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar height={3}
        color='red'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key='General' pageSize={pageSize} country="in" category = "General"/>}></Route>
          <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey}  key='General' pageSize={pageSize} country="in" category = "General"/>}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey}  key='Business' pageSize={pageSize} country="in" category = "Business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key='Entertainment' pageSize={pageSize} country="in" category = "Entertainment"/>}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey}  key='Health' pageSize={pageSize} country="in" category = "Health"/>}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey}  key='Science' pageSize={pageSize} country="in" category = "Science"/>}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey}  key='Sports' pageSize={pageSize} country="in" category = "Sports"/>}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey}  key='Technology' pageSize={pageSize} country="in" category = "Technology"/>}></Route>
        </Routes>
      </Router> 
      </>
    )
}

export default App