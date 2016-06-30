import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

function ButtonLinkMain(props) {
  const className = props.className ? `${styles.wrapper} ${props.className}` : styles.wrapper;

  return (
    <div className={className}>
      <Link to={props.href} className={`btn btn-primary btn-lg ${styles.base}`} onClick={props.onClick}>
        {props.children}
      </Link>
    </div>
  );
}

ButtonLinkMain.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ButtonLinkMain;
