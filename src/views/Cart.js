import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'
import './Products.css'

class CartComponent extends Component{

    render(){
        return (
            <div>
                <h3>Meus produtos</h3>
                <ul>
                    {this.props.products.map( product => (
                        <li>
                            <img width="100" src={require(`../assets/images/${product.image}`)} alt={product.name} />
                            <h4>{product.name}</h4>
                            <span>R$ {product.price.toFixed(2)}</span>
                            <button className="btn-remove" onClick={() => this.props.removeFromCart(product)}>Remove From Cart</button>
                        </li>
                    ) )}
                </ul>
                <p className="border-top">
                    <b>Amount: </b>R$ {this.props.products.reduce( (acc, curent) => acc + curent.price, 0 ).toFixed(2)}
                </p>
            </div>
        )
    }

}

const mapStateToProps = ( { cart } ) => ( {
    products: cart.products
} )

export const Cart = connect(
    mapStateToProps,
    { removeFromCart },
)(CartComponent)