import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => (
    <div className="menu">
        <div className="container">
          <div className="left">
            <Link to="/">
              <h1>Amazing Store</h1>
            </Link>
          </div>
          <div className="right">
            <Link className="menu-item" to="/">
              PRODUCTS
            </Link>
            <Link className="menu-item" to="/cart">
              CART
            </Link>
          </div>
          <div className="clear"></div>
        </div>
      </div>
)