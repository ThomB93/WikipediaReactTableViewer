import React from "react";
import wikipedia from "../apis/wikipedia.js";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

class App extends React.Component {
  state = {
    searchResults: [],
    wordCountToggleClass: "ui toggle button active",
    snippetToggleClass: "ui toggle button active",
    columnsDislayed: ["Title", "Snippet", "WordCount"],
  };
  componentDidMount() {
    this.onTermSubmit("Cat");
  }
  onTermSubmit = async (term) => {
    const response = await wikipedia.get("", {
      params: {
        srsearch: term,
      },
    });
    //console.log(response);
    this.setState({ searchResults: response.data.query.search });
  };
  onColumnToggle = (columnName) => {
    switch (columnName) {
      case "WordCount":
        if (this.state.wordCountToggleClass === "ui toggle button active") {
          this.setState((prevState) => ({
            wordCountToggleClass: "ui toggle button",
            columnsDislayed: prevState.columnsDislayed.filter(
              (column) => column !== "WordCount"
            ),
          }));
        } else {
          this.setState((prevState) => ({
            wordCountToggleClass: "ui toggle button active",
            columnsDislayed: prevState.columnsDislayed.concat("WordCount"),
          }));
        }
        break;
      case "Snippet":
        if (this.state.snippetToggleClass === "ui toggle button active") {
          this.setState((prevState) => ({
            snippetToggleClass: "ui toggle button",
            columnsDislayed: prevState.columnsDislayed.filter(
              (column) => column !== "Snippet"
            ),
          }));
        } else {
          this.setState((prevState) => ({
            snippetToggleClass: "ui toggle button active",
            columnsDislayed: prevState.columnsDislayed.concat("Snippet"),
          }));
        }
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <div className="ui grid">
          <div className="twelve wide column">
            <SearchBar onSubmit={this.onTermSubmit} />
            <SearchResultsList
              columnsToDisplay={this.state.columnsDislayed}
              searchResults={this.state.searchResults}
            />
          </div>

          <div className="four wide column">
            <div className="ui container">
              <a
                href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
                rel="noreferrer"
              >
                <button className="ui button">Random Article</button>
              </a>
              <button
                className={this.state.wordCountToggleClass}
                style={{ marginTop: 10 }}
                onClick={() => this.onColumnToggle("WordCount")}
              >
                Show Word Count
              </button>
              <button
                className={this.state.snippetToggleClass}
                style={{ marginTop: 10 }}
                onClick={() => this.onColumnToggle("Snippet")}
              >
                Show Snippet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
