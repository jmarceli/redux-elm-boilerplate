/*
 * Repository list element
 */
import React, { PropTypes } from 'react';
import { Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';

const RepoList = (props) => (
  <ListGroup>
    {props.repos.map((repo) =>
      <ListGroupItem key={repo.id}>
        {/* JSON.stringify(repo) */}
        <a href={repo.url}>{repo.name}</a>
        <div className="pull-right">
          <Glyphicon glyph="star" /> {repo.stargazers_count}
          {' '}
          <Glyphicon glyph="eye-open" /> {repo.watchers_count}
        </div>
      </ListGroupItem>
    )}
  </ListGroup>
);

RepoList.propTypes = {
  repos: PropTypes.array,
};

export default RepoList;
