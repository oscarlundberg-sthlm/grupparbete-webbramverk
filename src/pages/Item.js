import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import Pic from '../logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom';




function Item({ match }) {
    const [singleItem, setSingleItem] = useState({});

    const getItemData = async () => {
        const response = await fetch(`http://localhost:5000/products/${match.params.id}`)
        const data = await response.json();
        
        setSingleItem(data);
    }

    useEffect(() => {
        getItemData();
    }, [])
        
    
    return (
        <Main>
        <Wrapper>
            <Imgcontainer>
            <img src={singleItem.image}alt="logo" width="400"/>  
            </Imgcontainer>
            <TextContainer>
                <Closecontainer>
                <Link to="/"><Closebtn>X</Closebtn></Link>
                
                    </Closecontainer>
                
           <Title >{singleItem.title}</Title>
           <Price><Span>$</Span>{singleItem.price}</Price>
           <Description>{singleItem.description}</Description>
           <Btn>ADD TO CART</Btn>
           <BtnH><i class="fa fa-heart"></i></BtnH>
            <Stock>In stock: {singleItem.stock}</Stock>
            
           </TextContainer>
           
           </Wrapper>
           </Main>
    )
}

export default Item



// Styling
const Main = styled.div `
display: inline-block;
position: relative;
left: 50%;
transform: translateX(-50%); 
margin-top: 80px;
height: 70vh;
`
const Wrapper = styled.div`
display: flex; 
justify-content: space-between;
width: 70rem;
height: 40rem;
padding: 1.5rem;
border-radius: 1rem;
-moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
`
const Imgcontainer = styled.div `
height: 400px;
width: 300px;
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

const TextContainer = styled.div `
width: 30rem;
`
const Title = styled.h1 `
color: #242424;
margin-top: 1rem;
font-size: 2.4rem;
font-weight: 500;
text-transform: uppercase;
`
const Price = styled.p `
font-size: 3rem;
color: #f34e1eca; 
`
const Span = styled.span`
color: #f34e1ebb; 
font-size: 2.3rem;
font-weight: 700;
`
const Description = styled.p `
margin-top: 2.3rem;
font-size: 1.2rem;
height: 15rem;
`
const Stock = styled.p `
font-size: 1rem;
margin: .4rem .2rem;

`
const Btn = styled.button`
width: 20rem;
height: 3rem;
border: none;
color: whitesmoke;
background-color: #f34e1ebb;
font-size: 1.3rem;

&:hover {
    background-color: #f34e1edd;
}
`
const BtnH = styled.button`
margin-left: .3rem;
width: 4rem;
height: 3rem;
border: none;
color: whitesmoke;
background-color: #f34e1ebb;
font-size: 1.3rem;

&:hover {
    color: #f23030;
    
    background-color: #f34e1edd;
}
`

const  Closecontainer = styled.div `
display:flex;
justify-content: flex-end;
`

const Closebtn = styled.button `
background-color: #ec7979;
border: none;
color: whitesmoke;
font-weight: 900;
&:hover {
    background-color: #e96262;
}
`