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
      <div>
        <Navbar fixedTop className={styles.Navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link href="/">Redux-elm-boilerplate</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/home">Home</NavItem>
            <NavItem eventKey={2} href="/home2">Home 2</NavItem>
          </Nav>
        </Navbar>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.object,
};
