/*
 * Technically this should be a container (because of redux store interaction),
 * but from redux-elm point of view this is just a component which calls
 * submit function passed by props and doesn't modify `root` redux store key
 */
import React, { PropTypes } from 'react';
import { view } from 'redux-elm';
import { reduxForm } from 'redux-form';
import { Button, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

let GithubForm = (props) => {
  // props from redux-form (divided into two lines for readability
  const { fields: { username } } = props;
  const { submitting, handleSubmit, submit } = props;

  return (
    <Form inline onSubmit={handleSubmit(submit)}>
      <FormGroup>
        <ControlLabel htmlFor="username">Show Github repositories by</ControlLabel>
        {' '}
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" id="username" placeholder="jmarceli" {...username} />
        </InputGroup>
      </FormGroup>
      {' '}
      <Button type="submit" disabled={submitting}>View</Button>
    </Form>
  );
};

GithubForm.propTypes = {
  fields: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submit: PropTypes.func,
};

// redux-form binding
const mapDispatchToProps = (dispatch, ownProps) => ({
  // WARNING! It is crucial to pass forwarded dispatch from ownProps
  dispatch: ownProps.dispatch,
});

GithubForm = reduxForm({
  form: 'nested',
  fields: ['username'],
}, undefined, mapDispatchToProps)(GithubForm);

// Wrap React Component in standard redux-elm function
export default view(({ model, dispatch, submit }) => (
  <GithubForm model={model} dispatch={dispatch} submit={submit} />
));
