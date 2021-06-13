import React from "react";

const SearchResult = ({ searchResult, columnsToDisplay }) => {
  const snippet = searchResult.snippet + "...";
  return (
    <tr>
      <td data-label="Title">
        <a href={"https://en.wikipedia.org/wiki/" + searchResult.title}>
          {searchResult.title}
        </a>
      </td>
      {columnsToDisplay.includes("Snippet") && (
        <td
          data-label="Snippet"
          dangerouslySetInnerHTML={{ __html: snippet }}
        ></td>
      )}
      {columnsToDisplay.includes("WordCount") && (
        <td data-label="Word Count">{searchResult.wordcount}</td>
      )}
    </tr>
  );
};

export default SearchResult;
