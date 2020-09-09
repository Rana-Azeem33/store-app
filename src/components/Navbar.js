import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../shop1.png';
import styled from 'styled-components';
import { ButtonContainer } from "./button";

export default class navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
            
            <img src={logo} alt="shop" className="navbar-brand" width=
            '50' />
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
            <Link to="/" className="nav-Link">
            products
            </Link>
            
            </li>
            
            </ul>
            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" />
            </span>
            my cart
            
            
            </ButtonContainer>
            
            
            </Link>
            
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background:var(--mainblue) !important;
.nav-Link {
color: var(--mainwhite) !important;
font-size:1.3rem;
text-transform:capitalize;
text-decoration:none;
}
`;




