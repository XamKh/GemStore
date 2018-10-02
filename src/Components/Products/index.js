import React, { Component } from "react";

import "./main.css";

import CardNavBar from "../CardNavBar";

export default class Products extends Component {
  render() {
    const iHolder =
      "https://smartrenewableheat.com/wp-content/uploads/2018/02/image-placeholder.png";
    return (
      <div className="card-deck">
        <div className="card">
          <div className="textSpace">
            <h5 className="text-left">
              Dodecahedron <span className="float-right">$2.95</span>
            </h5>
          </div>
          <img className="card-img-top" src={iHolder} alt="Product Name" />
          <div className="card-body">
            <button type="button" className="btn btn-primary">
              Add To Cart
            </button>
            <CardNavBar />
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <div className="textSpace">
            <h5 className="text-left">
              Pentagonal
              <span className="float-right">$5.95</span>
            </h5>
          </div>
          <img className="card-img-top" src={iHolder} alt="Product Name" />
          <div className="card-body">
            <button type="button" className="btn btn-primary">
              Add To Cart
            </button>
            <CardNavBar />
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
            <h5 className="text-left">
              Hexagonal
              <span className="float-right">$12.95</span>
            </h5>
          <img className="card-img-top" src={iHolder} alt="Product Name" />
          <div className="card-body">
            <button type="button" className="btn btn-primary">
              Add To Cart
            </button>
            <CardNavBar />
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
  }
}
