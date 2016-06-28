import React from 'react';
import { view } from 'redux-elm';
import styles from './styles.css';

export default view(({ model, dispatch }) => ( // eslint-disable-line no-unused-vars
  <article>
    <div>
      <section className={`${styles.textSection} ${styles.centered}`}>
        <h2>{model.title}</h2>
        <p>A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</p>
      </section>
      <section className={styles.textSection}>
        <h2>Try me!</h2>
        <form className={styles.usernameForm}>
          <label htmlFor="username">Show Github repositories by
            <span className={styles.atPrefix}>@</span>
            <input id="username" className={styles.input} type="text" placeholder="jmarceli" />
          </label>
        </form>
      </section>
    </div>
  </article>
));
