import React from 'react';
import { Link } from 'react-router-dom';
import SigngelProduct from '../SigngelProduct/SigngelProduct';

const Product = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-content-center'>
                <Link className='text-decoration-none m-3' to={'/1'}>brackfast</Link>
                <Link className='text-decoration-none m-3' to={'/lunch'}>Leach</Link>
                <Link className='text-decoration-none m-3' to={'/2'}>Denar</Link>

            </div>
            <SigngelProduct></SigngelProduct>
        </div>
    );
};

export default Product;