import React, { useEffect, useState } from "react";
import "./App.css";

// const Search = (props) => {
//   return (
//     <div>
//       <h4>Search...</h4>
//       <input
//         onChange={props.handleSearchInput}
//         value={props.searchInput}
//         type="text"
//         id="quote"
//         placeholder="type keyword"
//       />
//     </div>
//   );
// };

function App() {
  const [quoteObject, setQuoteObject] = useState([]);
  const [clicked, setClicked] = useState(false);
  // const [searchInput, setSearchInput] = useState("");

  // const handleSearchInput = (event) => {
  //   setSearchInput(event.target.value);
  // };
  useEffect(() => {
    fetch("https://rita-glushkova-quote-server.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuoteObject(data);
      });
  }, [clicked]);

  // useEffect(() => {
  //   fetch(
  //     `https://rita-glushkova-quote-server.glitch.me/quotes/search?term=${searchInput}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [searchInput]);

  return (
    <div>
      <div
        className="box"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className="fas fa-quote-left fa2"></i>
        <div className="text">
          <i className="fas fa-quote-right fa1"></i>
          <div>
            <h3>Quote the day</h3>
            <p>{quoteObject.quote}</p>
            <cite> - {quoteObject.author}</cite>
          </div>
        </div>
      </div>
      {/* <Search handleSearchInput={handleSearchInput} searchInput={searchInput} /> */}
    </div>
  );
}

export default App;
