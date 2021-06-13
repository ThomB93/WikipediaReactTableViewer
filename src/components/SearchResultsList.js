import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ searchResults, columnsToDisplay }) => {
  searchResults.sort((a, b) => a.wordcount < b.wordcount);
  const searchResultsList = searchResults.map((result) => {
    console.log(result);
    return (
      <SearchResult
        key={result.pageid}
        searchResult={result}
        columnsToDisplay={columnsToDisplay}
      />
    );
  });
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Title</th>
          {columnsToDisplay.includes("Snippet") && <th>Snippet</th>}
          {columnsToDisplay.includes("WordCount") && <th>Word Count</th>}
        </tr>
      </thead>
      <tbody>{searchResultsList}</tbody>
    </table>
  );
};

export default SearchResultsList;
