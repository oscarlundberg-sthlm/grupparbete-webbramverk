import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'
import styled from 'styled-components'

const ReturnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 400px;
        height: 38px;
        border-radius: 5px;
        padding: 10px 15px;
        border: 1px solid grey;
    }
    textarea {
        width: 400px;
        height: 100px;
        border-radius: 5px;
        padding: 10px 15px;
        border: 1px solid grey;
    }
    select {
        width: 400px;
        height: 38px;
        border-radius: 5px;
        padding: 5px 15px;
        border: 1px solid grey;
    }
    label {
        font-size: 18px;
    }
    button {
        width: 400px;
        height: 38px;
    }
    .backButton {
        width: 70px;
        height: 30px;
        border-color: grey;
        margin: 10px 0px;
    }
`


 function UpdateItem({ match }) {
    const [item, setItem] = useState({})
    const history = useHistory()

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        try {
            const response = await fetch(`http://localhost:5000/products/${match.params.id}`)
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status)
            }
            const data = await response.json()
            console.log(data)
            setItem(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await fetch('http://localhost:5000/products/' + item['_id'], {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });

            history.push('/admin/ManageItems')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;

        setItem({
            ...item,
            [name]: e.target.value
        })
    }

    return (
        <ReturnDiv>
            <h1>Update Product</h1>

            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                item={item}
                pageId="udate-item"
            />
            
        </ReturnDiv>
    )
}

export default UpdateItem