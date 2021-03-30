import React, {useEffect, useState} from 'react'
import AdminTableRow from '../../components/AdminTableRow';

function ManageItems() {
    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        getAllItems();
    }, [])

    return (
        <div>
            <table style={{borderCollapse: 'collapse', textAlign: 'left'}}>
                <thead style={{backgroundColor: '#DDDDDD'}}>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Manage Item</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item) => (
                        <AdminTableRow key={item['_id']} item={item} />
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ManageItems
