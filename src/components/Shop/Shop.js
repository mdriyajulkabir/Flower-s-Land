import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import('./Shop.css');

const Shop = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./output.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    const addToCart = (items) => {
        const newCart = [...cart, items];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="item-container row row-cols-1 row-cols-md-3 g-4">
                {
                    items.map(item => <Item
                        item={item}
                        key={item._id}
                        addToCart={addToCart}
                    >

                    </Item>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;