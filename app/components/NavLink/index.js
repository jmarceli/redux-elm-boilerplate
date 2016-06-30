/*
 * Navbar link element with active class provided by react-router
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// This is nice stateless function component
const NavLink = (props, context) => {
  const isActive = context.router.isActive(props.to, true);
  const activeClass = isActive ? 'active' : '';

  return (
    <li className={activeClass}>
      <Link {...props}>{props.children}</Link>
    </li>
  );
};

NavLink.contextTypes = {
  router: PropTypes.object,
};

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default NavLink;
