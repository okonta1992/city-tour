import React, { Component } from "react";
import Tour from "../Tour/Tour";
import tourData from "../../tourData";
import "./Tourlist.scss";

class Tourlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData,
    };
  }
  removeTour = (id) => {
    const deleteItem = this.state.tours.filter((item) => item.id !== id);
    this.setState({
      tours: deleteItem,
    });
  };
  render() {
    return (
      <div className="tourlist">
        {this.state.tours.map((item) => (
          <Tour info={item} key={item.id} removeTour={this.removeTour} />
        ))}
      </div>
    );
  }
}

export default Tourlist;
