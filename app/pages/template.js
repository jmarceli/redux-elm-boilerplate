/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TODO: maybe there is some better implementation
// e.g. using stateless functional components
// eslint-disable-next-line react/prefer-stateless-function
export default class Template extends React.Component {
  render() {
    return (
      <section style={{ paddingTop: 50 }}>
        <header>
          <Navbar />
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.object,
};
