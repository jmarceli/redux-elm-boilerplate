import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from './styles.css';

const FeaturesDescription = (props) => {
  const className = props.className ? `${styles.base} ${props.className}` : styles.base;

  return (
    <ListGroup className={className}>
      <ListGroupItem header="Quick scaffolding">
        Automate the creation of components, containers, routes, selectors and sagas - and their tests - right from the CLI!
      </ListGroupItem>
      <ListGroupItem header="Instant feedback">
        Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!
      </ListGroupItem>
      <ListGroupItem header="Predictable state management">
        Unidirectional data flow allows for change logging and time travel debugging.
      </ListGroupItem>
      <ListGroupItem header="Next generation JavaScript">
        Use template strings, object destructuring, arrow functions, JSX syntax and more, today.
      </ListGroupItem>
      <ListGroupItem header="Next generation CSS">
        Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.
      </ListGroupItem>
      <ListGroupItem header="Industry-standard routing">
        It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.
      </ListGroupItem>
      <ListGroupItem header="Offline-first">
        The next frontier in performant web apps: availability without a network connection from the instant your users load the app.
      </ListGroupItem>
      <ListGroupItem header="Modularity" bsStyle="success">
        Make your app fully modular by using Elm architecture with React and Redux.
      </ListGroupItem>
    </ListGroup>
  );
};

FeaturesDescription.propTypes = {
  className: PropTypes.string,
};

export default FeaturesDescription;
