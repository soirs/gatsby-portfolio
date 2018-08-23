// components/header/header.js

import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.css';
import Wrapper from '../wrapper/wrapper';

const Header = () => (

    <header className={styles.header}>
      <Wrapper>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              <Link to="/">Frank Richard Semakula</Link>
              <br/>
              
            </h1>
            <div className={styles.menu}>
              <Link className={styles.link} to="/about">About</Link>
              <Link className={styles.link} to="/work">Work</Link>
            </div>
          </div>
        </Wrapper>
      </header>


)

export default Header;
