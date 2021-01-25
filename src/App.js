import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Combine from './components/Combine';
import Bidet from './components/Bidet';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Combine}></Route>
        <Route exact path="/bidet" component={Bidet}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
