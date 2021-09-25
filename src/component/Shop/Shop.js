import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON').then(res => res.json()).then(data => setProducts(data))
    }, [])

    const HandleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Product product={product} key={product.key} HandleCart={HandleCart} ></Product>)
                }
            </div>

            <div >
                <Cart cart={cart} ></Cart>
            </div>

        </div >
    );
};


export default Shop;