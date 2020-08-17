import React, { Component } from 'react'
import { Products } from '../api/Products'

export class ProductComponent extends Component {

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
                <h3>{this.state.product.nome}</h3>
                <span className="product-proce">
                    <b>Price:</b>
                    R$ {this.state.product.price}
                </span>
                <p>
                    {this.state.product.description}
                </p>
            </div>
        )
    }
}