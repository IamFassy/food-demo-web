import { getCategories, httpMethods } from 'apimanager/Environment';
import NetworkManager from 'apimanager/NetworkManager';
import React from 'react';
import { useEffect } from 'react';
import './Product.scss';

const Product = () => {
    useEffect(() => {
        NetworkManager.request(getCategories, httpMethods.get)
            .then((res) => {
                console.log(res, "res");
            })
    })
    return (
        <div className="product-container">
            <p>Product</p>
        </div>
    )
}

export default Product;
