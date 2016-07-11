/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { view } from 'redux-elm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// model and dispatch are also available as arguments for view
export default view(({ children }) => (
  <section style={{ paddingTop: 50 }}>
    <header>
      <Navbar />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </section>
));
