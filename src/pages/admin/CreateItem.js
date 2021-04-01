import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'
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


function CreateItem() {
    const [item, setItem] = useState({})
    const history = useHistory()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setItem({
            ...item,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })

            history.push('/admin/ManageItems')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ReturnDiv>
            <h1>Create Product</h1>

            <Form 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                item={item}
                pageId="create-item"
            />

        </ReturnDiv>
    )

}

export default CreateItem