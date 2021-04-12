import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Combine from './components/Combine';
import Water from './components/Water';
import Bidet from './components/Bidet';
import Detail from './components/Combine/Detail';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Combine}></Route>
        <Route exact path="/water" component={Water}></Route>
        <Route exact path="/bidet" component={Bidet}></Route>
        <Route exact path="/detail" component={Detail}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
