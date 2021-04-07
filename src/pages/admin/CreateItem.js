import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'
import { ReturnDiv } from '../../style/Form-style'


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
        <ReturnDiv
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.6 }}
        >
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