/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Template = (props) => (
  <section style={{ paddingTop: 50 }}>
    <header>
      <Navbar />
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      <Footer />
    </footer>
  </section>
);

Template.propTypes = {
  children: React.PropTypes.object,
};

export default Template;
