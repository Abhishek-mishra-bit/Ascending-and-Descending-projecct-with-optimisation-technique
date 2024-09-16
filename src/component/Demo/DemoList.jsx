import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  // Sorting logic based on isAscending prop
  // Re-run sorting when items or isAscending changes

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
