import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {ProductsList} from './views/Products'
import './App.css'

function App() {
  return (
    <div id="main-app">
        <h1>Amazing Store</h1>
        <BrowserRouter>
          <Route path='/' component={ProductsList} exact></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
