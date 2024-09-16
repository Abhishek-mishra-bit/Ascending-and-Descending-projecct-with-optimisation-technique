import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./component/Demo/DemoList";
import Button from "./component/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [isAscending, setIsAscending] = useState(true); // State to track order (ascending or descending)

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrderHandler = useCallback(() => {
    setIsAscending((prevOrder) => !prevOrder); // Toggle between ascending and descending
  }, []);

  // List items (static list)
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList = useMemo(() => {
    console.log("Sorting list...");
    const ascendingList = [...listItems].sort((a, b) => a - b);
    const descendingList = [...listItems].sort((a, b) => b - a);
    return isAscending ? ascendingList : descendingList;
  }, [listItems, isAscending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        {isAscending
          ? "Change to Descending Order"
          : "Change to Ascending Order"}
      </Button>
    </div>
  );
}

export default App;
