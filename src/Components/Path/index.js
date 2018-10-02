import React, { Component } from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from '../Home';


export default class Path extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Redirect from="/" exact to="/Home" />
            <Route path="/Home" component = {Home} /> {/*render={() => <Home onAddToCart={this.props.onAddToCart} onRemoveProduct={this.props.onRemoveProduct} products={this.props.products}   />} /> 
            <Route path="/About" component={About} />
    <Route path="/Cart" render={() => <Cart cart={this.props.cart} />} /> */}
        </Switch>);
        
      </div>
    )
  }
}
