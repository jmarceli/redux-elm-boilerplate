/**
 * Page navbar
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router'; // just for navigation
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// You may use modularized styles for overriding Bootstrap defaults
import styles from './styles.css';

// TODO: maybe there is some better implementation
// e.g. using stateless functional components
// eslint-disable-next-line react/prefer-stateless-function
function CustomNavbar(props) {
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
          <NavItem eventKey={1} href="/home">Home</NavItem>
          <NavItem eventKey={2} href="/home2">Home 2</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

CustomNavbar.propTypes = {
  className: PropTypes.string,
};

export default CustomNavbar;
