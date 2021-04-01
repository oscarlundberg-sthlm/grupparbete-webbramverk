import React, { useState } from 'react'
import '../App.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



// ITEM render/function
function Product( { item }) {
    return (
        
        <Wrapper> 
            <Link to={`/Item/${item['_id']}`}>
        <Imgcontainer>
            <img src={item.image} alt="logo" />    
        </Imgcontainer>   
        <Infocontainer>
        <TitleContainer>
            <Title>{item.title}</Title>
        </TitleContainer>
            
            <Description>{item.description.substring(0, 256)}</Description>
            <Price><Span>$</Span>{item.price}</Price>
            <Stock>In stock: {item.stock}</Stock>
            <Btn>ADD TO CART</Btn> 
        </Infocontainer>
        </Link>
        </Wrapper>
        
    )
}

export default Product


// Styling
const Wrapper = styled.div`
width: 23rem;
height: 40rem;
padding: 2rem;
margin-bottom: 2.8rem;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 1rem;
-moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
`
const Infocontainer = styled.div `
height: 14rem;
`
const Imgcontainer = styled.div `
height: 220px;
width: 280px;
margin: 0 auto;
img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 100%;
    max-height: 100%;
}
`
const TitleContainer = styled.div `
height: 3rem;
`
const Title = styled.h1 `
color: #242424;
font-size: 1.1rem;
font-weight: 500;
text-transform: uppercase;
margin-top: 1.5rem;
`
const Description = styled.p `
height: 9rem;
font-size: .85rem;
`
const Price = styled.p `
font-size: 2rem;
color: #f34e1eca;
margin-top: 1.5rem; 
`
const Span = styled.span`
color: #f34e1ebb; 
font-size: 1.6rem;
font-weight: 700;
`
const Btn = styled.button`
width: 18rem;
height: 2.5rem;
border: none;
color: whitesmoke;
background-color: #f34e1ebb;
font-size: 1rem;


&:hover {
    background-color: #f34e1edd;
}
`
const Stock = styled.p `
font-size: .7rem;
margin-left: .2rem;
margin-bottom: 1rem;
`