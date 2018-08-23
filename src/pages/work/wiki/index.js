// Wiki.js

import React from "react";
import imgWikipedia from "./gfx/wikipedia.png";

import Fullscreen from '../../../components/fullscreen/fullscreen';
import styles from './wiki.module.css';
import Wrapper from "../../../components/wrapper/wrapper";

class Wiki extends React.Component {
    state = {
        pages: [],
        search: 'minimalism',
        prior: '',
    };
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({search: event.target.value});
        //CONSOLE Log
        // console.log("sxx   " + event.target.value)
      }
        handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.search);
        event.preventDefault();
        this.init();
      }
      // Needed to empty the un-ordered list. Otherwise would it append all the new elements - not replace
      removeElementsByClassName = (className) => {
        var msgs = document.getElementsByClassName(className);
        while(msgs.length > 0){
              msgs[0].parentNode.removeChild(msgs[0]);
          }
      }
        

    fetchWiki = () => {

        this.removeElementsByClassName("result");

        // Clears textbox on buttonclick not enter keypress
        document.getElementsByClassName('textbox').value = '';
        
        // this.setState({search: ''});
        // console.log(this.state.search);
        // console.log(searchButton);

        this.init();
    }
    // CWM. On component open it displays "Minimalism"
      init() {
        this.removeElementsByClassName("result");
        let searchResults = document.getElementById('searchResults');
        let api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=4&search=${this.state.search}&utf8=1&format=json`;

        // Displays "Empty String" page if no input in textbox
        let empty = 'Empty String';
        if (this.state.search.length <= 0) {
          this.setState({search: empty});
          api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=4&search=${empty}&utf8=1&format=json`
        } 

        fetch(api, {cache: "no-store"})
          .then(response => response.json())
          .then(data => {
              console.log(data);
            for(var i=0; i < data[1].length; i++){
                var li = document.createElement('li');
                li.className = "result";
                //LOG TO CONSOLE
                //console.log(data);

                li.innerHTML = 
                "<p class='result__title'><strong><a class='underline' href=" + data[3][i]+" target='_blank'>" + data[1][i]+ "</a></strong><p>" + data[2][i].substring(0,150) + "...</p></p>";
                searchResults.appendChild(li);
            }
          })
          .catch(error => console.log(error));

          this.addList();

      }

      addList = () => {
        String.prototype.capitalize = function() {
          return this.charAt(0).toUpperCase() + this.slice(1);
        };
        this.setState(prevState => ({
          prior: [...prevState.prior, (this.state.search + ", ").capitalize()]
        }));
        if (this.state.prior.length > 2) {
          this.state.prior.slice(Math.max(this.state.prior.length - 3, 1));
    
          console.log(
            this.state.prior.length  +" entries | " +
              this.state.prior 
          );
        }
      };
    componentDidMount() {
        // this.setState({search: ''});

        this.init();
        }

    render() {
        return(
            <section>
            <Fullscreen className={styles.wiki} firstItem>
            <Wrapper>
  
        <div className="wikipedia">

        <img src={imgWikipedia} alt="Wikipedia Searcher"/>

        <div id={styles.searchForm}>
        <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                autoFocus
                className={styles.textbox}
                placeholder={this.state.search}
                ref="filterTextInput"
                // value={this.state.search}
                // onFocus="this.value=''"
                onChange={this.handleChange}
              />
              <button type="button" className={styles.button} onClick={this.fetchWiki}> Search </button>
        </form>
              
        <p className={styles.history}>You've been searching for: <br/><i>{this.state.prior.slice(Math.max(this.state.prior.length - 3, 1))}</i> </p>


        </div>
            <ol id="searchResults" className={styles.searchList}></ol>

            </div>
            

      </Wrapper>
        </Fullscreen>
            </section>
        )
    }
}

export default Wiki;