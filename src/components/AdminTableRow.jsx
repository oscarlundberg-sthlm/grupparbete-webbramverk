import React from 'react';

function AdminTableRow({ item, deleteItem }) {
    
    const handleDeleteBtn = () => {
        deleteItem(item['_id']);
    }

    return (
        <tr>
            <td className={'admin-table-column-title'}>{item.title}</td>
            <td className={'admin-table-column-category'}>{item.category}</td>
            <td className={'admin-table-column-stock'}>{item.stock}</td>
            <td className={'admin-table-column-price'}>{item.price}</td>
            <td className={'admin-table-column-buttons'}>
                <button>Edit</button>
                <button onClick={handleDeleteBtn}>Delete</button>
            </td>
        </tr>
    )
}

export default AdminTableRow
