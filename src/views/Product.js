import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Products } from '../api/Products'
import { addToCart } from '../actions'
import { Link } from 'react-router-dom'
import './Products.css'

class ProductComponent extends Component {

    state = {
        product:{}
    }

    async componentWillMount(){
        const product = await Products.getProductById(this.props.match.params.id)
        this.setState( { product } )
    }

    render(){
        return (
            <div className="product-page">
                {this.state.product.image && <img width="400" src={require(`../assets/images/${this.state.product.image}`)} alt={`${this.state.product.nome}`} /> }
                <h3>{this.state.product.name}</h3>
                <span className="product-price">
                    <b>Price: </b>
                    R$ {parseFloat(this.state.product.price).toFixed(2)}
                </span>
                <p>
                    {this.state.product.description}
                </p>
                <button onClick={() => this.props.addToCart(this.state.product)}>Add to cart</button>
                <p>
                    <Link to="/cart" className="btn-link">View Cart</Link>
                </p>
            </div>
        )
    }
}

export const Product = connect(
    undefined,
    { addToCart }
)(ProductComponent)