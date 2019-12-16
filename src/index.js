import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar" />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
