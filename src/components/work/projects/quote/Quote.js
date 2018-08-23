// Quote.js

import React from "react";
import "./Quote.css";
import { Link } from "react-router-dom";


class Quote extends React.Component {
    state = {
      url:
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      quote: [
        {
          ID: 2177,
          content:
            "<p>Minimalism is not a lack of something. It’s simply the perfect amount of something.</p>",
          link: "https://quotesondesign.com/nicholas-burroughs-3/",
          title: "Nicholas Burroughs"
        }
      ]
    };
  
    componentWillMount() {
      console.log(this.state.quote);
    }
  
    storeQuote = data => {
      let quote = data.map(result => {
        let { ID, title, content, link } = result;
        return { ID, title, content, link };
      });
      this.setState({ quote });
      console.log({ quote });
    };
  
    getNewQuote = () => {
      // Button got cached on press. Had to add no-store.
      // Took me quite a few hours to realize
      fetch(this.state.url, { cache: "no-store" })
        .then(response => response.json())
        .then(data => this.storeQuote(data))
        .catch(error => console.log(error));
    };
  
    render() {
      return (
        <div>
          <h3>
            <Link to="/work" className="header__name">Work </Link>
            > Quote Generator
          </h3>
          {
            <div>
              {this.state.quote.map(quote => (
                <div className="quote__box" key={quote.ID}>
                  <div className="">
                    {/*Quote breaks /n at "."*/}
                    <p
                      className="quote__text"
                      dangerouslySetInnerHTML={{
                        __html: quote.content.split(".").join(".</br>")
                      }}
                    />
                    <a href={quote.link} target="_blank" alt="To QuotesOnDesign page for this quote">
                      <p className="quote__author">- {quote.title}</p>
                    </a>
                    <button
                      id="quote__button"
                      className="quote__button"
                      onClick={this.getNewQuote}
                    >
                      Get a new quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      );
    }
  }

export default Quote;