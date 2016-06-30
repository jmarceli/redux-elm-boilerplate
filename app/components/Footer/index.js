/**
 * Page footer
 */
import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// You may use modularized styles for overriding Bootstrap defaults
import styles from './styles.css';

function Footer(props) {
  const className = props.className ? `${styles.base} ${props.className}` : styles.base;

  return (
    <Navbar className={className}>
      <Nav>
        <NavItem>This project is licensed under the MIT license.</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>by Jan Grzegorowski</NavItem>
      </Nav>
    </Navbar>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
