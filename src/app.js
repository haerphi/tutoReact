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
    this.state = {
      second: 60
    };
    this.plus = this.plusFunction.bind(this);
  }

  plusFunction() {
    this.setState(prevState => ({
      second: prevState.second + 1
    }));
    console.log(this.state.second);
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.state.second} />
        <Bouton value={"+"} handleFunction={this.plus} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
