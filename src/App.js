import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ProductsList } from './views/Products'
import { Product } from './views/Product'
import { Store } from './store'
import { Cart } from './views/Cart'
import { Menu } from './components/Menu'
import './App.css'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Menu></Menu>
        <div id="main-app"> 
            <Route path='/' component={ProductsList} exact></Route>
            <Route path='/product/:id' component={Product} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
