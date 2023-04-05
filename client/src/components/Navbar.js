import React from 'react'
import './nav.css'
import logo from '../img/logo.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from '../Store';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { save, userInfo } = state;


  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/signin';
  };

  const navRef = useRef();

  const showNavbar = () => {
    // navRef.current.classList.toggle("responsive_nav");
    navRef.current.classList.toggle("open");
  };


  let menu=document.querySelector('#menu-icon');
  let navbar=document.querySelector('.navbar');
  // menu.onclick =()=>{
  //   menu.classList.toggle('bx-x');
  //   navbar.classList.toggle('open')
  // }
  return (
    <>
      {/* <ToastContainer position="bottom-center" limit={1} />
      <header>
        <div className='logo'>
          <Link to="/" className="nav-link"><img src={logo}></img></Link>
        </div>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/seller'>For Sell</a></li>
            <li><a href='#'>For Rent</a></li>
            <li><a href='#'>About Us</a></li>
            <li><Nav className="me-auto">
              <Link to="/save" className="nav-link">
                Save
                {save.savedItems.length > 0 && (
                  <Badge pill bg="danger">
                    {save.savedItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav></li>
            <li>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )}
            </li>
            <li>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </li>
          </ul>
        </nav>
      </header> */}

      <ToastContainer position="bottom-center" limit={1} />
      {/* <header>
      <div className='logo'>
          <Link to="/" className="nav-link"><img src={logo}></img></Link>
        </div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/seller">For Sell/Rent</a>
          
          <a href="/about">About</a>

          
              <a href="/save" >
                My List
                {save.savedItems.length > 0 && (
                  <Badge pill bg="danger">
                    {save.savedItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </a>


              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <a
                    className="dropdown-item"
                    href="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </a>
                  <a
                    className="dropdown-item"
                    href="/user/products"
                    
                  >
                    Product List
                  </a>
                </NavDropdown>
              ) : (
                <a  href="/signin">
                  Sign In
                </a>
              )}
            
            {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header> */}



      <header>
        <div className='logo'>
          <Link to="/" className="nav-link"><img src={logo}></img></Link>
        </div>
        <ul className='navbar' ref={navRef}>
          <li><a href='/' className='active'>Home</a></li>
          <li><a href="/seller">For Sell/Rent</a></li>
          <li><a href="/about">About</a></li>
          <li>  <a href="/save" >
                My List
                {save.savedItems.length > 0 && (
                  <Badge pill bg="danger">
                    {save.savedItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </a></li>
          {/* <li><a href='#' >Home</a></li> */}
        </ul>
        <div className='main'>
            {/* <a href='#' className='user'><i className="ri-user-fill"></i>signin</a>
             */}
             {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <a
                    className="dropdown-item"
                    href="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </a>
                  <a
                    className="dropdown-item"
                    href="/user/products"
                    
                  >
                    Product List
                  </a>
                </NavDropdown>
              ) : (
                <a  href="/signin">
                  Sign In
                </a>
              )}
            
            {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            {/* <a href='#'></a> */}
            {/* <div className="bx bx-menu" id="menu-icon"><FaBars /></div>
             */}
             <button className="nav-btn" id="menu-icon" onClick={showNavbar}>
          <FaBars />
        </button>
        </div>
      </header>
    </>
  )
}
