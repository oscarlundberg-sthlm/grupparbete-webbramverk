import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'
import { ReturnDiv } from '../../style/Form-style'


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
        <ReturnDiv
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.6 }}
        >
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