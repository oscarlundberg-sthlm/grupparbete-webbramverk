import React, { useState, useEffect } from 'react'
import Product from '../components/Product'

function Items( ) {
    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        console.log(data)
        setItems(data);
    };

    useEffect(() => {
        getAllItems();
        
    }, []);


    return (
        <div className="itemsContainer">
            
            {
                items.map( (item) => (
                    <Product key={item['_id']} item={item}/>
                ))
            }
            
        </div>
    )
}

export default Items
