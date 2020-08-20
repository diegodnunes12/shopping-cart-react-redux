import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ProductsList } from './views/Products'
import { Product } from './views/Product'
import { Store } from './store'
import { Cart } from './views/Cart'
import './App.css'

function App() {
  return (
    <Provider store={Store}>
      <div className="menu">
        <div className="container">
          <a href="/">
          <h1>Amazing Store</h1>
          </a>
        </div>
      </div>
      <div id="main-app">
        
        <BrowserRouter>
          <Route path='/' component={ProductsList} exact></Route>
          <Route path='/product/:id' component={Product} exact></Route>
          <Route path='/cart' component={Cart} exact></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
