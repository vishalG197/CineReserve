
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.jpg';
import styled from 'styled-components';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <nav>
        <div className="logo">
          <img src={logo} alt="cinereserve" />
        </div>
        <button className={`navbar-toggle ${showMenu ? 'is-active' : ''}`} onClick={handleMenuClick}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <ul className={`navbar-nav ${showMenu ? 'is-active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/locations" className="nav-link">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
   
  }

  .logo img {
    height: 50px;
  }

  .navbar-toggle {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .navbar-toggle-icon {
    display: block;
    width: 30px;
    height: 3px;
  
    border-radius: 3px;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-toggle-icon::before,
  .navbar-toggle-icon::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    
    border-radius: 3px;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-toggle-icon::before {
    transform: translateY(-8px);
  }

  .navbar-toggle-icon::after {
    transform: translateY(8px);
  }

  .navbar-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-link {
    
    text-decoration: none;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    .navbar-toggle {
      display: block;
    }

    .navbar-nav {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
     
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .navbar-nav.is-active {
      display: flex;
    }

    .nav-item {
      margin: 10px 0;
    }

    .navbar-toggle.is-active .navbar-toggle-icon {
      transform: rotate(45deg);
    }

    .navbar-toggle.is-active .navbar-toggle-icon::before {
      transform: translateY(0) rotate(45deg);
    }

    .navbar-toggle.is-active .navbar-toggle-icon::after {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;
