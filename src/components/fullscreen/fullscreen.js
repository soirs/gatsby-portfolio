// components/fullscreen/fullscreen.js

import React from 'react';
import classNames from 'classnames';

import styles from './fullscreen.module.css';

const Fullscreen = ({ children, className, firstItem }) => {
    const containerClassName = classNames(
      firstItem ? styles.first : styles.fullscreen,
      className,
    );
  
    return (
      <div className={containerClassName}>
        {children}
      </div>
    );
  };
  
  export default Fullscreen;