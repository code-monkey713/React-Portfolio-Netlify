import React from 'react';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Header
      className="header-color"
      title={
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          Tony Tran
        </Link>
      }
      scroll
    >
      <Navigation>
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Header>
  );
};

export default Navbar;
