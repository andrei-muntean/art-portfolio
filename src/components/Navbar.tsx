// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from '@emotion/styled';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1rem 2rem;
  z-index: 50;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <h1>Art Portfolio</h1>
      <ul>
        <li>
          <Link to='/' style={{ color: 'white' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/gallery' style={{ color: 'white' }}>
            Gallery
          </Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
