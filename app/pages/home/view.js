import React from 'react';
import { view, forwardTo } from 'redux-elm';
import ButtonLinkMain from '../../components/ButtonLinkMain';
import RepoViewer from '../../containers/RepoViewer';

export default view(({ model, dispatch }) => (
  <article>
    <section className="jumbotron">
      <div className="container">
        <h2>{model.title}</h2>
        <p>A highly modular application structure based on redux-elm package (Elm
        architecture for Redux) and react-boilerplate (most popular Redux foundation).</p>
      </div>
    </section>
    {model.withGithub
    ? <section>
      <div className="container">
        <h2 className="page-header">Try me!</h2>
        <RepoViewer model={model.repoViewer} dispatch={forwardTo(dispatch, 'RepoViewer')} />
        {/* Example onClick callback */}
        <ButtonLinkMain href="/features" onClick={() => { console.log('Features'); }}>
          Features
        </ButtonLinkMain>
      </div>
    </section>
    : ''
    }
  </article>
));
