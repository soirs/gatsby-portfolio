// components/contact/contact.js

import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/icon';
import OutboundLink from '../outbound-link';

import styles from './contact.module.css';

const Contact = () => (
    <div className={styles.contact}>
    <h1>Contact me:</h1>
    <p className={styles.email}>
    <a href="mailto:Hello@frankrs.dk?subject=Hello%20!" className={styles.link}> hello@frankrs.dk</a>
    </p>
    <div className={styles.lineBreak} />

    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/soirs/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/frankrichardsemakula">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
    </ul>
    </div>
);
  
  export default Contact;