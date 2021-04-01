import React from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
import actionBackground from '../img/backgrounds/actionbackground.png';

function Header({ headerBackgroundColor, headerTextColor }) {

    const ReturnDiv = styled.div`
        position: relative;
        background-color: ${headerBackgroundColor};
        color: ${headerTextColor};
    `
    const ContainerDiv = styled.div`
        padding-top: 10px;
        padding-bottom: 10px;
        p {
            text-align: center;
            font-size: 0.8rem;
        }
        &:before {
            content: ' ';
            display: block;
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            background-image: url(${actionBackground});
            background-repeat: no-repeat;
            background-position: 50% 85%;
            background-size: cover;
    `
    const LogoContainer = styled.div`
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    `
    const heartAnimation = keyframes`
            to {opacity: 0.3}
    `
    const Logo = styled.h1`
        font-family: 'Metal Mania', cursive;
        font-size: 3.4rem;
        margin: 0 50px;
        padding: 0;
        text-align: center;
        .fa {
            font-size: 1rem;
            color: red;
            position: relative;
            bottom: 0.5rem;
            animation: ${heartAnimation} 1s alternate infinite;
        }
    `
    const LineDiv = styled.div`
        border-bottom: 2px solid ${headerTextColor};
        width: 100px;
    `

    return (
        <ReturnDiv>
            <ContainerDiv>
                <LogoContainer>
                    <LineDiv></LineDiv>
                    <Logo>Tech<i className={"fa fa-heart"}></i>en</Logo>
                    <LineDiv></LineDiv>
                </LogoContainer>
                <p>Tech K.O.? We got you</p>
            </ContainerDiv>
        </ReturnDiv>
    )
}

export default Header
