import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav({ backgroundColor, textColor }) {

  const ReturnNav = styled.nav`
    background-color: ${backgroundColor};
    padding-top: 10px;
    padding-bottom: 10px;
    ul {
      display: flex;
      justify-content: center;
    }
    a {
      margin: 0 40px;
      color: ${textColor};
      font-weight: 500;
    }
  `

  return (
      <ReturnNav>
        <ul>
          <Link to="/">Shop</Link>
          <Link to="/admin/ManageItems">Admin</Link>
        </ul>
      </ReturnNav>
  );
}

export default Nav;
