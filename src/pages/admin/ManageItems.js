import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import AdminTableRow from '../../components/AdminTableRow';

const colorOrange = "#f34e1e";
const colorLilac = "#db7093";
const colorYellow = "#f3b661";

const ReturnDiv = styled.div`
    --tableWidth: 70vw;
    --tableCellPadding: 10px;
`;
const HeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 20px auto;
    min-width: 679px;
    width: var(--tableWidth);
    > * {
        padding: 0 var(--tableCellPadding);
    }
`;

const Table = styled.table`
    margin: 0 auto;
    min-width: var(--tableWidth);
    border-collapse: collapse;
    thead {
        background-image: linear-gradient(to top right, ${colorLilac}, ${colorYellow});
        color: white;
    }
    td, th {
        padding: var(--tableCellPadding);
    }
    tbody > tr:hover {
        background-color: ${colorYellow + '22'};
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
    }
    .admin-table-column-buttons > button {
        margin-left: calc(var(--tableCellPadding) / 2);
    }
`;


function ManageItems() {
    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        getAllItems();
    }, []);

    const deleteItem = async (itemID) => {
        try {
            await fetch(`http://localhost:5000/products/${itemID}`, {
                method: 'DELETE'
            });
            getAllItems();
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <ReturnDiv>
            <HeadDiv>
                <h2>Admin panel</h2>
                <Link to="/admin/CreateItem"><button>Add a product</button></Link>
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
                    { items.map((item) => (
                        <AdminTableRow key={item['_id']} item={item} deleteItem={deleteItem} />
                    )) }
                </tbody>
            </Table>
        </ReturnDiv>
    )
}

export default ManageItems
