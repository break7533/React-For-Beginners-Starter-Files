import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

export default class StorePicker extends React.Component {
  myInput = React.createRef();

  static proptTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form onSubmit={this.goToStore.bind(this)} className="store-selector">
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
