import React, { Component } from "react";
import "./Tour.scss";
import ControlledCarousel from "./carosel";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const {
      name,
      id,
      info,
      city,

      moreInfo,
      data,
      data2,
    } = this.props.info;
    const { removeTour } = this.props;
    console.log(this.props);

    return (
      <article className="tour">
        <div className="img-container">
          <div>{data}</div>
        </div>
        <div className="tour-info">
          <h3> {city}</h3>
          <h4>{name}</h4>
          <h5>
            info{""}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
          <div>
            <Button variant="danger" size="sm" onClick={() => removeTour(id)}>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Loading</span>
              Remove{" "}
            </Button>{" "}
          </div>
        </div>
      </article>
    );
  }
}

export default Tour;
