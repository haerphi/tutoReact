//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";

class App extends React.Component {
  render() {
    return (
      <div className={"container"}>
        {"Hello world"}
        <Timer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
