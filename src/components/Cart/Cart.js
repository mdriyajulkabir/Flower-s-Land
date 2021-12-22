import React from 'react';
import './cart.css';

const Cart = (props) => {
    let total = 0;
    let selectName = '';
    for (const cart of props.carts) {
        total = total + cart.price
    }
    for (const names of props.carts) {
        selectName = names.name + ',' + '\n' + selectName + '\n';

    }
    return (
        <div className='cart'>
            <h1><span className='text-danger'> Flowers</span> Add Summary</h1> <br />
            <h3> Flower Added: {props.carts.length}</h3>
            <h4>Total: {total}.00 ৳</h4>
            <br />
            <p><span className='list fw-bold fs-3'> Flower List:</span> <span className='list-name'> {selectName}</span></p>
        </div>
    );
};

export default Cart;