import React, { Component } from 'react'

import Navigation from "../Navigation";
import Products from "../Products";

import '../../static/Css/main.css';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Products />
        
      </div>
    )
  }
}
