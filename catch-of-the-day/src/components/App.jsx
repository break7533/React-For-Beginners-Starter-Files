import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const prevFishes = { ...this.state.fishes };

    prevFishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: prevFishes
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
