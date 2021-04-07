import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Tablerow = styled(motion.tr)`
    .admin-edit-btn {
        background-color: #B58CE9;
    }
    .admin-edit-btn:hover {
        background-color: #8C37F9;
    }
    .admin-delete-btn {
        background-color: #E98C8C;
    }
    .admin-delete-btn:hover {
        background-color: #E83030;
    }
`

function AdminTableRow({ item, deleteItem, listIndex }) {

    const handleDeleteBtn = () => {
        deleteItem(item['_id']);
    }

    const ItemTitleFormatted = () => {
        const cutOff = item.title.indexOf('|');
        return cutOff > 0 ? item.title.substring(0, cutOff) : item.title;
    };

    return (
        <Tablerow
            initial={{
                opacity: 0,
                y: '100%'
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: listIndex * 0.05,
                type: "tween"
            }}
        >
            <td className={'admin-table-column-title'}>{ItemTitleFormatted()}</td>
            <td className={'admin-table-column-category'}>{item.category}</td>
            <td className={'admin-table-column-stock'}>{item.stock}</td>
            <td className={'admin-table-column-price'}>{item.price}</td>
            <td className={'admin-table-column-buttons'}>
                <Link to={`/admin/UpdateItem/${item['_id']}`}><button className={'admin-edit-btn'}>Edit</button></Link>
                <button className={'admin-delete-btn'} onClick={handleDeleteBtn}>Delete</button>
            </td>
        </Tablerow>
    )
}

export default AdminTableRow
