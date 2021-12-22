import React from 'react';
import img1 from '../../images/4129d3b263697ca647b06ef5e07c344f_original.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='container mt-3'>
            <h1>Welcome To Flower Land</h1>
            <img className='img-thumbnail mb-3' src={img1} alt="" />
            <h1>40 Item Collections Of Flowers</h1>
            <h2>Our Total Garden budget 1000$</h2>
            <h2>Buy Your Favourite Flower Plants</h2>
        </div>
    );
};

export default Header;