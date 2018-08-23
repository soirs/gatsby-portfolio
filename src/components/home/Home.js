// home.js

import React from "react";
import { Link } from "react-router-dom";

import Icon from '../icon/Icon';
import "./Home.css";

class Welcome extends React.Component {	
    render () {
        let time = "";
        var today = new Date()
        var currentHour = today.getHours()

        if (currentHour < 12) {
            console.log('good morning message')
            time = "morning";
            } 
        else if (currentHour < 18) {
            console.log('good afternoon message')
            time = "afternoon";
        }
        else {
            console.log('good evening message')
            time = "evening";
    }
        return (
            <p className="home__message-time">
            Lovely {time},
            </p>

        )
    }
}

const Home = () => (
   <div className="home">
    <div className="home__message">
    <p><Welcome/></p>
        <p>I´m Frank.</p>
        <p>I'm a web developer and music enthusiast.</p>
        <p>Here´s my <Link className="underline" to="/Work">work</Link>.</p>
        <div className="social">
            <a href="https://github.com/soirs/" target="_blank" rel="noopener noreferrer">
                <Icon name="github-white" />
            </a>
            <a href="https://www.linkedin.com/in/FrankRichardSemakula" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin-white" />
            </a>
        </div>
    </div>
   </div>
)

export default Home;