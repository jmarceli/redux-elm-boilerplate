/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation

// TODO: maybe there is some better implementation
// e.g. using stateless functional components
// eslint-disable-next-line react/prefer-stateless-function
export default class Template extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/home">home1</Link>
          <Link to="/home2">home2</Link>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.array,
};
