// About.js

// import React from "react";
// import "./About.css";
// import Icon from '../icon/Icon';

// import FrankImg from "./img/frank.JPG";
// import { Link } from "react-router-dom";

const About = () => (
  <div>
  <div className="about__top">
  <div className="about__top-left">
    <h2 className="about__welcome">Hello World!</h2>
    <div className="social">
            <a href="https://github.com/soirs/" target="_blank" rel="noopener noreferrer">
                <Icon name="github-white" />
            </a>
            <a href="https://www.linkedin.com/in/FrankRichardSemakula" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin-white" />
            </a>
        </div>
  </div>
  <div className="about__top-right">
    <img src={FrankImg} alt="Frank Richard Semakula" className="about__img"/>
  </div>
</div>

  <div className="about__content">
    <div className="about__box about__left about__bio">
      <h3 className="about__bio-frank">Who am I?</h3>
      <p>I'm a frontend developer living in Aarhus, Denmark. I'm your rough diamond.</p>
      <p>I have always loved being creative and change the current perspective on the world.
      I started my journey at Silkeborg School of Business where I studied Marketing and Innovation. Later I continued this journey and did an AP degree in Marketing Mangement and Innovation at Business Academy Aarhus.</p>

      <p>Eventually I realized that the internet was the future and where I found the most joy whilst working and studying. That lead me to graduate as a WebIntegrator.</p>
      <p>Today I venture into the rough seas of JavaScript where my main objective is to give an experience for the visitors.</p>
      <p>Enjoy.</p>
    </div>
    <div className="about__box about__right about__facts">
      <h3 className="">Skills.</h3>
      <h4>Aesthetics and visuals.</h4>
      <p>HTML5, Bootstrap, Sass</p>
      <h4>JavaScript.</h4>
      <p>Vanilla, React, Vue, jQuery</p>
      <h4>Misc.</h4>
      <p>Git, SQL, Node, C#, ASP.Net Web Forms</p>
      <h4>Weapon of choice.</h4>
      <p>VS Code</p>
    </div>
  </div>
    <hr/>

    <ul className="contact__info">
      <li className="contact write">
       <a href="mailto:hire@frankrs.dk" className="write__link">
        <p>
        write. <i className="far fa-envelope icon"></i>
          <br/>
          hire@frankrs.dk</p>
       </a>

      </li>
      <li className="contact call">
        <a href="tel:+4540758775" className="call__link">
        <p>call. <i className="far fa-mobile icon"></i>
          <br/>
          40758775
        </p>
        </a>
      </li>

      <li className="contact meet">
        <p>meet.<i className="far fa-home icon"></i>
          <br/>
          Aarhus, DK
        </p>
      </li>
    </ul>

    </div>
)

export default About;