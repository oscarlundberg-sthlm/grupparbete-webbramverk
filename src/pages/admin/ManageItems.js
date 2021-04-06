import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import AdminTableRow from '../../components/AdminTableRow';
import {getAllItems} from '../../functions/GetAllItems';

const ReturnDiv = styled.div`
    --tableWidth: 70vw;
    --tableCellPadding: 10px;
`;
const HeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 20px auto;
    width: var(--tableWidth);
    > * {
        padding: 0 var(--tableCellPadding);
    }
    .admin-create-btn {
        background-color: #5C8FF2;
        outline: 0px solid #ececec;
    }
    .admin-create-btn:hover {
        background-color: #3579FD;
        outline: 10px solid #ececec;
    }
`;

const Table = styled.table`
    margin: 0 auto;
    width: var(--tableWidth);
    border-collapse: collapse;
    thead tr th {
        border-bottom: 3px solid #d3d3d3;
    }
    td, th {
        padding: var(--tableCellPadding);
    }
    tbody > tr:hover {
        background-color: #ececec;
    }
    .admin-table-column-title, 
    .admin-table-column-category {
        text-align: left;
    }
    .admin-table-column-stock, 
    .admin-table-column-price {
        text-align: right;
    }
    .admin-table-column-buttons {
        text-align: right;
        white-space: nowrap;
    }
    .admin-table-column-buttons > button {
        margin-left: calc(var(--tableCellPadding) / 2);
    }
`;


function ManageItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems().then(data => setItems(data));
    }, []);

    const deleteItem = async (itemID) => {
        try {
            await fetch(`http://localhost:5000/products/${itemID}`, {
                method: 'DELETE'
            });
            getAllItems().then(data => setItems(data));
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <ReturnDiv>
            <HeadDiv>
                <h2>Admin panel</h2>
                <Link to="/admin/CreateItem"><button className={'admin-create-btn'}>Add Product</button></Link>
            </HeadDiv>
            <Table>
                <thead>
                    <tr>
                        <th className={'admin-table-column-title'}>Product</th>
                        <th className={'admin-table-column-category'}>Category</th>
                        <th className={'admin-table-column-stock'}>Stock</th>
                        <th className={'admin-table-column-price'}>Price {"($)"}</th>
                        <th className={'admin-table-column-buttons'}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => (
                        <AdminTableRow key={item['_id']} item={item} deleteItem={deleteItem} listIndex={index} />
                    )) }
                </tbody>
            </Table>
        </ReturnDiv>
    )
}

export default ManageItems
