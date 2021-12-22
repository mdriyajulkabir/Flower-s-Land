import React from 'react';
import('./Item.css')
const Item = (props) => {
    const { name, color, country, price, scientificName, url } = props.item;
    return (

        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={url} alt="" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Name: {name}</h5>
                        <p><span className='fw-bold'> Scientific Name:</span> {scientificName}</p>
                        <p><span className='fw-bold'> Country:</span> {country}</p>
                        <p><span className='fw-bold'>Color:</span> {color}</p>
                        <h5><span className='fw-bold'>Price: </span>{price}.00</h5>
                        <button onClick={() => props.addToCart(props.item)} className='cart-button'><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;