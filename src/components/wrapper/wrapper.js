// components/wrapper/wrapper.js

import React from 'react';
import classNames from 'classnames';

import styles from './wrapper.module.css';

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
);

export default Wrapper;
