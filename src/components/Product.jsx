import React, { useState } from 'react'
import Pic from '../logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// Styling
const Wrapper = styled.div`
border: solid black;
width: 25rem;
padding: 2rem;

`


// ITEM render/function
function Product( { item }) {
    return (
        <Link to={`/Item/${item['_id']}`}>
        <Wrapper> 
        <div>
            <img src={Pic} alt="logo" width="300"/>    
        </div>   
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.stock}</p>
            
        </div>
        </Wrapper>
        </Link>
    )
}

export default Product
