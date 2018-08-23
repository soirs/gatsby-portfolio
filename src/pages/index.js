// pages/index.js

import React from 'react'
import Link from 'gatsby-link'

import Fullscreen from '../components/fullscreen/fullscreen';
import Wrapper from '../components/wrapper/wrapper';
// import Contact from '../components/contact/contact';

import styles from './index.module.css';


const IndexPage = () => (
  <div>
  <Fullscreen className={styles.intro} firstItem>
  <Wrapper>
  <h1 className="welcome">
   <Welcome/>
   <br/>
   <br/>   
       I'm a web developer and music enthusiast.
       <br/>
       <br/>
       This is my playground.
       <br/>
       <br/>
       Here's my <Link className={styles.link} to="/work/">work</Link>.
    </h1>
   </Wrapper>
   </Fullscreen>

  </div>
)
class Welcome extends React.Component {
  render () {
      let time = "";
      var today = new Date()
      var currentHour = today.getHours()

      if (currentHour < 12) {
          console.log('Good morning to you dear visitor')
          time = "morning";
          } 
      else if (currentHour < 18) {
          console.log('Good afternoon to you dear visitor')
          time = "afternoon";
      }
      else {
          console.log('Good evening to you dear visitor')
          time = "evening";
  }
      return (
          <span className={styles.welcome}>
          Lovely {time}, I'm Frank.
          </span>
      )
  }
}


export default IndexPage
