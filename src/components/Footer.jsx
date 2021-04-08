import React from 'react'
import styled from 'styled-components'
import '../App.css'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    height: 80px;
    background-color: #ededed;
    margin-top: 30px;
    
    p {
        margin-top: 20px;
    }
`

function Footer() {

    return (
        <StyledFooter>
            <p>Copyright &#169; 2021</p>
        </StyledFooter>
    )
  }
  
  export default Footer