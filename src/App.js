import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ProductsList } from './views/Products'
import { Product } from './views/Product'
import { Store } from './store'
import './App.css'

function App() {
  return (
    <Provider store={Store}>
      <div id="main-app">
        <h1>Amazing Store</h1>
        <BrowserRouter>
          <Route path='/' component={ProductsList} exact></Route>
          <Route path='/product/:id' component={Product} exact></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
