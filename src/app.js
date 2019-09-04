//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.seconde = 60;
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.seconde} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
