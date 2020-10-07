import React, { useState } from "react";
// import Pagination from "./components/Pagination";
import "./App.css";
import DispImage from "./DispImage";
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [arrow, setArrow] = useState(false);
  const [count, setCount] = useState([1]);
  const [countPerPage] = useState(6);

  const indexOfLastCount = currentPage * countPerPage;
  const indexOfFirstCount = indexOfLastCount - countPerPage;
  const currentCount = count.slice(indexOfFirstCount, indexOfLastCount);

  // console.log("TTT", indexOfLastCount, indexOfFirstCount, count, currentCount);

  const handleClick = () => {
    setCount([...count, 1]);
    setLastPage(Math.ceil((count.length + 1) / 6));
    // console.log("GGGG", count.length, lastPage);
    if (count.length > 5) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  // This handles going to nect page
  // adds 1 to current page
  //
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex-container">
      <DispImage counts={currentCount} />
      <span>
        {arrow && currentPage !== 1 && (
          <button class="btn btn-link" onClick={handlePrev}>
            prev
          </button>
        )}
        {arrow && currentPage !== lastPage && (
          <button class="btn btn-link" onClick={handleNext}>
            next
          </button>
        )}
      </span>
      <br />
      <br />
      <button class="btn btn-warning" onClick={handleClick}>
        Add
      </button>
      <br />
      Total users {count.length} <br />
      Page number {currentPage} <br />
      Total pages {lastPage} <br />
    </div>
  );
};

export default App;
