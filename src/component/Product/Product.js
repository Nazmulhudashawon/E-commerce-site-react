import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { useState } from 'react';

const Product = (props) => {
    const { name, img, price, seller, stock, features } = props.product;

    return (
        <div className="product">
            <div className="image"></div>
            <img src={img} alt="" />
            <div className="product-details">
                <h4>{name}</h4>
                <h5>by: {seller}</h5>
                <p>${price}</p>
                <p> only {stock} left in stock - order soon  </p>
                <button className="purchase-btn" onClick={() => props.HandleCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>

        </div>
    );
};

export default Product;