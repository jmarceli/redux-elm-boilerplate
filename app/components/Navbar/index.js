/**
 * Page navbar
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router'; // just for navigation
import NavLink from '../NavLink'; // just for navigation
import { Navbar, Nav } from 'react-bootstrap';
// You may use modularized styles for overriding Bootstrap defaults
import styles from './styles.css';

const CustomNavbar = (props) => {
  const className = props.className ? `${styles.base} ${props.className}` : styles.base;

  return (
    <Navbar fixedTop className={className}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Redux-elm-boilerplate</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/home2">Home 2</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  className: PropTypes.string,
};

export default CustomNavbar;
