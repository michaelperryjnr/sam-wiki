import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById('root') as HTMLElement;

const Rendered = (): JSX.Element => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(React.createElement(Rendered), root);
