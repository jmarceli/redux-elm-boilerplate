import React from 'react';
import { view } from 'redux-elm';
import { PageHeader } from 'react-bootstrap';
import ButtonLinkMain from '../../components/ButtonLinkMain';

export default view(({ model, dispatch }) => ( // eslint-disable-line no-unused-vars
  <article>
    <section className="container">
      <PageHeader>{model.title}</PageHeader>
      <div>{model.content}</div>
      <ButtonLinkMain href="/">Home</ButtonLinkMain>
    </section>
  </article>
));
