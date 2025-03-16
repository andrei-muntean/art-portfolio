import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 60px 0px;
  overflow: auto;
`;

const FirstNavLink = styled(Link)`
  font-size: 36px;
  curson: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: black;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  &:hover {
    color: #666;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavLinks>
        <FirstNavLink to='/'>Zaid Haddad</FirstNavLink>
        <NavLink to='/painting'>Painting</NavLink>
        <NavLink to='/architecture'>Architecture</NavLink>
        <NavLink to='/photography'>Photography</NavLink>
        <NavLink to='/videography'>Videography</NavLink>
        <NavLink to='/about'>Bio</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
