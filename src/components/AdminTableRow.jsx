import React from 'react'

function AdminTableRow({ item }) {
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default AdminTableRow
