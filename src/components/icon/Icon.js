// icon.js

import React from 'react';
import classNames from 'classnames';

import styles from './icon.module.css';

const Icon = ({ className, name }) => {
  const src = require(`./svg/${name}.svg`);

  return (
    <img src={src} className={classNames(styles.icon, className)} alt={`${name} icon to Frank Semakula ${name} profile`} />
  );
};

export default Icon;
