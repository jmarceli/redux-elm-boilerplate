/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// You may use modularized styles for overriding Bootstrap defaults
import styles from './styles.css';

// TODO: maybe there is some better implementation
// e.g. using stateless functional components
// eslint-disable-next-line react/prefer-stateless-function
export default class Template extends React.Component {
  render() {
    return (
      <section style={{ paddingTop: 50 }}>
        <header>
          <Navbar fixedTop className={styles.Navbar}>
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
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          <Navbar className={styles.footerNavbar}>
            <Nav>
              <NavItem>This project is licensed under the MIT license.</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem>by Jan Grzegorowski</NavItem>
            </Nav>
          </Navbar>
        </footer>
      </section>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.object,
};
