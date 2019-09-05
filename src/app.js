//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";
import Bouton from "./components/bouton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.seconde = 60;
    this.plus = this.plusFunction.bind(this);
  }

  plusFunction() {
    this.seconde++;
    console.log(this.seconde);
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.seconde} />
        <Bouton value={"+"} handleFunction={this.plus} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
