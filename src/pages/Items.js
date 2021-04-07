import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { getAllItems } from '../functions/GetAllItems';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems().then((data) => setItems(data));
  }, []);

  return (
    <div className="itemsContainer">
      {items.map((item) => (
        <Product key={item['_id']} item={item} />
      ))}
    </div>
  );
}

export default Items;
