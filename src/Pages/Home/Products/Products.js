import React, { useState } from 'react';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // fetch("http://localhost:5000/products")
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         //setLoading(false);
    //     })

    console.log(products);

    return (
        <div>
            <h2>This is products</h2>
        </div>
    );
};

export default Products;