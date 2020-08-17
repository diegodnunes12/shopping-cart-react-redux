import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {ProductsList} from './views/Products'
import { ProductComponent } from './views/Product'
import './App.css'

function App() {
  return (
    <div id="main-app">
        <h1>Amazing Store</h1>
        <BrowserRouter>
          <Route path='/' component={ProductsList} exact></Route>
          <Route path='/product/:id' component={ProductComponent} exact></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
