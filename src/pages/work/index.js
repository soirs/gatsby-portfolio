// Work.js

import React from 'react';
import Fullscreen from '../../components/fullscreen/fullscreen';
import Wrapper from '../../components/wrapper/wrapper';

import styles from './work.module.css';
// import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

// import projects from '../../projects/projects.js';
// {projects.map(project =>   )}

const Work = () => (
    <div>
    <Fullscreen className={styles.work} firstItem>
    <Wrapper>
    <h3>My work.</h3>
        <div className="work">
        <p className="">COMMERCIAL</p>
        <br/>
        <div className="project som">
            <h2 className="underline">
            <a href="https://info.firstagenda.com/state-of-meetings">
            State of Meetings</a></h2>
            <p>Internship at FirstAgenda. Display of the meeting landscape in Denmark 2018 Version 1.0 
            </p><p>
            A site that I designed and coded myself </p>
        </div>

        <hr/>
        <p className="">PERSONAL PLAYGROUND</p>
        <br/>
        
        <div className="project movie">
            <h2 className="underline"><a href="https://moviedb.frankrs.dk/">Movie Database</a></h2>
        </div>

            <div className="project quote">
            <h2 className="underline">
                <Link to="./Quote">Quote Generator</Link>
            </h2>
            <p>Uses <a href="https://www.quotesondesign.com" className="underline" target="_blank" rel="noopener noreferrer">QuotesOnDesign</a> API to fetch content</p>
            </div>
        <br/>


            <div className="project wiki">
            <h2 className="underline">
                <Link to="./Wiki">Wikipedia Searcher</Link>
                </h2>  
            </div>

            <div className="project hidden">
            <h2 className="underline">
                <a href="https://old.frankrs.dk" className="underline" target="_blank" rel="noopener noreferrer">Old Portfolio</a> 
                </h2>  
            </div>


            
        </div>
        </Wrapper>
        </Fullscreen>
        </div>
)

export default Work;
