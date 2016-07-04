import React from 'react';
import { view, forwardTo } from 'redux-elm';
import GithubForm from '../../components/GithubForm';
import RepoList from '../../components/RepoList';

export default view(({ model, dispatch }) => {
  function submit(values) {
    // redux-form expects Promise as a result in order to switch submitting state
    // see: https://github.com/yelouafi/redux-saga/issues/161#issuecomment-191312502
    return new Promise((resolve, reject) => {
      // use dispatch function from this component instead of nested (form) component dispatch
      dispatch({ type: 'Submit', data: values, resolve, reject });
    });
  }

  return (
    <div>
      <GithubForm
        submit={submit}
        model={model.githubForm}
        dispatch={forwardTo(dispatch, 'GithubForm')}
      />
      <RepoList repos={model.repoList} />
    </div>
  );
});
