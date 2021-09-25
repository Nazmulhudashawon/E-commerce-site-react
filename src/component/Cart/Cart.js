import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    let shipping = 0;
    cart.map(product => (total = total + product.price, shipping = shipping + product.shipping))

    // for (const product of cart) {
    //     total = total + product.price;
    // }

    const totaltax = total * 0.07;
    const totalamount = total + totaltax + shipping;






    return (
        <div className="order">

            <h3>Order Summary</h3>
            <p>Items ordered: {props.cart.length}</p>


            <table>
                <tr><td>items:</td><td className="td"> ${total.toFixed(2)}</td></tr>
                <tr><td>Shipping & Handling: </td><td className="td">${shipping.toFixed(2)}</td></tr>
                <tr><td>tax:</td><td className="td"> ${totaltax.toFixed(2)}</td></tr>
            </table>
            <h3>Total= ${totalamount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;