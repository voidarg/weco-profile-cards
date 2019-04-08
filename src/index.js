import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import Divider from "@material-ui/core/Divider";

const App2 = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <div key={item}>
          <Demo />
          <Divider />
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App2 />, document.querySelector("#root2"));
