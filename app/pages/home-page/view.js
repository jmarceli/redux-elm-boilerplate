import React from 'react';
import { view } from 'redux-elm';
import { Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

export default view(({ model, dispatch }) => ( // eslint-disable-line no-unused-vars
  <article>
    <section className="jumbotron">
      <div className="container">
        <h2>{model.title}</h2>
        <p>A highly modular application structure based on redux-elm package (Elm architecture for Redux) and react-boilerplate (most popular Redux foundation).</p>
      </div>
    </section>
    {model.withGithub
    ? <section>
      <div className="container">
        <h2>Try me!</h2>
        <Form inline>
          <FormGroup>
            <ControlLabel htmlFor="username">Show Github repositories by</ControlLabel>
            {' '}
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" id="username" placeholder="jmarceli" />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    </section>
    : ''
    }
  </article>
));
