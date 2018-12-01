import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const params = this.props.match.params;
    this.ref = base.syncState(`${params.storeId}/fishes`,{
      context:this,
      state: 'fishes'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const prevFishes = { ...this.state.fishes };

    prevFishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: prevFishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const prevOrder = { ...this.state.order };
    prevOrder[key] = prevOrder[key] + 1 || 1;
    this.setState({ order: prevOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
