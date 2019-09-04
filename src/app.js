//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";

class App extends React.Component {
  render() {
    return <div className={"container"}>{"Hello world"}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
