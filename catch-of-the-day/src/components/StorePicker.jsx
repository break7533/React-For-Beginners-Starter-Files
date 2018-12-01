import React from "react";
import { getFunName } from "../helpers";

export default class StorePicker extends React.Component {
  myInput = React.createRef();
  
  goToStore = (event) => {
    event.preventDefault();
    console.log(this)
  }

  render() {
    return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          className="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}
