import React, { PropTypes } from 'react';
import { view } from 'redux-elm';
import { reduxForm } from 'redux-form';
import { Button, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';

// standard submit mehod
// see: http://redux-form.com/5.2.5/#/api/props?_k=bc4k2f#-handlesubmit-eventorsubmit-function-
function submit(values, dispatch) {
  // redux-form expects Promise as submit result in order to switch submitting state
  // see: https://github.com/yelouafi/redux-saga/issues/161#issuecomment-191312502
  return new Promise((resolve, reject) => {
    dispatch({ type: 'Submit', data: values, resolve, reject });
  });
}

let GithubForm = (props) => {
  // props from redux-form (divided into two lines for readability
  const { fields: { username } } = props;
  const { submitting, handleSubmit } = props;

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
export default view(({ model, dispatch }) => (
  <GithubForm model={model} dispatch={dispatch} />
));
